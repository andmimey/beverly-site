# Design

## Overview

Two themes over one markup. `css/style.css` is the faithful transcription of the original Divi build; `css/refined.css` is an override layer ("Refined") selectable from the corner style switcher and persisted in localStorage.

## Theme: Original (default)

- **Ground**: #7e7e7e everywhere; project title band #686868.
- **Ink**: #ffffff text and links; submenu links rgba(255,255,255,.7).
- **Accent**: #f48b2e, current-page nav only.
- **Type**: Abel 14px/1.7 body; h4 18px project titles; 11px © line; nav 14px bold, 1px tracking.
- **Layout**: fixed 99px header; 80% row width, max 1080px; Divi gutters (5.5%, columns 29.67/47.25/64.83%); hover-swap gallery (thumbs 33% left, preview 63%).
- Faithfulness outranks best practice in this theme (e.g. body contrast ~4.0:1 matches the live site).

## Theme: Refined (editorial / Neutra)

Editorial redesign in the register of Neutra-era California modernism — the printed page of *Arts & Architecture* (Shulman plates, Lustig-era composition) rather than the gray site. CSS-only override layer on the same markup.

- **Ground**: paper #f8f7f5 with charcoal ink #1c1c1a (16:1); captions #6e6a64 (4.9:1). The logo PNG (white type) is inverted to charcoal via `filter`.
- **Accent**: Beverly's orange survives as the single mark — #d96c0a underlines/outlines (≥3:1), #b04f08 where used as text.
- **Type**: one Futura-lineage family, Jost (variable, self-hosted), carried by weight contrast: project titles lowercase 300-weight at clamp(30–44px); nav lowercase 13px/500 with 0.1em tracking; body 16px/1.65 at a 62ch measure; credit labels 11px tracked caps; description kicker lines 13px tracked caps.
- **Gallery**: recomposed as a full-width plate (66vh, centered, contain) with a contact-sheet thumb strip beneath (56px, 8px gaps, 1px keylines); browsing dims the strip, the pointed-at frame stays lit with an orange outline.
- **Structure**: plane changes marked by rules — a full-bleed charcoal hairline under the masthead and above the info section (the long roofline), soft hairlines for captions and dropdown panels. Dropdowns become paper panels under a 2px charcoal cap.
- **Motion**: 160ms ease-out only, disabled under `prefers-reduced-motion`.

## Components

- **Style switcher**: fixed bottom-right 36px square glyph, opens on hover/focus-within; two options (Original / Refined); buttons, keyboard reachable, persisted via `localStorage['ba-theme']`; a head snippet applies the saved theme before first paint.
- **Gallery (`#ba-wrapper`)**: thumbnails set the preview `background` on mouseenter (transcribed ba-gallery plugin behavior); thumbs `loading="lazy" decoding="async"`.

## Layout

Directory-per-page static site (`work/<category>/<slug>/index.html`). All pages share header/nav/footer markup verbatim; nav state via `current-menu-item` / `current-menu-ancestor` classes. Sub-sub menus fly out to the LEFT (matching the live site's edge-aware Divi behavior).
