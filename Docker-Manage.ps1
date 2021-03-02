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
    [Parameter(ParameterSetName = "Containers")]
    [Alias("b")]
    [switch]
    $Build
    ,
    [Parameter(ParameterSetName = "Containers")]
    [Alias("r", "Start")]
    [switch]
    $Run
    ,
    [Parameter(ParameterSetName = "Containers")]
    [Alias("rm")]
    [switch]
    $Remove
    ,
    [Parameter(ParameterSetName = "Containers")]
    [Alias("c")]
    [switch]
    $Console
    ,
    [Parameter(ParameterSetName = "Containers")]
    [Alias("l", "Log")]
    [switch]
    $Logs
    ,
    [Parameter(ParameterSetName = "Caddy")]
    [Alias("w", "web")]
    [switch]
    $RunWebServer
    ,
    [Parameter(ParameterSetName = "Caddy")]
    [switch]
    $BuildWebServer
    ,
    [Parameter(ParameterSetName = "Caddy")]
    [switch]
    $AdaptCaddyfile
    ,
    # https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_functions_advanced_parameters?view=powershell-6
    [Parameter(Mandatory = $true, ParameterSetName = "Containers")]
    [ValidateSet('hasura', 'inventory-web', 'inventory-manager-api')]
    $container
    ,
    [Parameter(ParameterSetName = "Containers")]
    [Parameter(ParameterSetName = "Caddy")]
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


$DoContainers = {

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
            
            # --env GANDI_API_KEY=$env:GANDI_API_KEY `
            #     --env WEB_DOMAIN=$env:WEB_DOMAIN `
            #     --env TLS_CA_EMAIL=$env:TLS_CA_EMAIL `
            #     --env TLS_CA_URL=$env:TLS_CA_EMAIL `
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
                --build-arg XCADDY_VERSION=$($ContainerParams.XCADDY_VERSION.toString()) `
                --build-arg GO_VERSION=$($ContainerParams.GO_VERSION.toString()) `
                --file ( Join-Path $PSScriptRoot client docker Dockerfile ) `
            ( Join-Path $PSScriptRoot client )
        }
        if ( $container -eq "hasura") {
            $env:DOCKER_HOST = $ContainerParams.ContainerHost ;
            docker container rm -f graphql ;
            docker run -p 8080:8080 `
                -e HASURA_GRAPHQL_DATABASE_URL=postgres://${env:HASURA_GRAPHQL_ENGINE_USERNAME}:${env:HASURA_GRAPHQL_ENGINE_PASSWORD}@pg.hiller.pro:5432/inventory `
                -e HASURA_GRAPHQL_ENABLE_CONSOLE=true `
                -e HASURA_GRAPHQL_ADMIN_SECRET=$env:HASURA_GRAPHQL_ENGINE_PASSWORD `
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

$DoCaddy = {
    $caddyPath = Join-Path $PSScriptRoot ".caddy" ;
    $xcaddyPath = Join-Path $caddyPath "xcaddy" ;
    $caddyExePath = Join-Path $caddyPath "caddy.exe" ;
    if ( $BuildWebServer  ) {
        Invoke-WebRequest `
            -Uri "https://github.com/ghostwheel42/caddy-json-schema/archive/nullable.zip" `
            -OutFile $( Join-Path $caddyPath "patchedSchemaGenerator.zip" );
        Expand-Archive $( Join-Path $caddyPath "patchedSchemaGenerator.zip" ) -Force -DestinationPath $caddyPath ;


        Invoke-WebRequest `
            -Uri ( 'https://github.com/caddyserver/xcaddy/releases/download/v{0}/xcaddy_{0}_windows_amd64.zip' -f ( $Containers["inventory-web"].XCADDY_VERSION.toString() ) ) `
            -OutFile $( Join-Path $caddyPath "xcaddy.zip" ) ;
        Expand-Archive `
        $( Join-Path $caddyPath "xcaddy.zip" ) `
            -Force `
            -DestinationPath $xcaddyPath ;

        Push-Location -Path $caddyPath

        & $( Join-Path $xcaddyPath "xcaddy.exe" ) `
            build `
            --with github.com/abiosoft/caddy-json-schema=$( Join-Path $caddyPath "caddy-json-schema-nullable" ) `
            --with github.com/caddy-dns/gandi `
            --with github.com/greenpau/caddy-auth-portal `
            --with github.com/caddyserver/jsonc-adapter ;
        Pop-Location
    }
    
    if ( -not $(Test-Path $caddyExePath ) ) {
        Write-Error "caddy.exe was not found at $caddyExePath";
    }

    if ( $GenerateCaddyJsonSchema ) {
        Write-Information "Converting Caddyfile..."
        $schemaPath = $( Join-Path $PSScriptRoot "client" "docker" "caddy_schema.json" ) ;
        & $caddyExePath json-schema --output $schemaPath --no-cache
        Write-Information "Ensure .vscode/settings.json includes reference to caddy schema" ;
    }
    
    if ( $AdaptCaddyfile ) {
        Write-Information "Converting Caddyfile..."
        $env:DATA_DIRECTORY = Join-Path $caddyPath "data";
        New-Item -ItemType Directory -Path $env:DATA_DIRECTORY -Force ;
        if ( $Verbose -eq $True ) {
            & $caddyExePath environ
        }
        & $caddyExePath adapt -validate -pretty `
            -config $( Join-Path $PSScriptRoot "client" "docker" "caddyfile" )
    }

    if ( $RunWebServer ) {
        # $domainName = [String]::Join( '.', ( [System.Net.Dns]::GetHostByName(($env:computerName)).HostName -split "\." | Select-Object -skip 1 ) );
        $hostnameFQDN = [System.Net.Dns]::GetHostByName(($env:computerName)).HostName;
        $caddyExePath = Join-Path $caddyPath "caddy.exe" ;
        $env:DATA_DIRECTORY = Join-Path $caddyPath "data";
        $env:APP_DIRECTORY = Join-Path $PSScriptRoot "client" "dist";
        $env:WEB_DOMAIN = $hostnameFQDN;
        New-Item -ItemType Directory -Path $env:DATA_DIRECTORY -Force ;
        # Show-Env | Format-Table
        if ( $Verbose -eq $True ) {
            & $caddyExePath environ
        }
        & $caddyExePath run -watch -config $( Join-Path $PSScriptRoot "client" "docker" "caddyfile" ) -adapter caddyfile
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

    # if ($Global:PreviousDir -eq (Get-Location).Path) {
    #     Write-Verbose "Set-PsEnv:Skipping same dir"
    #     return
    # } else {
    #     $Global:PreviousDir = (Get-Location).Path
    # }

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

Set-PsEnv -DotEnv $DotEnv -ErrorAction Stop # -Verbose

Write-Information "Loaded environment variables."

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
        XCADDY_VERSION = "0.1.8"
        GO_VERSION     = "1.16"
    }
    hasura                  = @{
        MAC           = "4E:00:00:00:04:03"
        Hostname      = "hasura"
        ContainerHost = $env:DOCKER_HOST_LINUX
        Shell         = "/bin.bash"
    }
}

if ( $container ) {
    &$DoContainers
}
if ( $BuildWebServer -or $RunWebServer -or $AdaptCaddyfile ) {
    &$DoCaddy
}