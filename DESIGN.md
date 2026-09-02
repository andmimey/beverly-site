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

## Theme: Refined (monograph)

Register: the architecture monograph — TASCHEN's Neutra volume as the reference. A quiet neo-grotesque at small sizes, hierarchy barely a whisper, **no rules or divider lines anywhere** (separation is whitespace and placement), photography carrying the page, **everything flush-left** (Anran hates centered text). CSS-only override layer on the same markup.

- **Ground**: neutral near-white #f5f5f4 with near-black ink #111110 (~17:1); captions #6b6862 (4.9:1). The logo PNG (white type) is inverted to charcoal via `filter`.
- **Accent**: Beverly's orange as the single mark — #d96c0a underlines/outlines (≥3:1), #b04f08 as text.
- **Type**: Archivo (grotesque, variable, self-hosted), flat scale: project titles just 17px/600 with 0.02em tracking; nav 12px/500 uppercase 0.08em; body 14px/1.6 on a 60ch measure; credit labels 11px tracked caps; description kicker lines 14px bold (same size as body).
- **Gallery**: full-width plate (66vh, contain, **flush-left to the grid**) with a contact-sheet thumb strip beneath (52px, 8px gaps, 1px keylines); browsing dims the strip, the pointed-at frame stays lit with an orange outline.
- **Footer**: the © line splits left (©) / middle (address) / right (phone + email) via the `si-*` spans; stacks flush-left on mobile.
- **Dropdowns**: plain white panels, shadow only, flyout arrows brought inside the panel (the Original theme keeps Divi's faithful outside-hanging arrows).
- **Motion**: 160ms ease-out only, disabled under `prefers-reduced-motion`.

## Components

- **Style switcher**: fixed bottom-right 36px square glyph, opens on hover/focus-within; two options (Original / Refined); buttons, keyboard reachable, persisted via `localStorage['ba-theme']`; a head snippet applies the saved theme before first paint.
- **Gallery (`#ba-wrapper`)**: thumbnails set the preview `background` on mouseenter (transcribed ba-gallery plugin behavior); thumbs `loading="lazy" decoding="async"`.

## Layout

Directory-per-page static site (`work/<category>/<slug>/index.html`). All pages share header/nav/footer markup verbatim; nav state via `current-menu-item` / `current-menu-ancestor` classes. Sub-sub menus fly out to the LEFT (matching the live site's edge-aware Divi behavior).
