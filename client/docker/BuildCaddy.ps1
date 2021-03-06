


# Get xcaddy from
# https://github.com/caddyserver/xcaddy/releases
# https://github.com/caddyserver/xcaddy/releases/download/v0.1.8/xcaddy_0.1.8_windows_amd64.zip
# https://caddyserver.com/docs/build
xcaddy build `
    --with github.com/abiosoft/caddy-json-schema `
    --with github.com/caddy-dns/gandi `
    --with github.com/greenpau/caddy-auth-portal
    # any other module you want to include in the generated schema


# golang
# https://golang.org/dl/go1.16.windows-amd64.zip

