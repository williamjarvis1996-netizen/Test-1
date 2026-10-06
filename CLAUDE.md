# Will Jarvis Portfolio Site

## Overview

Personal portfolio website for Will Jarvis, a Creative Producer and Scriptwriter. Built with Astro 5.x, deployed to GitHub Pages at https://willjarvis.co.

## Tech Stack

- **Framework**: Astro 5.x (static site generation)
- **Deployment**: GitHub Pages via Actions (`.github/workflows/deploy.yml`)
- **Fonts**: Archivo Black (display/headings) + Inter (body), loaded from Google Fonts
- **Domain**: willjarvis.co (custom domain via CNAME, root-relative paths)

## Project Structure

```
src/
  components/ProjectCard.astro    # Reusable project card component
  content/projects.ts             # All project data (title, client, category, description, awards, images)
  layouts/Base.astro              # Site layout with header nav, footer, global styles
  pages/
    index.astro                   # Homepage: hero, image strip carousel, clients, CTA
    about.astro                   # About page
    contact.astro                 # Contact page
    work/index.astro              # Work listing page (filterable by category)
    work/[slug].astro             # Individual project detail pages
  styles/global.css               # CSS custom properties, resets, typography
public/
  images/                         # Project photos (.webp), portrait, favicon
```

## Design System

### Spacing scale
- `--space-xs`: 0.5rem (8px)
- `--space-sm`: 1rem (16px)
- `--space-md`: 2rem (32px)
- `--space-lg`: 4rem (64px)
- `--space-xl`: 8rem (128px)

### Colors
- `--color-bg`: #ffffff (light), #0a0a0a (dark)
- `--color-fg`: #0a0a0a (light), #f5f5f5 (dark)
- `--color-accent`: #d62828 (red, used for hover states, ampersand, nav hover)
- `--color-border`: rgba borders
- `--color-bg-muted`: #f0f0f0 (light), #1a1a1a (dark)

### Typography
- Display: `'Archivo Black', sans-serif` for headings, project numbers
- Body: `'Inter', sans-serif` for everything else
- Hero name: `clamp(4.5rem, 13vw, 15rem)`
- Hero discipline: `clamp(2rem, 6vw, 7rem)` at `opacity: 0.7`

## Homepage Sections

1. **Hero**: Full-viewport with "Will Jarvis" right-aligned, decorative cross marks
2. **Image strip carousel**: Horizontally scrolling project thumbnails (380px wide, 16:9 aspect ratio). CSS animation with duplicated items for infinite scroll. Supports drag-to-scroll and wheel-to-scroll.
3. **Discipline text**: "Creative Producer & Scriptwriter" right-aligned below the strip
4. **Clients bar**: "Brands I've collaborated with" label above a flex-wrapped list of 14 brand names, styled as uppercase grey text that brightens on hover. Scroll-triggered reveal animation.
5. **CTA**: "Let's make something" link

## Project Categories

- `branded`: Branded Content
- `film`: Film
- `tv`: TV Development
- `other`: Other Work (Theatre, Digital Media, etc.)

## Current Client List

Formula 1, Manchester City FC, Booking.com, Hamilton Watches, Fora Travel, DAMAC Properties, Walt Disney, Hilton Hotels, Lonely Planet, Netflix, Culture Trip, Amazon, Cognizant, Ares Management

## Projects (15 total)

Projects with images: Fora at Five, Chelsea x DAMAC, MCFC x Ohana, Booking Traveller Review Awards, Hamilton Into the Wild, Hamilton In the Midst of It, Hamilton Power Up, Aortic, The Emoji Project, Vidi Guides

Projects still needing images: DDD, Break A Leg, Brain Drain, Clockwork Arms, Remote Radioplays

## Key Implementation Details

- Site uses root-relative paths (e.g. `/work`, `/images/...`). No base path prefix needed.
- The strip carousel duplicates all items in the track for seamless infinite scrolling via CSS `translateX(-50%)`.
- Nav links turn red on hover using `color: var(--color-accent)`.
- The site has both light and dark theme support via `prefers-color-scheme` and `data-theme` attributes.
- Deploy workflow triggers on push to `main` or the feature branch.

## Cleanup Opportunities

- None currently outstanding.
