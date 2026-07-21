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
- **Articles de blog** : `data/blog.ts`
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

## Notes importantes

- Le formulaire de contact ouvre le client email de l'utilisateur (mailto) —
  aucun backend n'est requis. Pour un envoi automatique côté serveur, il faudra
  ajouter un service comme Resend, SendGrid ou une route API dédiée.
- Toutes les images fournies ont été intégrées dans `public/images`.
- Le site respecte les bonnes pratiques SEO : balises title/meta par page,
  sitemap.xml, robots.txt, données structurées Schema.org, images optimisées
  automatiquement par Next.js (formats AVIF/WebP).
