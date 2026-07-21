# Comment installer cette mise à jour (interface d'administration du blog)

## 1. Copier les fichiers

Décompresse ce zip. Tu obtiens un dossier `maj-blog-admin` avec la même
organisation que ton projet `Mystiora`. Copie-colle **tous** ces fichiers et
dossiers directement dans ton dossier `Mystiora`, en écrasant les fichiers
existants quand Windows te le demande (`Remplacer le fichier`).

## 2. Supprimer un ancien fichier devenu inutile

Dans ton dossier `Mystiora`, supprime le fichier :
```
data/blog.ts
```
(le nouveau système utilise `content/blog/` à la place — voir fichier
`FICHIERS_A_SUPPRIMER.txt` fourni)

## 3. Installer la nouvelle dépendance

Dans le terminal VS Code, tape :
```
npm install
```

## 4. Suivre le guide complet dans README.md

Le fichier `README.md` (mis à jour) contient toute la procédure détaillée
pour activer l'interface d'administration : créer l'application GitHub OAuth,
ajouter les variables sur Vercel, et utiliser `/admin` pour publier tes
articles. Cherche la section **"Publier des articles de blog sans coder"**.

## 5. Envoyer la mise à jour sur GitHub

Une fois tout copié et vérifié en local (`npm run dev`), envoie tout sur
GitHub comme d'habitude :
```
git add .
git commit -m "Ajout interface admin pour le blog"
git push
```
Vercel redéploiera automatiquement.
