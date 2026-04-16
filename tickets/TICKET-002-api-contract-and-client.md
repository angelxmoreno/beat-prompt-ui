# TICKET-002: Add Typed API Contract and Optimize Client

## Goal

Create the typed frontend contract for the CakePHP `POST /optimize` endpoint and add a small client wrapper that the UI can use consistently.

This ticket should make the frontend ready to consume the backend without mixing request/response shape concerns into the screen components.

## Change

- Define shared TypeScript types for the optimize request and response.
- Model the response with a single `tempoBpm` scalar and optional `tempoSource`.
- Add a fetch wrapper for the optimize endpoint with basic error handling.
- Centralize the API base URL so the app can point at the CakePHP backend cleanly.
- Add lightweight normalizers/helpers for extracting display-friendly values from the response.

## New Files

- `src/api/optimize.ts`
- `src/types/optimize.ts`
- `src/lib/env.ts`
- `src/lib/tempo.ts`

## Changed Files

- `src/main.tsx`
- `package.json`

## Deleted Files

- none

## Conventional Commit

```txt
feat(ui): add typed optimize api contract and client wrapper

Introduce the shared request/response types for the CakePHP optimize
endpoint and a small client wrapper for posting prompt generation
requests. The contract uses a scalar tempoBpm value and keeps API
details out of presentation components.
```
