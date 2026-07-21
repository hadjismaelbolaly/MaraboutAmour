import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const code = request.nextUrl.searchParams.get("code");
  const clientId = process.env.GITHUB_OAUTH_CLIENT_ID;
  const clientSecret = process.env.GITHUB_OAUTH_CLIENT_SECRET;

  if (!code || !clientId || !clientSecret) {
    return new NextResponse(
      "Paramètres OAuth manquants. Vérifie GITHUB_OAUTH_CLIENT_ID et GITHUB_OAUTH_CLIENT_SECRET sur Vercel.",
      { status: 400 }
    );
  }

  const tokenRes = await fetch("https://github.com/login/oauth/access_token", {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({ client_id: clientId, client_secret: clientSecret, code }),
  });

  const tokenData = await tokenRes.json();

  if (!tokenData.access_token) {
    return new NextResponse("Échec de l'authentification GitHub. Réessaie de te connecter.", {
      status: 401,
    });
  }

  const payload = JSON.stringify({ token: tokenData.access_token, provider: "github" });
  const authMessage = `authorization:github:success:${payload}`;

  const html = `<!DOCTYPE html>
<html>
  <head><meta charset="utf-8" /><title>Connexion en cours...</title></head>
  <body>
    <p>Connexion en cours, cette fenêtre va se fermer automatiquement...</p>
    <script>
      (function () {
        function receiveMessage(message) {
          window.opener.postMessage(${JSON.stringify(authMessage)}, message.origin);
          window.removeEventListener("message", receiveMessage, false);
        }
        window.addEventListener("message", receiveMessage, false);
        window.opener.postMessage("authorizing:github", "*");
      })();
    </script>
  </body>
</html>`;

  return new NextResponse(html, { headers: { "Content-Type": "text/html; charset=utf-8" } });
}
