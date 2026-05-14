# Parledev Cyberpunk Styleguide

Source inspiration: [Cyberpunk.net](https://www.cyberpunk.net/us/en/) current home page, reviewed May 5, 2026. The site uses a game-universe, product-module, and news-module structure with high-contrast yellow/black surfaces, aggressive uppercase labeling, diagonal HUD edges, and red/cyan alert accents. This portfolio translates that language into original UI patterns and avoids Cyberpunk-branded artwork, logos, and copy.

## Visual Direction

- Mood: high-tech ecommerce operator, not a game clone.
- Base: near-black surfaces with bright signal color accents.
- Shape language: clipped corners, thin borders, terminal dividers, status tags, grid texture, and scanline overlays.
- Layout: strong hero identity, metric strip, modular project cards, timeline logs, and skill matrix.
- Motion: polished cyberpunk movement that supports the portfolio story. Use ambient neon drift, small signal pulses, scanline movement, scroll reveals, and text accents while keeping body copy stable and readable.

## Palette

- `#050505` cyber black: page background.
- `#101015` surface: section contrast.
- `#15151a` panel: cards and timeline blocks.
- `#f5f7f2` paper: primary text.
- `#a7abb5` muted: secondary text.
- `#fcee0a` signal yellow: primary CTA, stats band, key emphasis.
- `#00f0ff` optical cyan: links, skill signals, system state.
- `#ff003c` glitch red: alert badges and sharp secondary emphasis.

The yellow/cyan/black direction is also consistent with widely referenced Cyberpunk 2077 palette values such as broom yellow and bright cyan from [SchemeColor](https://www.schemecolor.com/cyberpunk.php).

## Type

- Primary: Geist Sans via `next/font`.
- Technical labels: Geist Mono.
- Treatment: uppercase for labels/headings, normal sentence case for body copy.
- Letter spacing: use tracking for small labels only; keep body text untracked for readability.

## Components

- HUD buttons: rectangular, 2px radius, icon + label + arrow affordance.
- Cards: single-level clipped panels, 2px radius, no nested card shells.
- Chips: compact monospaced skill tags.
- Timeline: left rail with signal dots and terminal-like job entries.
- Hero visual: original local bitmap background with overlays, not external game art.

## Accessibility

- Keep body text on dark surfaces at high contrast.
- Do not rely on neon color alone; labels and layout position carry meaning too.
- Avoid persistent large animation that competes with content. Ambient motion must stay low-opacity, non-interactive, and compositor-friendly where possible.
- Respect reduced-motion preferences by disabling or minimizing ambient movement, scroll reveals, and pulses.
- CTA labels stay explicit: Contact, LinkedIn, View Work.
