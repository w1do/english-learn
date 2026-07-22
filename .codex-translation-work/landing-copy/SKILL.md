---
name: landing-copy
description: Creating landing pages from existing components and SEO queries.
---

# Skill: landing-copy

This skill creates exact copies of landing pages from existing components and adapts them to specific SEO queries.

## Operating Principles
1. **Structure analysis**: Analyze `src/pages/index.astro` to determine the required set of components.
2. **Component reuse**: Every component in `src/components/Shared/` must accept data through `props`.
3. **SEO optimization**: Use data from the `seo/` directory and the `seo.md` skill to generate content.
4. **Mock data**: Every new page must contain unique mock data relevant to its topic.
5. **Preserve structure**: Keep the components' HTML structure unchanged; only text and images supplied through props may change.

## New Page Creation Workflow
1. Select the target SEO query.
2. Create a new file at `src/pages/[slug].astro`.
3. Build a data object (mocks) from the SEO keywords.
4. Import components from `src/components/Shared/`.
5. Pass the mock data to the components.

## Component Requirements
- All text blocks must be exposed through `Astro.props`.
- Default values matching the current content in `index.astro` must be defined.
