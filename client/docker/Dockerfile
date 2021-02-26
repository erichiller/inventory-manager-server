#escape=`
FROM mcr.microsoft.com/windows/servercore:1809 as CaddyBuilder

SHELL ["powershell", "-Command", "$ErrorActionPreference = 'Stop'; $ProgressPreference = 'SilentlyContinue';"]

ARG XCADDY_VERSION
ARG GO_VERSION


WORKDIR /go

RUN Invoke-WebRequest -Uri ( 'https://golang.org/dl/go{0}.windows-amd64.zip' -f ( $env:GO_VERSION ) ) -OutFile /go.zip; `
    Expand-Archive /go.zip -Force -DestinationPath / ; `
    Write-Host "Adding Go to Path" ; `
    setx /M PATH ( '{0};{1}' -f ( 'C:\go\bin', $env:PATH ) ) ;


RUN Invoke-WebRequest -Uri https://github.com/ghostwheel42/caddy-json-schema/archive/nullable.zip -OutFile /patchedSchemaGenerator.zip; `
    Expand-Archive /patchedSchemaGenerator.zip -Force -DestinationPath / ;


RUN Invoke-WebRequest -Uri ( 'https://github.com/caddyserver/xcaddy/releases/download/v{0}/xcaddy_{0}_windows_amd64.zip' -f ( $env:XCADDY_VERSION ) ) -OutFile /xcaddy.zip ; `
    Expand-Archive /xcaddy.zip -Force -DestinationPath /xcaddy ;

WORKDIR /caddy

RUN /xcaddy/xcaddy build --with github.com/abiosoft/caddy-json-schema=/caddy-json-schema-nullable --with github.com/caddy-dns/gandi --with github.com/greenpau/caddy-auth-portal --with github.com/caddyserver/jsonc-adapter


############################
# Node & App Build
############################
FROM mcr.microsoft.com/windows/servercore:1809 as AppBuilder

SHELL ["powershell", "-Command", "$ErrorActionPreference = 'Stop'; $ProgressPreference = 'SilentlyContinue';"]

ARG YARN_VERSION=1.22.5
ARG NODE_VERSION=12.20.1
ARG GIT_DOWNLOAD_URL=https://github.com/git-for-windows/git/releases/download/v2.30.0.windows.2/MinGit-2.30.0.2-busybox-64-bit.zip
ARG GIT_SHA256=d8aae417d7a2a69437b8ad6f517a58a1c1719548554822988d3ec53468719525

ARG INVENTORY_COMMIT_SHA
ARG INVENTORY_COMMIT_DATE
ARG HASURA_GRAPHQL_ENGINE_URL
ARG HASURA_GRAPHQL_ENGINE_PASSWORD

WORKDIR /

RUN powershell -Command `
    Invoke-WebRequest $('https://nodejs.org/dist/v{0}/node-v{0}-win-x64.zip' -f $env:NODE_VERSION) -OutFile C:\node.zip -UseBasicParsing ; `
    Expand-Archive 'C:\node.zip' -DestinationPath 'C:\\' ; `
    Rename-Item -Path $('C:\node-v{0}-win-x64' -f $env:NODE_VERSION) -NewName 'C:\nodejs' ; `
    Remove-Item -Force C:\node.zip ;


RUN powershell -Command `
    [Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12 ; `
    Invoke-WebRequest $('https://yarnpkg.com/downloads/{0}/yarn-{0}.msi' -f $env:YARN_VERSION) -OutFile C:\yarn.msi -UseBasicParsing ; `
    Start-Process msiexec.exe -ArgumentList '/i', 'C:\yarn.msi', '/quiet', '/norestart' -NoNewWindow -Wait; `
    Remove-Item C:\yarn.msi ;


RUN powershell -Command `
    [Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12 ; `
    Invoke-WebRequest -UseBasicParsing $env:GIT_DOWNLOAD_URL -OutFile git.zip; `
    if ((Get-FileHash git.zip -Algorithm sha256).Hash -ne $env:GIT_SHA256) { Write-Output 'Error: Hash is not valid'; exit 1; } ; `
    Expand-Archive git.zip -DestinationPath C:\git; `
    Remove-Item git.zip ;


ENV NPM_CONFIG_LOGLEVEL info

RUN powershell -Command `
    $env:PATH = ( 'C:\nodejs;C:\yarn\bin;C:\git\cmd;C:\git\mingw64\bin;C:\git\usr\bin;{0}' -f $env:PATH ) ; `
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

RUN powershell -Command `
    Write-Host ( 'Building with Date={0} and SHA={1}' -f $env:INVENTORY_COMMIT_DATE , $env:INVENTORY_COMMIT_SHA ) ; `
    yarn build


############################
# Final
############################
FROM mcr.microsoft.com/windows/servercore:1809

SHELL ["powershell", "-Command", "$ErrorActionPreference = 'Stop'; $ProgressPreference = 'SilentlyContinue';"]

ENV GANDI_API_KEY "ENTER_GANDI_API_KEY_HERE"
ENV WEB_DOMAIN "ENTER_DOMAIN_HERE"
ENV DATA_DIRECTORY C:/data
ENV APP_DIRECTORY C:/app
ENV AUX_DNS 1.1.1.1
ENV TLS_CA_EMAIL "ENTER_LETS_ENCRYPT_EMAIL_HERE"
# testing Let's Encrypt URL
ENV TLS_CA_URL https://acme-staging-v02.api.letsencrypt.org/directory


COPY --from=CaddyBuilder /caddy/caddy.exe /caddy.exe
# COPY --from=CaddyBuilder /windows/system32/msvcp140.dll /windows/system32
# COPY --from=builder /windows/system32/vcruntime140.dll /windows/system32

COPY --from=AppBuilder /app/dist ${APP_DIRECTORY}}

WORKDIR /

EXPOSE 80
RUN mkdir $env:DATA_DIRECTORY
VOLUME ${DATA_DIRECTORY}


COPY ./docker/caddy.json $DATA_DIRECTORY/caddy.json


CMD ./caddy run -config $DATA_DIRECTORY/caddy.json

# Generate schema and serve at /configSchema
# build site