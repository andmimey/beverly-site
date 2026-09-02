# Beverly Bach Architecture — Site Migration

Static recreation of [bach-architecture.com](https://bach-architecture.com/) (originally WordPress + Divi), rebuilt as plain HTML/CSS/JS for Beverly's migration off Prologic. Includes the new **Three Peaks House** project (publishing next month) from Beverly's email + Drive folder.

## Structure

```
index.html                     Home
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

A corner icon (bottom-right, hover to open) switches between three options,
persisted per browser and applied before first paint:

- **Classic** (`css/style.css`): faithful replica of the live Divi site,
  including its hover dropdowns and fixed header.
- **Light** / **Dark** (`css/light.css`, `css/dark.css` + shared
  `css/study.css`): monograph-register studies. One typeface (Archivo) at one
  size with weight-only hierarchy, purely neutral grey grounds (#f4f4f4 /
  #6a6a6a), the wordmark set live in Germano (the site's own logo face),
  orange words for current/hover states, no rules and no image borders,
  a tight masthead that hides on scroll down and returns on scroll up,
  and a `work/` overview page instead of dropdown menus.

See `DESIGN.md` for the full system, `PRODUCT.md` for strategy.

## Publishing (GitHub Pages)

The site is plain static files with relative links, so GitHub Pages works as-is:
Settings → Pages → Deploy from branch → `main` / root. `.nojekyll` is included so
Pages serves files verbatim. It will work at both
`https://andmimey.github.io/beverly-site/` and a custom domain.
