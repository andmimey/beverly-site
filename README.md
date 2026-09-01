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

## Making variations

All spacing, typography, and color decisions live in the `:root` token block at the
top of `css/style.css` (`--color-*`, `--font-*`, `--header-height`, `--gutter`,
`--gallery-height`, …). Duplicate `style.css` per variation or just edit the tokens.

Faithful-to-original values: gray `#7e7e7e` ground, `#686868` title bands, Abel 14px,
white text, orange `#f48b2e` current-nav highlight, 1080px max content width,
hover-to-swap project galleries.
