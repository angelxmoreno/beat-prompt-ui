# TICKET-000: Install and Configure shadcn/ui

## Goal

Set up shadcn/ui as the component foundation for the BeatPrompt frontend before any product UI work starts.

This ticket should establish the design-system primitives and file structure the later tickets will rely on for the composer, result panel, and controls.

## Change

- Install shadcn/ui into the Vite + React + TypeScript app.
- Add the `components.json` configuration and the initial shadcn styling hooks.
- Configure the base theme tokens and utility files required by shadcn components.
- Add the first reusable primitives BeatPrompt will need for the MVP UI:
  - `button`
  - `input`
  - `textarea`
  - `switch`
  - `slider`
  - `badge`
  - `accordion`
  - `card`
  - `separator`
  - `sonner` support
  - `tooltip`
  - `dialog` if you decide to support prompt edit overlays later
- Verify the generated component paths fit the planned app structure.
- In this Vite app, place `TooltipProvider` in `src/main.tsx` around `<App />`; do not use the Next.js `app/layout.tsx` example from shadcn docs.
- Keep the generated `slider` single-thumb, because BeatPrompt uses one BPM value rather than a range.
- Use `sonner` for toasts; do not install the deprecated `toast` helper.

## New Files

- `components.json`
- `src/components/ui/*`
- `src/lib/utils.ts`
- any shadcn setup files required by the selected install path

## Changed Files

- `package.json`
- `src/index.css`
- `src/App.css` if the setup requires global token wiring
- `src/main.tsx` if the setup needs provider/wrapper changes

## Deleted Files

- none

## Conventional Commit

```txt
chore(ui): install shadcn for beatprompt

Add shadcn/ui to the Vite frontend and wire the base component
primitives needed for the BeatPrompt MVP. This establishes the UI
foundation before any feature-specific screen work begins.
```
