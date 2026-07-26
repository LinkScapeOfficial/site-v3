# linkscape.app

The LinkScape website. Next.js 15, TypeScript, Tailwind.

## Develop

```bash
pnpm install
pnpm dev      # http://localhost:3000
pnpm build
pnpm lint
```

Node 22 and pnpm 11. `pnpm-workspace.yaml` approves the two dependencies that
build native binaries.

## Layout

```
src/app/           Routes
src/components/    layout/ is the ruled-grid system; animations/ the entrance effects
src/content/       All editable content
src/lib/           Governance document loader
scripts/           Content pipelines
public/            Static assets, generated figures, governance PDFs
```

## Editing content

Everything a non-developer needs to change lives in `src/content/`:

| File | What it holds |
| --- | --- |
| `site.ts` | Positioning, navigation, pillars, values, contact addresses |
| `work.ts` | Projects, research, and events, with their figures and facts |
| `team.ts` | Roster and role remits |
| `doc-register.ts` | The deliverable register |
| `governance/*.md` | Published policy documents (generated) |

Adding a project is an edit to `work.ts`. No JSX changes required.

## Pipelines

Both are re-runnable and idempotent. Commit their output.

```bash
python3 scripts/docx_to_md.py    # policy .docx -> src/content/governance/*.md
python3 scripts/build_pdfs.py    # those .md -> public/governance/*.pdf
python3 scripts/build_figures.py # project charts -> public/figures/*.svg
```

`docx_to_md.py` reads the organizational document pack, which is held privately
and is not part of this repository. It publishes the subset listed in its
`PUBLIC` constant and aborts if a document loses text during conversion.

`build_pdfs.py` needs `pandoc` and Chrome. Set `CHROME_PATH` if Chrome is not in
the default location.

## Conventions

- Statistics without a verified source render as a placeholder rather than a
  number. See `StatCell`.
- LinkScape is a fiscally sponsored project of Hack Club, not an independent
  501(c)(3). The approved wording is `site.fiscalSponsor.statement`.
- Reduced-motion handling changes animation timing only, never the rendered
  tree, so server and client markup always match.
- Generated figures ship as a light and a dark file because an SVG in an `<img>`
  cannot inherit the page theme.

## Deployment

Vercel, on push to `main`. `postbuild` regenerates the sitemap.
