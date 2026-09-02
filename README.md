# Beverly Bach Architecture — Site Migration

Static recreation of [bach-architecture.com](https://bach-architecture.com/) (originally WordPress + Divi), rebuilt as plain HTML/CSS/JS for Beverly's migration off Prologic. Includes the new **Three Peaks House** project (publishing next month) from Beverly's email + Drive folder.

## Structure

```
index.html                     redirect to dark/ (the default landing)
dark/ light/ classic/          three self-contained site trees, one per theme
about/                         About the firm + Beverly's bio
about/bio/                     redirect to about/#bio (About + Bio share one page)
contact/                       Address + map
nebulate/                      Nebulate (teaching)
work/                          project overview grid (category jump links)
work/residential/<project>/    12 residential projects (incl. three-peaks-house)
work/institutional/<project>/  3 institutional projects
work/furniture/<project>/      3 furniture projects
work/teaching/<project>/       9 teaching projects
css/style.css                  base + Classic theme, design tokens at top
css/study.css + light/dark.css Light & Dark studies (structure + token skins)
guidelines/                    living design-guidelines page (renders in all 3 themes)
js/site.js                     Gallery hover-swap + mobile menu
images/                        All site images (paths mirror the old wp-content/uploads/)
images/three-peaks/            Three Peaks House photos + floor plans (from Drive)
fonts/                         Abel (body) + 'ger' (custom font from the old site)
```

## Preview locally

Pages use directory-style links (`work/residential/bluff-house/`), so serve over HTTP:

```sh
python3 -m http.server 8000
# open http://localhost:8000
```

## Themes

Three self-contained versions of the site, one directory each — no switcher,
no shared state, no cross-contamination:

- **`/dark/`** — the default landing (the root URL redirects here). White text
  on neutral medium grey, the monograph system.
- **`/light/`** — the same monograph system on near-white.
- **`/classic/`** — the faithful replica of the live Divi site, dropdowns and all.

Each tree hard-links its stylesheets; pages never switch themes at runtime.
See `DESIGN.md` for the system, `guidelines/` for the living reference
(pinned to the light presentation).

## Publishing (GitHub Pages)

The site is plain static files with relative links, so GitHub Pages works as-is:
Settings → Pages → Deploy from branch → `main` / root. `.nojekyll` is included so
Pages serves files verbatim. It will work at both
`https://andmimey.github.io/beverly-site/` and a custom domain.

Open Graph images and the 404 page's asset links use the absolute base URL
`https://andmimey.github.io/beverly-site/`. When the site moves to Beverly's
domain, swap it in one pass:

```sh
grep -rl 'andmimey.github.io/beverly-site' --include='*.html' . | xargs   sed -i '' 's|https://andmimey.github.io/beverly-site/|https://NEW-DOMAIN/|g'
```
