# Benedict Cabral — personal portfolio

A responsive React + Vite + TypeScript portfolio with Tailwind CSS, locally hosted
fonts, original SVG illustrations, and lightweight CSS transitions. No backend,
API keys, animation runtime, or third-party font requests are required.

## Develop

Use Node.js 22.12+ (Node 24 recommended).

```sh
npm ci
npm run dev
```

```sh
npm run typecheck
npm run build
npm run preview
```

Vite serves the development site on port 5173. The production output is `dist/`.
In restricted cloud shells, add `--cache /tmp/codex-npm-cache` to `npm ci` if
the default npm cache is not writable.

## Update your content

**Start with [`src/data.ts`](src/data.ts).** It contains commented, typed entries for:

- Your introduction, biography, social links, email, and contact text.
- Projects: title, category, description, tags, illustration, and source URL.
- Experience: education, internships, research, or personal milestones.
- Résumé link, navigation, section headings, and footer text.

The GitHub profile, LinkedIn, and email are configured. Three projects are clearly
labeled illustrative examples; they are not claims of completed work. Replace
them, set `isExample: false`, and add each `sourceUrl` to display its source link.
Use `network`, `language`, or `vision` for the built-in project illustrations.
Add/remove array entries to change the grid or timeline. Keep each `id` unique.

To add a résumé, put `resume.pdf` in `public/` and set `profile.resumeUrl` to
`'/resume.pdf'`. An external HTTPS URL also works. Without it, the site honestly
shows “Résumé coming soon” rather than a broken download link.

Update the title/description in `index.html` if the site's identity changes.
The palette, spacing, and responsive styles live in `src/styles.css`.
Components are grouped in `src/components/` by section. Fonts are bundled locally
with the production assets. `public/favicon.svg` is the editable BC monogram.

## Browser checks

```sh
npx playwright install chromium
npm test
```

The browser checks build and serve the production output, then validate desktop
and mobile layouts, navigation, actual contact destinations, keyboard behavior,
reduced motion, and asset loading. To use an existing Chromium installation:

```sh
PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH=/usr/bin/chromium npm test
```

## GitHub Pages

The included workflow builds `main` and deploys `dist/` to GitHub Pages. In the
repository's **Settings → Pages**, select **GitHub Actions** as the build source.
Then push the site to `main` or run the workflow manually. The root Vite base path
is correct for `Benedict-Cabral.github.io`. If moved to a project repository,
configure Vite's `base` to that repository's subpath.

The workflow is provided for future deployment; creating these files does not
publish the site or change repository settings.
