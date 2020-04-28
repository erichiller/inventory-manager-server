# escape=`

FROM stefanscherer/node-windows:10.16.3-windowsservercore-2019

SHELL ["powershell", "-Command", "$ErrorActionPreference = 'Stop'; $ProgressPreference = 'SilentlyContinue';"]

WORKDIR /tmp
COPY package.json /tmp/
RUN yarn

WORKDIR /app
RUN Copy-Item -Recurse /tmp/node_modules /app/
COPY package.json /app/
COPY tsconfig.json /app/
COPY webpack.config.js /app/
COPY yarn.lock /app/
COPY src /app/src
RUN yarn

CMD yarn run-dev-server
EXPOSE 80
