# FROM stefanscherer/node-windows:12.18.3-windowsservercore-2019 as builder

# FROM mcr.microsoft.com/windows/servercore:1809 as builder
# FROM mcr.microsoft.com/windows/servercore:10.0.17763.1457-amd64 as builder
FROM mcr.microsoft.com/dotnet/sdk:5.0-windowsservercore-ltsc2019 as builder

# SHELL ["powershell", "-Command", "$ErrorActionPreference = 'Stop'; $ProgressPreference = 'SilentlyContinue';"]

ARG INVENTORY_COMMIT_SHA
ARG INVENTORY_COMMIT_DATE
ARG HASURA_GRAPHQL_ENGINE_URL
ARG HASURA_GRAPHQL_ENGINE_PASSWORD

ARG APACHE_VERSION

ARG YARN_VERSION=1.22.5
ARG NODE_VERSION=12.20.1
ARG GIT_DOWNLOAD_URL=https://github.com/git-for-windows/git/releases/download/v2.30.0.windows.2/MinGit-2.30.0.2-busybox-64-bit.zip
ARG GIT_SHA256=d8aae417d7a2a69437b8ad6f517a58a1c1719548554822988d3ec53468719525

# see: 
# https://www.apachelounge.com/download/
RUN powershell -Command \
    $url = ('http://de.apachehaus.com/downloads/httpd-{0}-o111j-x64-vs16.zip' -f $env:APACHE_VERSION); \
    Write-Host "Downloading httpd version ${env:APACHE_VERSION} from $url"; \
    Invoke-WebRequest $url -OutFile 'apache.zip' -UseBasicParsing ;  ; \
    Expand-Archive -Path c:\apache.zip -DestinationPath c:\ ; \
    Remove-Item c:\apache.zip -Force


RUN powershell -Command \
    Invoke-WebRequest \
        -Method Get \
        -Uri "https://aka.ms/vs/16/release/VC_redist.x64.exe" \
        -OutFile c:\vcredist_x64.exe \
    ; \
    ;

RUN start /w vcredist_x64.exe /install /quiet /norestart


RUN powershell -Command \
    Invoke-WebRequest $('https://nodejs.org/dist/v{0}/node-v{0}-win-x64.zip' -f $env:NODE_VERSION) -OutFile 'node.zip' -UseBasicParsing ; \
    Expand-Archive node.zip -DestinationPath C:\ ; \
    Rename-Item -Path $('C:\node-v{0}-win-x64' -f $env:NODE_VERSION) -NewName 'C:\nodejs' ; \
    Remove-Item -Force C:\node.zip ;


RUN powershell -Command \
    [Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12 ; \
    Invoke-WebRequest $('https://yarnpkg.com/downloads/{0}/yarn-{0}.msi' -f $env:YARN_VERSION) -OutFile yarn.msi -UseBasicParsing ; \
    Start-Process msiexec.exe -ArgumentList '/i', 'yarn.msi', '/quiet', '/norestart' -NoNewWindow -Wait; \
    Remove-Item C:\yarn.msi ;


RUN powershell -Command \
    [Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12 ; \
    Invoke-WebRequest -UseBasicParsing $env:GIT_DOWNLOAD_URL -OutFile git.zip; \
    if ((Get-FileHash git.zip -Algorithm sha256).Hash -ne $env:GIT_SHA256) { Write-Output 'Error: Hash is not valid'; exit 1; } ; \
    Expand-Archive git.zip -DestinationPath C:\git; \
    Remove-Item git.zip


ENV NPM_CONFIG_LOGLEVEL info

RUN powershell -Command \
    $env:PATH = 'C:\nodejs;C:\yarn\bin;C:\git\cmd;C:\git\mingw64\bin;C:\git\usr\bin;{0}' -f $env:PATH ; \
    [Environment]::SetEnvironmentVariable('PATH', $env:PATH, [EnvironmentVariableTarget]::Machine)

WORKDIR /app
COPY package.json /app/
RUN yarn
COPY tsconfig.json /app/
COPY webpack.config.js /app/
COPY webpack.config.prod.js /app/
COPY src /app/src
ENV INVENTORY_COMMIT_DATE=${INVENTORY_COMMIT_DATE}
ENV INVENTORY_COMMIT_SHA=${INVENTORY_COMMIT_SHA}
RUN powershell -Command \
    # $env:INVENTORY_COMMIT_DATE=${INVENTORY_COMMIT_DATE} ; \
    # $env:INVENTORY_COMMIT_SHA=${INVENTORY_COMMIT_SHA} ; \
    Write-Host ( 'Building with Date={0} and SHA={1}' -f $env:INVENTORY_COMMIT_DATE , $env:INVENTORY_COMMIT_SHA ) ; \
    yarn build

# Setup Apache Config
COPY SetHttpdConfig.ps1 /SetHttpdConfig.ps1
RUN powershell /SetHttpdConfig.ps1



FROM mcr.microsoft.com/windows/servercore:1809 


COPY --from=builder /Apache24 /Apache24
COPY --from=builder /windows/system32/msvcp140.dll /windows/system32
COPY --from=builder /windows/system32/vcruntime140.dll /windows/system32

# COPY --from=builder /app/dist /app
COPY --from=builder /app/dist /Apache24/htdocs

WORKDIR /Apache24/bin
EXPOSE 80

# CMD /Apache24/bin/httpd.exe -w
CMD /Apache24/bin/httpd.exe





# HEALTHCHECK --start-period=30s --interval=10s --retries=5 \
#     CMD powershell -command \
#     try { \
#     $response = iwr -useb http://localhost/api/health; \
#     if ($response.StatusCode -eq 200) { return 0 } \
#     else {return 1}; \
#     } catch { return 1 }