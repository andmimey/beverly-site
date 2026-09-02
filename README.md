# Beverly Bach Architecture — Site Migration

Static recreation of [bach-architecture.com](https://bach-architecture.com/) (originally WordPress + Divi), rebuilt as plain HTML/CSS/JS for Beverly's migration off Prologic. Includes the new **Three Peaks House** project (publishing next month) from Beverly's email + Drive folder.

## Structure

```
index.html                     Home
about/                         About the firm
about/bio/                     Beverly's bio
contact/                       Address + map
nebulate/                      Nebulate (teaching)
work/residential/<project>/    12 residential projects (incl. three-peaks-house)
work/institutional/<project>/  3 institutional projects
work/furniture/<project>/      3 furniture projects
work/teaching/<project>/       9 teaching projects
css/style.css                  Single shared stylesheet, design tokens at top
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

## Themes / variations

A small corner icon (bottom-right, hover to open) switches between themes; the
choice persists per browser via localStorage and applies before first paint.

- **Original** (`css/style.css`): faithful transcription of the live Divi site —
  gray `#7e7e7e` ground, `#686868` title bands, Abel 14px, orange `#f48b2e`
  current-nav highlight, 99px fixed header, left-opening sub-sub menus,
  hover-to-swap galleries.
- **Refined** (`css/refined.css`): editorial redesign in the register of
  Neutra-era California modernism (*Arts & Architecture*, Shulman plates).
  Paper ground with charcoal ink, one Futura-lineage family (Jost, self-hosted)
  carried by weight contrast, lowercase display titles, the gallery recomposed
  as a full-width plate with a contact-sheet strip, hairline rules marking
  plane changes, and the identity orange kept as the single accent. WCAG AA
  contrast throughout, `prefers-reduced-motion` respected. CSS-only: same markup.

To add another variation, copy `css/refined.css`, adjust tokens/overrides, and add
a button to the switcher panel (`data-theme` name) in the shared page footer.
See `PRODUCT.md` and `DESIGN.md` for the strategic and visual context.

## Publishing (GitHub Pages)

The site is plain static files with relative links, so GitHub Pages works as-is:
Settings → Pages → Deploy from branch → `main` / root. `.nojekyll` is included so
Pages serves files verbatim. It will work at both
`https://andmimey.github.io/beverly-site/` and a custom domain.
