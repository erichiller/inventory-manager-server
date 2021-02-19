FROM stefanscherer/node-windows:12.18.3-windowsservercore-2019 as builder

SHELL ["powershell", "-Command", "$ErrorActionPreference = 'Stop'; $ProgressPreference = 'SilentlyContinue';"]

ARG INVENTORY_COMMIT_SHA
ARG INVENTORY_COMMIT_DATE
ARG APACHE_VERSION=2.4.46

# WORKDIR /tmp
# COPY package.json /tmp/
# RUN yarn


WORKDIR /app
# RUN Copy-Item -Recurse /tmp/node_modules /app/
COPY package.json /app/
RUN yarn
COPY tsconfig.json /app/
COPY webpack.config.js /app/
COPY webpack.config.prod.js /app/
COPY src /app/src
RUN yarn build





FROM mcr.microsoft.com/windows/servercore:1809

COPY --from=builder /app/dist /app

# see: 
# https://www.apachelounge.com/download/

# SHELL ["powershell", "-Command", "$ErrorActionPreference = 'Stop'; $ProgressPreference = 'SilentlyContinue';"]

LABEL Description="Apache" Vendor="Apache Software Foundation" Version=$APACHE_VERSION

# httpd-2.4.46-win64-VS16.zip   

RUN powershell -Command \
    $ErrorActionPreference = 'Stop'; \
    Invoke-WebRequest ('http://de.apachehaus.com/downloads/httpd-{0}-o102n-x64-vc14-r2.zip' -f $env:APACHE_VERSION) -OutFile 'apache.zip' -UseBasicParsing ;  ; \
    Expand-Archive -Path c:\apache.zip -DestinationPath c:\ ; \
    Remove-Item c:\apache.zip -Force




# Install correct Visual C++ Redistributable Package
# RUN Write-Host('Visual C++ 2017 Redistributable Package') ; \
#     $URL2 = 'https://download.visualstudio.microsoft.com/download/pr/11100230/15ccb3f02745c7b206ad10373cbca89b/VC_redist.x64.exe' ; \
#     Invoke-WebRequest -Uri $URL2 -OutFile 'C:\\vcredist.exe' ; \
#     Start-Process 'C:\\vcredist.exe' -Wait \
#     -ArgumentList @( \
#     '/install', \
#     '/passive', \
#     '/norestart' \
#     ); \
#     Copy-Item 'C:\\windows\\system32\\vcruntime140.dll' -Destination 'C:\\pgsql\\bin\\vcruntime140.dll' ;


RUN powershell -Command \
    $ErrorActionPreference = 'Stop'; \
    Invoke-WebRequest -Method Get -Uri "https://aka.ms/vs/16/release/VC_redist.x64.exe" -OutFile c:\vcredist_x64.exe ; \
    start-Process c:\vcredist_x64.exe -ArgumentList '/quiet' -Wait ; \
    Remove-Item c:\vcredist_x64.exe -Force

WORKDIR /Apache24/bin

CMD /Apache24/bin/httpd.exe -w





# HEALTHCHECK --start-period=30s --interval=10s --retries=5 \
#     CMD powershell -command \
#     try { \
#     $response = iwr -useb http://localhost/api/health; \
#     if ($response.StatusCode -eq 200) { return 0 } \
#     else {return 1}; \
#     } catch { return 1 }