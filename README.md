# Astro on Cosmoner

[![Deploy to Cosmoner](https://cosmoner.com/deploy-button.svg)](https://cosmoner.com/deploy?repo=https://github.com/datablock-dev/cosmoner-template-astro)

A small content site built with [Astro](https://astro.build) and deployed on
[Cosmoner](https://cosmoner.com) as a static site: built once, then served as
plain files.

- Pages are in `src/pages/`.
- Posts are Markdown files in `src/content/posts/`, checked against the schema
  in `src/content.config.ts` when the site builds.
- `src/pages/404.astro` is the page shown for an unknown address.

## Deploy

Select the button above, copy the template to your GitHub account, and deploy
your copy. The wizard can fill in every setting from
`.cosmoner/deployment.yaml`:

| Setting | Value |
|---------|-------|
| App type | Static Site |
| Build command | `npm ci && npm run build` |
| Output directory | `dist` |

Nothing else needs configuring: a static site has no port and no plan to
choose.

## Run locally

Requires Node.js 22.23.4 or newer.

```bash
npm install
npm run dev
```

Open http://localhost:4321. To build the site and preview the result:

```bash
npm run build
npm run preview
```

## License

MIT
