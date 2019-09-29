


# Hasura

$env:DOCKER_HOST="ubntv"
docker container rm -f graphql
docker run -p 8080:8080 `
  -e HASURA_GRAPHQL_DATABASE_URL=postgres://hasura:xeEYlDFh4wVPC7hzz01d@pg.hiller.pro:5432/inventory `
  -e HASURA_GRAPHQL_ENABLE_CONSOLE=true `
  -e HASURA_GRAPHQL_ADMIN_SECRET=achoo `
  --name graphql `
  --hostname graphql `
  --dns 192.168.10.1 `
  --dns-search hiller.pro `
  -d `
  hasura/graphql-engine:latest
#   -it `
#   /bin/sh