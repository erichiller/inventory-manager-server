
[IO.Directory]::SetCurrentDirectory((Convert-Path (Get-Location -PSProvider FileSystem))) ;


Set-Content `
    -Path \Apache24\conf\httpd.conf `
    -Value ( [IO.File]::ReadAllText('\Apache24\conf\httpd.conf' ) -replace ('\s*#\s*# Controls.*\s*#', "`nOptions -MultiViews`nRewriteEngine On`nRewriteCond %{REQUEST_FILENAME} !-f`nRewriteRule ^ index.html [QSA,L]`n" ) ) ; 




# Set-Content `
#     -Path \Apache24\conf\httpd.conf `
#     -Value ( `
#         [IO.File]::ReadAllText('\Apache24\conf\httpd.conf' ) -replace `
#         ( `
#             '\s*#\s*# Controls.*\s*#', `
#             "`nOptions -MultiViews`nRewriteEngine On`nRewriteCond %{REQUEST_FILENAME} !-f`nRewriteRule ^ index.html [QSA,L]`n" `
#         ) `
#     ) ; 

    
Set-Content `
    -Path \Apache24\conf\httpd.conf `
    -Value ( `
        [IO.File]::ReadAllText('\Apache24\conf\httpd.conf' ) -replace `
        ( `
            '#LoadModule rewrite_module modules/mod_rewrite.so', `
            'LoadModule rewrite_module modules/mod_rewrite.so' `
        ) `
    ) ; 

Add-Content -Path \Apache24\conf\httpd.conf -Value 'ErrorLog "| C:/Windows/System32/more.com"'