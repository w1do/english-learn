---
name: frontent
description: Core instructions for developing and maintaining Astro projects.
---

### Astro Project Development Skill

This skill provides general instructions for developing and maintaining Astro-based projects (current project: Campfish).

#### Core Instructions

- [🏗 Project Architecture](./architecture/SKILL.md) — folder structure and collections.
- [🔍 SEO and Optimization](./seo-write/SKILL.md) — search optimization and performance rules.
- [🎨 Components and Design](./components/SKILL.md) — guide to UI components and Shadcn.
- [📝 Content and Schemas](./content/SKILL.md) — frontmatter and content structure.
- [📋 Documentation](./documentation/SKILL.md) — rules for maintaining history and SUMMARY.md.
- [✨ Quality and Checks](./quality/SKILL.md) — formatting, linting, and code standards.
- [✨ Structure Copying](./landing-copy/SKILL.md) — copying and assembling landing pages.
- [✨ Template Markup Transfer](./source-copy/SKILL.md) — exact block-by-block transfer of pages from `source/`.
- [✨ Cluster Expansion](./cluster-pilar-page/SKILL.md) — expanding an SEO cluster.
- [✨ LLM.txt](./astro-llm-md/SKILL.md) — building all pages for AI crawlers.
- [🤖 SEO Engine (robots + sitemap)](./seo-engine/SKILL.md) — generating `robots.txt` and the `sitemap-index.xml` sitemap.
- [🔗 SEO Recrawl URLs](./seo-urls/SKILL.md) — a flat URL list extracted from the sitemap for Yandex recrawling.
- 🖼 Image search and 🧠 topic research — only through the `serpapi` MCP (`google_images` / `google_ai_mode` engines). There are no separate scripts anymore.

#### Core Principles

- **Content First**: Always inspect `src/content/` before creating new pages. If the data can be represented as a collection, use `getCollection`.
- **Mandatory Documentation**: Document every new layer, development milestone, and change. Condense the information in `SUMMARY.md` so an LLM can understand the process.
- **Clean and Safe Code**: Follow the formatting and typing rules (see the [quality guide](./quality.md)). Run checks before submission.
- **Type Safety**: Use TypeScript for every component. Define Zod schemas for collections in `src/content/config.ts`.
- **UI Consistency**: Use Shadcn components. Consult the [component instructions](./components/SKILL.md) when creating new UI elements.

#### Working with Content

1. When creating a new content item, create an `.md` file in the appropriate `src/content/` folder.
2. Use the correct frontmatter (see the [content specification](./content/SKILL.md)).
3. Use the appropriate identifiers to link items (for example, `locationId`).

#### SEO and Performance

- Always add meta tags through the SEO component or the Layout (see the [SEO guide](./seo/SKILL.md)).
- Use the `<Image />` component from `astro:assets`.
- Minimize client-side JavaScript. Use `client:*` directives only where necessary.

#### Commands

- `npm run dev` — start the development server.
- `npm run build` — build the project.
- `npm run check` — check Astro types and structure.
- `npm run format` — format code automatically.
- `npm run lint` — check code against the project standards.

#### Useful Resources

- Astro documentation: [docs.astro.build](https://docs.astro.build)
- Shadcn UI: [ui.shadcn.com](https://ui.shadcn.com)
- Tailwind CSS: [tailwindcss.com](https://tailwindcss.com)
