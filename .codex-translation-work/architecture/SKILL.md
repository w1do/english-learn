---
name: architecture
description: Architecture rules and directory structure for an Astro project.
---

### Project Architecture

The project is built with the **Astro** framework, using static site generation (SSG) and partial SSR for dynamic forms.

#### 1. Directory Structure

- `src/content/` — The main content store (Content Collections). Each subfolder is a separate collection (blog, reports, locations, events, market, faq).
- `src/components/` — UI components (Shadcn + custom components).
  - `ui/` — Base Shadcn components.
  - `shared/` — Shared components (Header, Footer, Cards).
  - `home/` — Blocks specific to the home page.
- `src/layouts/` — Page templates (the main Layout).
- `src/pages/` — Page routing.
- `src/schemas/` — Zod schemas for content validation.

#### 2. Content Collections

Using `src/content` is the preferred way to work with data:

- **Blog**: Articles about fishing and camping.
- **Reports**: Reports linked to a `locationId`.
- **Locations**: Cards for bodies of water and locations.
- **Events**: Event information.
- **Market**: Marketplace listings.
- **FAQ**: Questions and answers grouped by category.

#### 3. Technology Stack

- **Framework**: Astro 4.x
- **Language**: TypeScript (strict typing)
- **Styling**: Tailwind CSS
- **UI Components**: Shadcn UI (based on Radix UI)
- **Slider**: Swiper.js
- **Icons**: Lucide React or equivalent.

#### 4. Rendering Strategy

- Most pages are generated statically (SSG).
- Content submission forms (`/add-report`, `/add-event`) may require SSR or client islands to interact with an API.
