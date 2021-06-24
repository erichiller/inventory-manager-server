

$packageJsonPath = Join-Path $PSScriptRoot ".." "./node_modules/jsoneditor/package.json";
$packageJson = ( Get-Content $packageJsonPath  | ConvertFrom-Json );
$packageJson.main = "./dist/jsoneditor.js";

ConvertTo-Json $packageJson | Set-Content $packageJsonPath



$indexTsPath = Join-Path $PSScriptRoot ".." "./node_modules/graphql-tag/src/index.ts";
$parentTsPath = Split-Path -Path $indexTsPath -Parent

New-Item -ItemType Directory -Path $parentTsPath -Force

Write-Output "Creating directory $parentTsPath";

Invoke-WebRequest -Uri "https://raw.githubusercontent.com/apollographql/graphql-tag/main/src/index.ts" `
    -OutFile $indexTsPath ;