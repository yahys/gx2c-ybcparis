# GX2C / YBCParis — Site web

Site Astro statique pour GX2C (conseil strategique). Deploye sur GitHub Pages via GH Actions.

## Stack

- **Framework** : Astro (SSG)
- **Hebergement** : GitHub Pages, domaine `ybcparis.com`
- **Deploiement** : auto au push sur `main`
- **Analytics** : Microsoft Clarity + GA4

## Structure

- `src/pages/` — pages statiques (index, cdv, blog listing)
- `src/pages/blog/[slug].astro` — template article
- `src/content/blog/*.md` — articles markdown (commit par le cron cockpit)
- `src/layouts/` — layouts Astro
- `src/content.config.ts` — schema content collection

## Frontmatter articles

```yaml
---
title: "Titre SEO (max 60 chars)"
description: "Meta description (max 150 chars)"
publishedDate: "YYYY-MM-DD"
author: "GX2C"
tags: ["tag1", "tag2"]
category: "research"  # ou "advisory"
---
```

## Editorial

Voir memoire `feedback_gx2c_positionnement.md` pour les regles de ton.

**Angle actuel (2026-04-15)** : surfer le buzz IA, nommer les technos, angle decryptage dirigeant. Pas de tuto technique, toujours remettre en perspective business.

**Structure recommandee** :
1. TL;DR (2-3 lignes)
2. Accroche contexte
3. [Nom produit/tech] : ce que c'est
4. Pourquoi c'est important pour votre entreprise
5. Cas d'usage concrets (avec chiffres)
6. FAQ (3 questions)
7. Recommandations GX2C
8. CTA contact

## SEO en place

- JSON-LD : ProfessionalService + Organization + FAQPage + Article
- robots.txt + sitemap auto
- llms.txt (referencement LLM)
- Open Graph + Twitter Card
- Canonical URLs
- Images optimisees (alt + dimensions + lazy)

## Commandes

```bash
npm run dev        # dev local (http://localhost:4321)
npm run build      # build statique vers dist/
npm run preview    # preview du build
```

## Gotchas

- Les articles sont commit directement sur `main` par le cron `blog-draft` de cockpit. PAS de PR.
- Doublons historiques dans `src/content/blog/` (ex: 9 articles "gemini-api-..."). A nettoyer manuellement.
- Le cron utilise les 50 derniers slugs pour dedup (mis a jour Sprint 1).
