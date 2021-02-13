# escape=`

FROM stefanscherer/node-windows:12.18.3-windowsservercore-2019

SHELL ["powershell", "-Command", "$ErrorActionPreference = 'Stop'; $ProgressPreference = 'SilentlyContinue';"]

# WORKDIR /tmp
# COPY package.json /tmp/
# RUN yarn

WORKDIR /app
# RUN Copy-Item -Recurse /tmp/node_modules /app/
COPY package.json /app/
# COPY yarn.lock /app/  # TODO: this doesn't work anymore with yarn workspaces
RUN yarn
COPY tsconfig.json /app/
COPY webpack.config.js /app/
COPY src /app/src

CMD yarn run-dev-server
EXPOSE 80
