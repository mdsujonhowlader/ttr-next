# Design System

This project uses a high-contrast, dark-mode-first visual system with a focus on green/teal command accents and a clean, minimal aesthetic.

---

## Stack

- **Framework:** Next.js App Router + React + Javascript
- **Styling:** Tailwind CSS v4 via `@theme inline` in `app/globals.css`
- **Components:** shadcn-style primitives in `components/ui`
- **Icons:** Lucide React
- **Fonts:** Inter (mapped via `--font-inter-sans`)
- **Dark mode:** `next-themes`, class-based, dark default
- **Utilities:** `cn()` from `@/lib/utils`

---

## Visual Direction

The app features a stark, high-contrast aesthetic:

- **Dark Mode:** Deep, near-black backgrounds with vibrant green borders and accents.
- **Light Mode:** Clean white backgrounds with dark, high-contrast text and elements.
- **Accent Color:** A consistent green/teal palette (`hue 144-150`) used for primary actions, borders, and buttons.
- **Layout:** Emphasis on readability with standard sans-serif typography (Inter).
- **Animations:** Includes utility-based scroll and loading animations.

---

## Tokens

All semantic tokens live in `app/globals.css` and are bridged to Tailwind with `@theme inline`.

| Token | Light | Dark | Usage |
| --- | --- | --- | --- |
| `background` | `oklch(1 0 0)` (White) | `oklch(0.096 0 271)` (Deep Dark) | Page canvas |
| `foreground` | `oklch(0.207 0.041 282)` | `oklch(1 0 0)` (White) | Primary text |
| `card` | `oklch(0.962 0.004 286)` | `oklch(0.276 0 0)` (Dark Grey) | Card surfaces |
| `primary` | `oklch(0.798 0.197 150)` (Green) | `oklch(0.509 0.145 144)` (Muted Green) | Primary elements |
| `button` | `oklch(0.207 0.041 282)` (Dark) | `oklch(0.714 0.183 149)` (Vibrant Green) | Button surfaces |
| `border` | `oklch(0.207 0.041 282)` (Dark) | `oklch(0.793 0.246 139)` (Vibrant Green) | Borders & separators |
| `secondary` | `oklch(0.313 0 271)` | `oklch(0.924 0 271)` | Secondary surfaces |
| `muted` | `oklch(1 0 0)` | `oklch(1 0 0)` | Muted backgrounds (Contextual) |
| `badge-color` | `oklch(0.332 0 271)` | `oklch(0.636 0 271)` | Badge styling |

*Note: Standard semantic tokens like `accent`, `destructive`, and `ring` are not explicitly defined in the provided CSS variables but may be inherited or added later.*

---

## Typography

| Token | Font | Usage |
| --- | --- | --- |
| `--font-sans` | Inter | Body text, controls, headings |

Guidelines:

- Clean, modern sans-serif rendering.
- Focus on high contrast between text and background.

---

## Core Utilities

Defined in `app/globals.css`:

- **`.no-scrollbar`**: Hides scrollbar UI while maintaining scroll functionality (`scrollbar-width: none`).
- **Animations**:
    - `animate-loop-scroll`: Infinite 20s horizontal scroll loop.
    - `animate-fill-bar`: 2s ease-in-out width fill animation.
    - `animate-loadingBar`: 2s linear infinite loading translation.

---

## Components

### Cards

Cards utilize the `card` token, appearing as light grey surfaces in light mode and dark grey surfaces in dark mode.

## Accessibility

- Preserve visible focus rings on all interactive controls.
- Maintain high contrast ratios, especially in dark mode where light text sits on dark backgrounds.
- Controls must remain usable on mobile.