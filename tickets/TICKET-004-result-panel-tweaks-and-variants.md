# TICKET-004: Build the Result Panel, Tweak Controls, and Variants

## Goal

Render the generated prompt as the primary visual result and add the post-generation controls that let the user refine it.

This ticket should make the BeatPrompt screen feel like a working tool after one successful optimize request.

## Change

- Build the final prompt result panel.
- Add copy, regenerate, and edit actions.
- Add the detected-style accordion/panel with collapsed-by-default metadata.
- Add energy, tempo, mood, and instrument tweak controls.
- Make tempo a single-value BPM slider and display only one BPM value.
- Add the three prompt variants: more aggressive, more minimal, and more cinematic.
- Keep prior successful output visible while regeneration is in progress.
- Add copy confirmation feedback.

## New Files

- `src/components/result/ResultPanel.tsx`
- `src/components/result/ResultPanel.css`
- `src/components/result/DetectedStyle.tsx`
- `src/components/result/DetectedStyle.css`
- `src/components/result/PromptVariants.tsx`
- `src/components/result/PromptVariants.css`
- `src/components/tweaks/TweakControls.tsx`
- `src/components/tweaks/TweakControls.css`

## Changed Files

- `src/App.tsx`
- `src/App.css`
- `src/api/optimize.ts`
- `src/types/optimize.ts`
- `src/lib/tempo.ts`

## Deleted Files

- none

## Conventional Commit

```txt
feat(ui): add prompt result and refinement controls

Render the optimized prompt as the dominant result, add copy/regenerate
/edit actions, and include the tweak controls plus prompt variants.
Tempo is treated as a single BPM slider value, and detected style
metadata stays collapsed by default.
```
