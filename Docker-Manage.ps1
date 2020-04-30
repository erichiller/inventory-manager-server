<#
.Description
Manage docker containers and images
.Parameter Build
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
    [ValidateSet('Hasura', 'inventory-manager-api')]
    $container
    
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

$DOCKER_USER = "ehiller";
# $

$Containers = @{
    "inventory-manager-api" = @{
        MAC             = "4E:00:00:00:04:01"
        Hostname        = "inventory-api"
        ContainerHost   = "WINSERV1"
        Ports           = @( "3000:3000" )
        Shell           = "powershell"
        # Image    = "inventory-manager-api"
    }
    hasura = @{
        MAC             = "4E:00:00:00:04:03"
        Hostname        = "hasura"
        ContainerHost   = "ubntv"
        Shell           = "/bin.bash"
    }
}

$ContainerParams = $Containers[$container];

$ContainerParams

$TPorts           = @( "3000:3000", "222:2222" )

$TPortsString = $TPorts | ForEach-Object {
    "-p ${_}"
}

# "foo".

# $TPortsString = $TPorts.

# echo $TPortsString

# Server

if ( $Build ){
    Write-Output "Building $container";
    docker image build $PSScriptRoot\server\ -t $DOCKER_USER/${container}:latest -t $DOCKER_USER/${container}:$(Get-Date -format "yyMMdd_HHmmss" )
}

if ( $Remove ){
    docker container rm -f $container
}

if ( $Run ){
    $mac = $ContainerParams.MAC.toString();
    $hostname = $ContainerParams.Hostname.toString();
docker run -d `
    -p $ContainerParams.Ports `
    --name $container `
    --restart always `
    --network "Mellanox ConnectX-3 Pro Ethernet Adapter #2 - Virtual Switch" `
    --mac-address=$mac `
    --hostname=$hostname `
        $DOCKER_USER/${container}
}

if ( $Logs ){
    docker -H $ContainerParams.ContainerHost logs $container -f
}

if ( $Console ){
    docker -H $ContainerParams.ContainerHost exec -it $container $ContainerParams.Shell
}



# Hasura

# $env:DOCKER_HOST="ubntv"
# docker container rm -f graphql
# docker run -p 8080:8080 `
#   -e HASURA_GRAPHQL_DATABASE_URL=postgres://hasura:xeEYlDFh4wVPC7hzz01d@pg.hiller.pro:5432/inventory `
#   -e HASURA_GRAPHQL_ENABLE_CONSOLE=true `
#   -e HASURA_GRAPHQL_ADMIN_SECRET=achoo `
#   --name graphql `
#   --hostname graphql `
#   --dns 192.168.10.1 `
#   --dns-search hiller.pro `
#   -d `
#   hasura/graphql-engine:latest
#   -it `
#   /bin/sh


$env:DOCKER_HOST="ubntv" ; 
docker container rm -f graphql ; 
docker run -p 8080:8080 `
  -e HASURA_GRAPHQL_DATABASE_URL=postgres://hasura:xeEYlDFh4wVPC7hzz01d@pg.hiller.pro:5432/inventory `
  -e HASURA_GRAPHQL_ENABLE_CONSOLE=true `
  -e HASURA_GRAPHQL_ADMIN_SECRET=achoo `
  --name graphql `
  --hostname graphql `
  --dns 192.168.10.1 `
  --dns-search hiller.pro `
  -d `
  hasura/graphql-engine
