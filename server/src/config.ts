// static configs

export const HASURA_GRAPHQL_ENGINE_URL  = process.env.HASURA_GRAPHQL_ENGINE_URL || `http://GRAPHQL:8080`;
export const HASURA_GRAPHQL_API_URL     = HASURA_GRAPHQL_ENGINE_URL + '/v1/graphql';
export const HASURA_ACCESS_KEY = process.env.X_HASURA_ACCESS_KEY || "achoo";
export const PORT = parseInt(process.env.PORT) || 8080;
export const PRINTER_HOST = process.env.PRINTER_HOST || "192.168.10.43"