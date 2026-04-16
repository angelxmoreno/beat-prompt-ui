# TICKET-005: Finish Responsive Behavior, Accessibility, and Visual Polish

## Goal

Make the BeatPrompt screen durable for real use across desktop and mobile, and clean up the remaining usability, accessibility, and visual details.

This ticket should be the final pass before the UI is considered MVP-ready.

## Change

- Tighten the desktop and mobile layouts so the workflow stays single-screen and readable.
- Ensure the final prompt stays visually dominant on all viewports.
- Verify touch targets, focus states, and keyboard navigation.
- Add recoverable error states for API failure and policy-cleaning failure.
- Add empty-state and loading-state treatment that does not collapse the layout.
- Polish spacing, contrast, and card hierarchy so the screen feels intentional rather than scaffolded.
- Remove any remaining starter-template artifacts and dead assets.

## New Files

- `src/components/common/ErrorState.tsx`
- `src/components/common/ErrorState.css`
- `src/components/common/LoadingState.tsx`

## Changed Files

- `src/App.tsx`
- `src/App.css`
- `src/index.css`
- `src/components/layout/AppShell.tsx`
- `src/components/composer/Composer.tsx`
- `src/components/result/ResultPanel.tsx`
- `src/components/tweaks/TweakControls.tsx`
- `src/components/result/DetectedStyle.tsx`
- `src/components/result/PromptVariants.tsx`
- `src/api/optimize.ts`

## Deleted Files

- any unused starter assets or demo sections left over from the Vite template

## Conventional Commit

```txt
refactor(ui): finish responsiveness and polish for beatprompt

Harden the single-screen UI for desktop and mobile, add the remaining
error/loading/accessibility states, and remove any leftover starter
template artifacts. This pass turns the scaffold into an MVP-ready
product surface.
```
