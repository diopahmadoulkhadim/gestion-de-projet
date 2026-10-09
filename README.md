# ProjetPlus – Plateforme de gestion et accompagnement de projets avec cours du soir

Site web **100 % front-end** (HTML5 + CSS3 + JavaScript + Bootstrap 5).

## Technologies

- HTML5, CSS3, JavaScript (vanilla)
- Bootstrap 5 (CDN)
- Bootstrap Icons (CDN)
- Google Fonts (Inter + Poppins)

## Contraintes respectées

- Aucune base de données
- Aucun PHP / Node.js / framework backend
- Site entièrement statique
- Responsive (mobile, tablette, desktop)
- Compatible GitHub Pages, Netlify, Vercel

## Structure

```
gestion-projets/
├── index.html
├── a-propos.html
├── services.html
├── service-detail.html
├── cours-du-soir.html
├── formations.html
├── formation-detail.html
├── projets.html
├── ressources.html
├── faq.html
├── tarifs.html
├── mentions-legales.html
├── inscription.html
├── contact.html
├── css/
│   ├── style.css
│   ├── responsive.css
│   └── animations.css
├── js/
│   ├── main.js
│   ├── formations.js
│   ├── calendrier.js
│   ├── formulaire.js
│   └── whatsapp.js
├── images/
└── assets/
```

## Personnalisation importante

### Numéro WhatsApp

Dans `js/whatsapp.js` :

```js
const WHATSAPP_NUMBER = '221775674388'; // Format international sans + ni espaces
```

### Horaires

Dans `cours-du-soir.html` (tableau HTML).

### Calendrier

Dans `js/calendrier.js` (tableau `EVENEMENTS_FORMATIONATIONS`).

### Formations / tarifs

Dans les pages HTML et dans `js/formations.js` / scripts des pages détail.

### Coordonnées

Footer et page Contact (téléphone, email, adresse).

## Déploiement

### GitHub Pages

1. Créer un dépôt GitHub
2. Pousser le contenu du dossier `gestion-projets`
3. Settings → Pages → Source : branch `main` / root
4. Le site sera accessible à `https://username.github.io/repo-name/`

### Netlify / Vercel

Glisser-déposer le dossier ou connecter le dépôt Git.

## Fonctionnalités

- Navigation responsive (menu hamburger)
- Formulaires validés en JavaScript → envoi WhatsApp
- Calendrier statique des formations
- Filtres projets par secteur
- FAQ interactive (Accordion Bootstrap)
- Bouton WhatsApp flottant
- Animations au scroll
- Compteurs animés
- Design professionnel (bleu profond + accent or)

## Licence

Usage libre pour le projet décrit dans le cahier des charges.
