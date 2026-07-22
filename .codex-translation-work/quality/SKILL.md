---
name: quality
description: Standards for code quality, formatting, typing, and verification.
---

### Code Quality, Verification, and Formatting

This document defines quality standards, formatting rules, and code verification processes for the Campfish project.

#### 1. Code Formatting

All project files must follow a consistent style to ensure readability.

- **Tool**: Prettier. Its configuration is in `.prettierrc`.
- **Rules**:
  - Use 2 spaces for indentation.
  - End statements with semicolons.
  - Use single quotes for strings (except JSX/Astro attributes).
  - Use trailing commas in objects and arrays (`es5`).
- **Naming**:
  - Components (`.astro`, `.tsx`): `PascalCase` (for example, `Header.astro`, `UserCard.tsx`).
  - Page and content files: `kebab-case` (for example, `about-us.astro`).
  - Styles and utilities: `camelCase`.

#### 2. Code Verification and Typing
Code checks must run regularly during development.

- **ESLint**: Used to check for logic and style errors. Its configuration is in `eslint.config.js`.
- **TypeScript**:
  - Types are required for all component props.
  - Avoid `any`. Use `unknown` or a detailed type definition when necessary.
  - Use interfaces to describe data structures.
- **Astro Check**:
  - The `npm run check` command validates types in `.astro` files.

#### 3. Error Handling

- **Graceful degradation**: If data fails to load (for example, from collections), the component must not cause a blank screen. Check that the data exists.
- **Zod schemas**: Always validate incoming content with Zod in `src/content/config.ts`. This ensures content errors are caught at build time.

#### 4. Astro and React Standards

- **Client directives**: Use `client:*` sparingly and only for interactive components (forms, filters, modals).
- **Assets**: Use the `<Image />` component from `astro:assets` for automatic optimization. Never use the `<img>` tag directly for local files.

#### 5. Pre-Submission Checklist

Before calling `submit`, make sure that:

1. The code is formatted (`npm run format`).
2. Linting passes without errors (`npm run lint`).
3. Types and structure have been checked (`npm run check`).
4. The console contains no errors during local development (`npm run dev`).
5. Components follow the design system in `DESIGN.md`.
