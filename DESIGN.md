# Design

## Overview

Three self-contained page trees — `/dark/` (default landing; the root redirects there), `/light/`, and `/classic/` — each hard-linking its own stylesheets. No runtime theme switching.

- `css/style.css` — base + **Classic** (the `/classic/` tree links only this).
- `css/light.css` / `css/dark.css` — token skins linked by their trees on top of the base; both `@import` the shared structure in `css/study.css`.

## Theme: Classic (default)

Faithful replica of the live site: gray #7e7e7e ground, #686868 title bands, Abel 14px, white text, orange #f48b2e current-nav, 99px fixed header, logo PNG, hover dropdowns with Divi's outside-hanging flyout arrows, sub-sub menus opening left, centered © line.

## Themes: Light and Dark studies

Register: the architecture monograph — stark, with warmth and playfulness carried by a single orange and the photography, not by decoration. Neutra via Anran's read of Beverly: plainspoken, precise, quietly warm.

- **Grounds are purely neutral greys** with a very subtle viewport-fixed top-to-bottom wash (light over dark): Light #f4f4f4 (#f7f7f6→#efefee) with #111111 ink; Dark #616161 (#656565→#5c5c5c) with white text (the white-on-medium-gray mood of the current site, one step darker for crisper type, ~5.7:1).
- **One typeface, one size**: Archivo (grotesque, self-hosted variable) at 14px everywhere; exactly two weights — regular for prose, nav, and tracked-caps labels; bold for titles and kickers plus uppercase at a uniform 0.06em tracking. The wordmark is the only larger element: "BACH ARCHITECTURE" set live at 21px in Germano — the actual logo face recovered from the old site's Use Any Font upload (`fonts/ger.woff`).
- **Orange words, not marks**: current nav item, subnav current, nav hover, and project-name hover all turn orange (Light #b04f08, Dark #ffb877). No underlines, no divider lines, **no borders on any images**.
- **Masthead**: tight (64px), hides on scroll down, returns on scroll up (Classic keeps its always-fixed header); below 980px the nav sits as a flush-left row under the wordmark, no hamburger. Reduced-motion disables the slide.
- **No dropdowns**: WORK goes to the `work/` overview page (all 28 projects as an image grid grouped by category); FIRM goes to the combined About page (firm statement stacked above the biography; `about/bio/` redirects to `about/#bio`).
- **Gallery**: full-width plate flush-left (66vh contain), contact-sheet strip beneath, hovered frame lit with an orange outline while the strip dims.
- **Footer**: © / address / phone+email spread left-middle-right on wide screens; below 1000px it stacks flush-left in order. The Classic centered pipe line renders from the same spans.

## Layout

Directory-per-page static site. Nav state via `current-menu-item` / `current-menu-ancestor`. All spacing/color decisions are custom properties, so further variations are token edits.
