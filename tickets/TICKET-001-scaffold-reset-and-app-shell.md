# TICKET-001: Reset Vite Scaffold and Establish the BeatPrompt App Shell

## Goal

Remove the stock Vite starter UI and replace it with the BeatPrompt application shell: compact header, single-screen layout, and the visual foundation for the studio-tool aesthetic.

This ticket should leave the app ready for the actual BeatPrompt composer/result workflow without introducing API logic yet.

## Change

- Replace the starter hero/counter/documentation content with a minimal BeatPrompt shell.
- Introduce the BeatPrompt brand header and compact status area.
- Establish the single-screen layout structure that will later hold composer, result, controls, and detected-style details.
- Set up the initial global CSS variables and page-level layout rules for the dark studio-tool direction.
- Remove the default Vite starter visuals so the app no longer looks like a template.

## New Files

- `src/components/layout/AppShell.tsx`
- `src/components/layout/AppShell.css`
- `src/theme.css`

## Changed Files

- `src/App.tsx`
- `src/App.css`
- `src/index.css`
- `src/main.tsx`

## Deleted Files

- `src/assets/react.svg`
- `src/assets/vite.svg`
- `src/assets/hero.png`

## Conventional Commit

```txt
chore(ui): reset vite scaffold into beatprompt app shell

Remove the default starter content and establish the base application
shell for BeatPrompt. This sets up the single-screen layout, brand
header, and dark studio-tool visual foundation without wiring product
behavior yet.
```
