# IATROS — Clinical Laboratory

Static, client-rendered single-page website using Node.js + Webpack 5, with **no source maps**. Six themes (dark/light × green/blue/red), Spanish/English/French translations, original supplied logo and email contact.

Output is `dist/`. Webpack sets `devtool: false` in all modes.

## GitHub Pages

1. Create a GitHub repository and push this project to its `main` branch (including `package-lock.json`).
2. In **Settings → Pages → Build and deployment → Source**, select **GitHub Actions**.
3. Push to `main` or trigger **Actions → Deploy IATROS to GitHub Pages → Run workflow**.
4. Your site will be published at the GitHub Pages URL shown in the deployment.

Navigation uses hash anchors, so no server-side SPA rewrite is needed. The logo is copied from `public/` and referenced relatively for project Pages paths.

## Notes

The listed laboratory services, products, and security practices are sample marketing copy, **not claims of actual certification, service availability or deployed security controls**. Confirm and update before production use. Google Fonts is loaded externally; for a completely offline site, self-host fonts or use system fonts.

## Brutalist purple edition

Two themes only: dark and light, both with purple accents. Sharp edges, thick borders, heavy typography, rigid grids and the original IATROS logo.
