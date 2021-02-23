#escape=`
FROM mcr.microsoft.com/windows/servercore:1809

SHELL ["powershell", "-Command", "$ErrorActionPreference = 'Stop'; $ProgressPreference = 'SilentlyContinue';"]

ENV GANDI_API_KEY
ENV WEB_DOMAIN
ENV DATA_DIRECTORY
ENV TLS_CA_EMAIL
ENV TLS_CA_URL

ARG XCADDY_VERSION
ARG GO_VERSION

WORKDIR /go

RUN Invoke-WebRequest -Url https://golang.org/dl/go$GO_VERSION.windows-amd64.zip






WORKDIR /caddy

RUN Invoke-WebRequest -Url https://github.com/caddyserver/xcaddy/releases/download/v$XCADDY_VERSION/xcaddy_$XCADDY_VERSION_windows_amd64.zip


COPY ./caddy.json $DATA_DIRECTORY/caddy.json


CMD ./caddy run -config $DATA_DIRECTORY/caddy.json