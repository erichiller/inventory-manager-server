FROM node:buster

WORKDIR /tmp
COPY package.json /tmp/
RUN npm config set registry http://registry.npmjs.org/ ; \
    npm install

ENV PORT=80

WORKDIR /app
RUN cp -r /tmp/node_modules /app/
COPY package.json /app/
COPY tsconfig.json /app/
COPY src /app/src

CMD npm run-script run
EXPOSE ${PORT}
