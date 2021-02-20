# FROM stefanscherer/node-windows:12.18.3-windowsservercore-2019 as builder

# FROM mcr.microsoft.com/windows/servercore:1809 as builder
# FROM mcr.microsoft.com/windows/servercore:10.0.17763.1457-amd64 as builder
FROM mcr.microsoft.com/dotnet/sdk:5.0-windowsservercore-ltsc2019 as builder

# SHELL ["powershell", "-Command", "$ErrorActionPreference = 'Stop'; $ProgressPreference = 'SilentlyContinue';"]

ARG INVENTORY_COMMIT_SHA
ARG INVENTORY_COMMIT_DATE

ARG APACHE_VERSION


# see: 
# https://www.apachelounge.com/download/
RUN powershell -Command \
    $url = ('http://de.apachehaus.com/downloads/httpd-{0}-o111j-x64-vs16.zip' -f $env:APACHE_VERSION); \
    Write-Host "Downloading httpd version ${env:APACHE_VERSION} from $url"; \
    Invoke-WebRequest $url -OutFile 'apache.zip' -UseBasicParsing ;  ; \
    Expand-Archive -Path c:\apache.zip -DestinationPath c:\ ; \
    Remove-Item c:\apache.zip -Force


# RUN Invoke-WebRequest -Method Get -Uri "https://download.visualstudio.microsoft.com/download/pr/89a3b9df-4a09-492e-8474-8f92c115c51d/B1A32C71A6B7D5978904FB223763263EA5A7EB23B2C44A0D60E90D234AD99178/VC_redist.x64.exe" -OutFile c:\vcredist_x64.exe ; \
RUN powershell -Command \
    Invoke-WebRequest \
        -Method Get \
        -Uri "https://aka.ms/vs/16/release/VC_redist.x64.exe" \
        -OutFile c:\vcredist_x64.exe \
    ; \
    ;

RUN start c:\vcredist_x64.exe --quiet --wait --norestart --nocache

USER ContainerAdministrator
RUN curl -fSLo vc_redist.x64.exe https://download.microsoft.com/download/6/A/A/6AA4EDFF-645B-48C5-81CC-ED5963AEAD48/vc_redist.x64.exe \
    && start /w vc_redist.x64.exe /install /quiet /norestart
RUN del vc_redist.x64.exe


# RUN start c:\vcredist_x64.exe \
    #     /Wait \
    #     -ArgumentList @( \
    #         '/install', \
    #         '/passive', \
    #         '/norestart' \
    # ); \
    # Remove-Item c:\vcredist_x64.exe -Force \
    # ;


# RUN Get-ChildItem c:\\ ; \
#     Get-ChildItem C:\Apache24 ;
# RUN Get-ChildItem 'C:\\Program Files\\'
# RUN Get-ChildItem 'C:\\Program Files (x86)\\'
# RUN Get-ChildItem C:\windows\system32\msv*
# RUN Get-ChildItem C:\windows\system32\vc*
# RUN Get-ChildItem C:\windows

RUN dir C:\windows\system32\msv*
RUN dir C:\windows\system32\vc*

# WORKDIR /app
# # RUN Copy-Item -Recurse /tmp/node_modules /app/
# COPY package.json /app/
# RUN yarn
# COPY tsconfig.json /app/
# COPY webpack.config.js /app/
# COPY webpack.config.prod.js /app/
# COPY src /app/src
# RUN yarn build

# IMPORTANT: TRY WITH EXECUTIONPOLICY BYPASS
#            Try with Cmd.exe (no powershell)
#            Try with dotnet image base



# FROM mcr.microsoft.com/windows/servercore:10.0.17763.1457-amd64
# FROM mcr.microsoft.com/windows/servercore:1809 

# FROM mcr.microsoft.com/dotnet/sdk:5.0-windowsservercore-ltsc2019

# COPY --from=builder /Apache24 /Apache24
# # COPY --from=builder /windows/system32/msvcp140.dll /windows/system32
# # COPY --from=builder /windows/system32/vcruntime140.dll /windows/system32

# # COPY --from=builder /app/dist /app

# ARG APACHE_VERSION

# LABEL Description="Apache" Vendor="Apache Software Foundation" Version=$APACHE_VERSION


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