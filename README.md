# Site — Hadj Ismael Bohlaly

Site de consultation et d'accompagnement spirituel en amour, construit avec
Next.js 14 (App Router), TypeScript, Tailwind CSS et Framer Motion, conformément
au cahier des charges.

## Structure du projet

```
app/                     → Pages du site (App Router)
  ├─ page.tsx             → Accueil
  ├─ a-propos/            → À propos
  ├─ services/            → Liste des services + pages détail dynamiques
  ├─ produits/             → Produits spirituels
  ├─ temoignages/          → Témoignages
  ├─ blog/                 → Blog (liste + articles)
  ├─ faq/                  → FAQ
  ├─ contact/              → Contact (formulaire)
  ├─ politique-de-confidentialite/
  ├─ conditions-generales/
  ├─ mentions-legales/
  ├─ sitemap.ts            → Sitemap XML généré automatiquement
  └─ robots.ts             → robots.txt généré automatiquement

components/               → Composants réutilisables (Navbar, Footer, cartes, etc.)
data/                     → Contenu du site (services, témoignages, produits, FAQ, blog)
lib/site-config.ts        → Coordonnées et constantes du site (à modifier ici)
public/images/            → Toutes les photos du site
```

## Modifier le contenu

- **Coordonnées (téléphone, WhatsApp, email...)** : `lib/site-config.ts`
- **Services** : `data/services.ts`
- **Témoignages** : `data/testimonials.ts`
- **Produits** : `data/products.ts`
- **FAQ** : `data/faq.ts`
- **Articles de blog** : via l'interface `/admin` (voir section dédiée plus bas), ou directement dans `content/blog/` (fichiers Markdown)
- **Couleurs / typographies** : `tailwind.config.ts`

## Lancer le site en local

```bash
npm install
npm run dev
```
Le site sera disponible sur http://localhost:3000

## Déployer sur Vercel

1. Créez un compte sur https://vercel.com si nécessaire.
2. Poussez ce dossier vers un dépôt GitHub (ou utilisez `vercel` en CLI directement).
3. Sur Vercel : **Add New Project** → importez le dépôt → Vercel détecte
   automatiquement Next.js → cliquez sur **Deploy**.
4. Une fois déployé, pensez à :
   - Mettre à jour `url` dans `lib/site-config.ts` avec le nom de domaine final
   - Ajouter un nom de domaine personnalisé dans les réglages du projet Vercel

### Déploiement via CLI (alternative)

```bash
npm install -g vercel
vercel login
vercel --prod
```

## Publier des articles de blog sans coder (interface d'administration)

Le site inclut une interface d'administration accessible à `/admin` (par exemple
`https://tonsite.com/admin`) qui permet d'écrire des articles avec photos,
sans toucher au code. Chaque publication crée automatiquement un fichier dans
`content/blog/` et déclenche un nouveau déploiement du site sur Vercel.

### Mise en place (à faire une seule fois)

**1. Créer une application OAuth GitHub**

1. Va sur https://github.com/settings/developers
2. Clique sur **New OAuth App**
3. Remplis :
   - **Application name** : `Admin site Hadj Ismael Bohlaly`
   - **Homepage URL** : l'adresse de ton site (ex. `https://marabout-amour.vercel.app`
     ou ton futur nom de domaine)
   - **Authorization callback URL** : la même adresse + `/api/callback`
     (ex. `https://marabout-amour.vercel.app/api/callback`)
4. Clique sur **Register application**
5. Note le **Client ID** affiché
6. Clique sur **Generate a new client secret** et note le secret affiché
   (il ne sera plus visible ensuite)

**2. Ajouter ces informations sur Vercel**

1. Va sur ton projet dans le tableau de bord Vercel
2. **Settings** → **Environment Variables**
3. Ajoute deux variables :
   - `GITHUB_OAUTH_CLIENT_ID` → le Client ID obtenu à l'étape précédente
   - `GITHUB_OAUTH_CLIENT_SECRET` → le secret obtenu à l'étape précédente
4. Redéploie le projet (Vercel → onglet Deployments → ... → Redeploy) pour
   que les nouvelles variables soient prises en compte

**3. Mettre à jour l'adresse dans la configuration**

Dans `public/admin/config.yml`, remplace la ligne `base_url` par l'adresse
réelle de ton site (surtout après l'achat de ton nom de domaine) :
```yaml
base_url: https://ton-nom-de-domaine.com
```
Puis envoie cette modification sur GitHub (`git add`, `git commit`, `git push`).

### Utilisation au quotidien

1. Va sur `https://tonsite.com/admin`
2. Connecte-toi avec ton compte GitHub (`hadjismaelbolaly`)
3. Clique sur **Articles de blog** → **New Articles de blog**
4. Remplis le titre, la date, le résumé, ajoute une photo de couverture si tu
   veux, puis écris le contenu de l'article
5. Clique sur **Publish** → **Publish now**

Le site se met à jour automatiquement en 1-2 minutes (Vercel redéploie tout
seul dès qu'un article est publié).



- Le formulaire de contact ouvre le client email de l'utilisateur (mailto) —
  aucun backend n'est requis. Pour un envoi automatique côté serveur, il faudra
  ajouter un service comme Resend, SendGrid ou une route API dédiée.
- Toutes les images fournies ont été intégrées dans `public/images`.
- Le site respecte les bonnes pratiques SEO : balises title/meta par page,
  sitemap.xml, robots.txt, données structurées Schema.org, images optimisées
  automatiquement par Next.js (formats AVIF/WebP).
