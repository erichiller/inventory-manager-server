add-type -TypeDefinition  @"
        using System.Net;
        using System.Security.Cryptography.X509Certificates;
        public class TrustAllCertsPolicy : ICertificatePolicy {
            public bool CheckValidationResult(
                ServicePoint srvPoint, X509Certificate certificate,
                WebRequest request, int certificateProblem) {
                return true;
            }
        }
"@
[System.Net.ServicePointManager]::CertificatePolicy = New-Object TrustAllCertsPolicy
try {
    $response = Invoke-WebRequest -UseBasic ( 'https://{0}/health-check' -f $env:WEB_DOMAIN );
    if ($response.StatusCode -eq 200) { 
        return 0;
    }
    else {
        return 1;
    };
} catch { 
    return 1;
}