<#
.Description
Manage docker containers and images
.Parameter Build
Create Image
.Parameter DotEnv
Path to .env file
#>
[CmdletBinding()]
param (
    # [Parameter(Mandatory = $true)]
    # [Alias("CN", "MachineName")]
    [Alias("b")]
    [switch]
    $Build
    ,
    [Alias("r", "Start")]
    [switch]
    $Run
    ,
    [Alias("rm")]
    [switch]
    $Remove
    ,
    [Alias("c")]
    [switch]
    $Console
    ,
    [Alias("l", "Log")]
    [switch]
    $Logs
    ,
    # https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_functions_advanced_parameters?view=powershell-6
    [Parameter(Mandatory = $true)]
    [ValidateSet('hasura', 'inventory-web', 'inventory-manager-api')]
    $container
    ,
    [ValidateScript( {
            if (-Not ($_ | Test-Path) ) {
                throw "File or folder does not exist"
            }
            if (-Not ($_ | Test-Path -PathType Leaf) ) {
                throw "The Path argument must be a file. Folder paths are not allowed."
            }
            if ($_ -notmatch "(\.env)") {
                throw "The file specified in the path argument must be either of type env"
            }
            return $true 
        })]
    [Alias("e")]
    [System.IO.FileInfo]$DotEnv = ".env"
    
    # [Parameter(Mandatory=$true)]
    # [ArgumentCompleter( {
    #         param ( $commandName,
    #             $parameterName,
    #             $wordToComplete,
    #             $commandAst,
    #             $fakeBoundParameters )
    #         # Perform calculation of tab completed values here.
    #     })]

)

# https://stackoverflow.com/questions/5237723/how-do-i-get-help-messages-to-appear-for-my-powershell-script-parameters


