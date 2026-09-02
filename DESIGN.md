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

## Theme: Refined ("technological cleanup")

Same identity, defects fixed. Neutra register: horizontal calm, precision, warmth inside crisp structure.

- **Ground**: deepened to #6b6b6b (white body text ≥5:1, AA); title band #575757; hairline rules rgba(255,255,255,.18) mark plane changes.
- **Accent**: nav-current becomes white text with a 2px #f48b2e underline — the identity orange moves into a mark, solving the original's 2.2:1 orange-on-gray label without diluting the hue.
- **Type**: body 15px/1.75 (light-on-dark breathing room), description measure capped at 66ch, `text-wrap: pretty`; project titles 22px with +0.06em tracking, `text-wrap: balance`; © line 12px.
- **Gallery**: 8px-grid thumb gaps, hovered thumb marked by 2px accent outline, non-active thumbs ease to 0.85 opacity; 160ms ease-out transitions, disabled under `prefers-reduced-motion`.
- **Structure**: 88px header with bottom hairline; dropdown panels squared to the 8px grid.

## Components

- **Style switcher**: fixed bottom-right 36px square glyph, opens on hover/focus-within; two options (Original / Refined); buttons, keyboard reachable, persisted via `localStorage['ba-theme']`; a head snippet applies the saved theme before first paint.
- **Gallery (`#ba-wrapper`)**: thumbnails set the preview `background` on mouseenter (transcribed ba-gallery plugin behavior); thumbs `loading="lazy" decoding="async"`.

## Layout

Directory-per-page static site (`work/<category>/<slug>/index.html`). All pages share header/nav/footer markup verbatim; nav state via `current-menu-item` / `current-menu-ancestor` classes. Sub-sub menus fly out to the LEFT (matching the live site's edge-aware Divi behavior).
