# TICKET-003: Build the Prompt Composer and Generate Flow

## Goal

Implement the main user entry point: a large prompt composer, an `Instrumental only` toggle, example chips, and the primary `Generate` action.

This ticket should let a user submit a beat idea and see the app enter a real loading state while the backend request is in flight.

## Change

- Build the composer section with the large multiline input.
- Add the `Instrumental only` switch, enabled by default.
- Add quick example chips for common prompt starters.
- Wire the `Generate` button to the optimize client.
- Preserve user input while the request is loading.
- Add inline validation for empty or whitespace-only submissions.
- Add a compact loading state that does not shift the layout.

## New Files

- `src/components/composer/Composer.tsx`
- `src/components/composer/Composer.css`
- `src/components/common/ExampleChips.tsx`
- `src/components/common/ExampleChips.css`

## Changed Files

- `src/App.tsx`
- `src/App.css`
- `src/api/optimize.ts`
- `src/types/optimize.ts`

## Deleted Files

- none

## Conventional Commit

```txt
feat(ui): implement the beatprompt composer flow

Add the primary prompt composer, instrumental-only toggle, example
chips, and generate action. Wire submissions to the typed optimize API
client and add loading plus validation states that preserve the user's
input.
```
