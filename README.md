# First Class Location — Site Web

Site Next.js 14 pour l'agence de location de voitures de luxe First Class Location (Bondues, 59).

## Stack

- **Next.js 14** (App Router)
- **Tailwind CSS** + CSS variables
- **Framer Motion** (animations)
- **React Hook Form** (formulaires)
- **TypeScript**

## Lancement rapide

### Prérequis

- [Node.js 18+](https://nodejs.org)
- npm ou yarn

### Installation

```bash
npm install
npm run dev
```

Le site sera disponible sur [http://localhost:3000](http://localhost:3000).

## Configuration

### Intégration iClosed (Réserver un call)

Ouvrez `config/booking.ts` et remplacez la valeur de `BOOKING_URL` :

```ts
export const BOOKING_URL = "https://votre-lien-iclosed.com/...";
```

Le modal `BookingCallModal` utilisera automatiquement ce lien.

### Formulaire de contact

Par défaut, le formulaire envoie les données à Formspree. Pour configurer :

1. Créez un compte sur [formspree.io](https://formspree.io)
2. Créez un nouveau formulaire
3. Remplacez l'URL dans `components/shared/ContactForm.tsx` :
   ```ts
   const res = await fetch("https://formspree.io/f/VOTRE_ID", { ... });
   ```

### URL du site (SEO)

Remplacez `https://firstclasslocation.fr` par votre domaine réel dans :
- `app/layout.tsx` (metadataBase)
- `app/sitemap.ts`
- `app/robots.ts`
- `components/ui/StructuredData.tsx`

## Déploiement Vercel

```bash
# Installer Vercel CLI
npm i -g vercel

# Déployer
vercel
```

Ou connectez directement votre dépôt GitHub sur [vercel.com](https://vercel.com).

## Structure du projet

```
├── app/                    # Pages (App Router)
│   ├── page.tsx            # Accueil
│   ├── nos-voitures/       # Flotte
│   ├── formation/          # Formation infopreneur
│   ├── lld-professionnel/  # LLD Pro
│   ├── blog/               # Blog
│   └── contact/            # Contact
├── components/
│   ├── layout/             # Header, Footer
│   ├── ui/                 # BookingCallModal, StructuredData
│   ├── home/               # Sections de la page d'accueil
│   ├── shared/             # SimulateurCA, ContactForm (réutilisables)
│   └── pages/              # Composants client des pages secondaires
├── config/
│   └── booking.ts          # BOOKING_URL + infos de contact
└── public/                 # Fichiers statiques
```

## Photos

Les images actuelles sont des placeholders Unsplash. Pour les remplacer par les vraies photos :

1. Placez vos images dans `/public/images/`
2. Remplacez les URLs Unsplash dans les composants concernés par `/images/nom-du-fichier.jpg`
3. Supprimez `images.unsplash.com` de `next.config.ts` si vous n'utilisez plus Unsplash

## Contact

- Email : fcrlocation@gmail.com
- Adresse : 3 bis Rue Marie Curie, 59910 Bondues
