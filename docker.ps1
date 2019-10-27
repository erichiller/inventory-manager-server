

# Server

docker image build .\server\ -t ehiller/inventory-manager-api:latest

docker container rm -f inventory-manager-api

docker run -d `
-p 3000:3000 `
--name inventory-manager-api `
--restart always `
--network "Mellanox ConnectX-3 Pro Ethernet Adapter #2 - Virtual Switch" `
--mac-address="4E:00:00:00:04:01" `
--hostname="inventory-api" `
ehiller/inventory-manager-api 

docker logs inventory-manager-api -f



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