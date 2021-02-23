
install go

git clone "https://github.com/caddyserver/caddy.git"


xcaddy build v2.0.0 `
    # https://github.com/abiosoft/caddy-json-schema
    --with github.com/abiosoft/caddy-json-schema --no-cache \
    --with github.com/caddy-dns/gandi \
    --with github.com/greenpau/caddy-auth-portal
    # any other module you want to include in the generated schema



# Get xcaddy from
# https://github.com/caddyserver/xcaddy/releases
# https://github.com/caddyserver/xcaddy/releases/download/v0.1.8/xcaddy_0.1.8_windows_amd64.zip


# golang
# https://golang.org/dl/go1.16.windows-amd64.zip

# https://caddyserver.com/docs/build
# xcaddy build \
#     --with github.com/caddyserver/nginx-adapter
# 	--with github.com/caddyserver/ntlm-transport@v0.1.1