$Do = {
    Set-PsEnv -DotEnv $DotEnv

    $Containers = @{
        "inventory-manager-api" = @{
            MAC           = "4E:00:00:00:04:01"
            Hostname      = "inventory-api"
            # Stack         = "inventory"             # docker-compose stack name
            ContainerHost = $env:DOCKER_HOST_WINDOWS
            Ports         = @( "3000:3000" )
            Shell         = "powershell"
        }
        "inventory-web"         = @{
            MAC            = "4E:00:00:00:04:02"
            Hostname       = "inventory-web"
            Stack          = "inventory"             # docker-compose stack name
            ContainerHost  = $env:DOCKER_HOST_WINDOWS
            Ports          = @( "80:80" )
            Shell          = "powershell"
            APACHE_VERSION = "2.4.46"
        }
        hasura                  = @{
            MAC           = "4E:00:00:00:04:03"
            Hostname      = "hasura"
            ContainerHost = $env:DOCKER_HOST_LINUX
            Shell         = "/bin.bash"
        }
    }

    $ContainerParams = $Containers[$container];

    $ContainerParams

    $TPorts = @( "3000:3000", "222:2222" )

    $TPortsString = $TPorts | ForEach-Object {
        "-p ${_}"
    }


    if ( $Build ) {
        Write-Output "Building $container";
        $arg_INVENTORY_COMMIT_SHA = git describe --always;
        $arg_INVENTORY_COMMIT_DATE = git log -1 --format=%aI;
    
        Write-Output "Building $container with SHA=${arg_INVENTORY_COMMIT_SHA} DATE=${arg_INVENTORY_COMMIT_DATE}";
        if ( $container -eq "inventory-manager-api" ) {
            docker image build $PSScriptRoot\server\ `
                --host $ContainerParams.ContainerHost `
                -t ${env:DOCKER_USER}/${container}:latest `
                -t ${env:DOCKER_USER}/${container}:$arg_INVENTORY_COMMIT_SHA `
                -t ${env:DOCKER_USER}/${container}:$(Get-Date -format "yyMMdd_HHmmss" ) `
                --build-arg `
                INVENTORY_COMMIT_SHA=$arg_INVENTORY_COMMIT_SHA `
                INVENTORY_COMMIT_DATE=$arg_INVENTORY_COMMIT_DATE
        }
        if ( $container -eq "inventory-web" ) {
            docker `
                --host $ContainerParams.ContainerHost `
                image build `
                -t ${env:DOCKER_USER}/${container}:latest `
                -t ${env:DOCKER_USER}/${container}:$arg_INVENTORY_COMMIT_SHA `
                -t ${env:DOCKER_USER}/${container}:$(Get-Date -format "yyMMdd_HHmmss" ) `
                --build-arg INVENTORY_COMMIT_SHA=$arg_INVENTORY_COMMIT_SHA `
                --build-arg INVENTORY_COMMIT_DATE=$arg_INVENTORY_COMMIT_DATE `
                --build-arg HASURA_GRAPHQL_ENGINE_URL=$env:HASURA_GRAPHQL_ENGINE_URL `
                --build-arg HASURA_GRAPHQL_ENGINE_PASSWORD=$env:HASURA_GRAPHQL_ENGINE_PASSWORD `
                --build-arg APACHE_VERSION=$($ContainerParams.APACHE_VERSION.toString()) `
                $PSScriptRoot\client\
        }
        if ( $container -eq "hasura") {
            $env:DOCKER_HOST = $ContainerParams.ContainerHost ; 
            docker container rm -f graphql ; 
            docker run -p 8080:8080 `
                -e HASURA_GRAPHQL_DATABASE_URL=postgres://hasura:${env:HASURA_GRAPHQL_ENGINE_PASSWORD}@pg.hiller.pro:5432/inventory `
                -e HASURA_GRAPHQL_ENABLE_CONSOLE=true `
                -e HASURA_GRAPHQL_ADMIN_SECRET=achoo `
                --name graphql `
                --hostname graphql `
                --dns 192.168.10.1 `
                --dns-search hiller.pro `
                -d `
                hasura/graphql-engine
        }
    }

    if ( $Remove ) {
        docker container rm -f $container
    }

    if ( $Run ) {
        $mac = $ContainerParams.MAC.toString();
        $hostname = $ContainerParams.Hostname.toString();
        docker run -d `
            -H $ContainerParams.ContainerHost `
            -p $ContainerParams.Ports `
            --name $container `
            --restart always `
            --network "Mellanox ConnectX-3 Pro Ethernet Adapter #2 - Virtual Switch" `
            --mac-address=$mac `
            --hostname=$hostname `
            ${env:DOCKER_USER}/${container}
    }

    if ( $Logs ) {
        docker -H $ContainerParams.ContainerHost logs $container -f
    }

    if ( $Console ) {
        $fullContainerName = $container ;
        if ( -not [string]::IsNullOrEmpty( $ContainerParams.Stack ) ) {
            $container_short = $container -replace ( "^$($ContainerParams.Stack)-", "")
            $fullContainerName = $ContainerParams.Stack + "_" + $container_short + "_1";
        }
        Write-Output "docker -H $($ContainerParams.ContainerHost) exec -it $fullContainerName $($ContainerParams.Shell)"
        docker -H $ContainerParams.ContainerHost exec -it $fullContainerName $ContainerParams.Shell
    }

}


<#
.Synopsis
Exports environment variable from the .env file to the current process.
.Description
This function looks for .env file in the current directoty, if present
it loads the environment variable mentioned in the file to the current process.
.Example
 Set-PsEnv
 
 .Example
 #.env file format
 #To Assign value, use "=" operator
 <variable name>=<value>
 #To Prefix value to an existing env variable, use ":=" operator
 <variable name>:=<value>
 #To Suffix value to an existing env variable, use "=:" operator
 <variable name>=:<value>
 #To comment a line, use "#" at the start of the line
 #This is a comment, it will be skipped when parsing
.Example
 # This is function is called by convention in PowerShell
 # Auto exports the env variable at every prompt change
 function prompt {
     Set-PsEnv
 }
.LINK
https://github.com/rajivharris/Set-PsEnv
#>
function Set-PsEnv {
    [CmdletBinding(SupportsShouldProcess = $true, ConfirmImpact = 'Low')]
    param(
        [ValidateScript( {
                if (-Not ($_ | Test-Path) ) {
                    throw "File or folder does not exist"
                }
                if (-Not ($_ | Test-Path -PathType Leaf) ) {
                    throw "The Path argument must be a file. Folder paths are not allowed."
                }
                if ($_ -notmatch "(\.env)") {
                    throw "The file specified in the path argument must be either of type env"
                }
                return $true 
            })]
        [Alias("e")]
        [System.IO.FileInfo]$DotEnv = ".env"
    )

    if ($Global:PreviousDir -eq (Get-Location).Path) {
        Write-Verbose "Set-PsEnv:Skipping same dir"
        return
    } else {
        $Global:PreviousDir = (Get-Location).Path
    }

    #read the local env file
    $content = Get-Content $DotEnv -ErrorAction Stop
    Write-Verbose "Parsed .env file"

    #load the content to environment
    foreach ($line in $content) {

        if ([string]::IsNullOrWhiteSpace($line)) {
            Write-Verbose "Skipping empty line"
            continue
        }

        #ignore comments
        if ($line.StartsWith("#")) {
            Write-Verbose "Skipping comment: $line"
            continue
        }

        #get the operator
        if ($line -like "*:=*") {
            Write-Verbose "Prefix"
            $kvp = $line -split ":=", 2            
            $key = $kvp[0].Trim()
            $value = "{0};{1}" -f $kvp[1].Trim(), [System.Environment]::GetEnvironmentVariable($key)
        } elseif ($line -like "*=:*") {
            Write-Verbose "Suffix"
            $kvp = $line -split "=:", 2            
            $key = $kvp[0].Trim()
            $value = "{1};{0}" -f $kvp[1].Trim(), [System.Environment]::GetEnvironmentVariable($key)
        } else {
            Write-Verbose "Assign"
            $kvp = $line -split "=", 2
            $key = $kvp[0].Trim()
            $value = $kvp[1].Trim()
        }

        Write-Verbose "$key=$value"
        
        if ($PSCmdlet.ShouldProcess("environment variable $key", "set value $value")) {            
            [Environment]::SetEnvironmentVariable($key, $value, "Process") | Out-Null
        }
    }
}

&$Do