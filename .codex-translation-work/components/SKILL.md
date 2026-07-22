---
name: components
description: Rules for component development and design-system maintenance.
---

### Components and Design System

Instructions for creating and using UI components in the project, based on [DESIGN.md](../../DESIGN.md).

#### 1. Core Styles (Tailwind)

- **Container**: `max-width: 1280px` (`max-w-[1280px] mx-auto px-4`).
- **Site background**: Light gray (`bg-slate-50`).
- **Header**: Transparent (`bg-transparent`).
- **Footer**: Gray (`bg-slate-100`).
- **Accents**: Orange (`bg-orange-500`, `text-orange-500`) for buttons, icons, and active elements.
- **Text**: `text-slate-900` for headings and `text-slate-600` for body content.

#### 2. Shadcn Components

Use Shadcn for complex UI elements:

- **Dialog (Modal)**: For opening report or event details.
- **Accordion**: For the FAQ section.
- **Button**: Style with orange (`variant="default"` must be overridden to use orange).
- **Badge**: For categories (#Fishing, #Camping).

#### 3. Base Card Pattern

All cards (events, locations, reports) must have a lightweight, clean design, be reusable through props, live in `components`, and be used as `<ComponentName/>`:

```html
<div
  class="bg-white rounded-xl border border-slate-200/60 overflow-hidden transition-all hover:bg-blue-50/30 hover:shadow-sm"
>
  <!-- Image -->
  <img src="..." class="w-full h-48 object-cover" alt="..." />
  <div class="p-4">
    <!-- Badges -->
    <div class="flex gap-2 mb-2">
      <span class="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded"
        >...</span
      >
    </div>
    <!-- Content -->
    <h3 class="text-lg font-semibold text-slate-900">...</h3>
    <p class="text-slate-600 text-sm line-clamp-2">...</p>
    <!-- Action button -->
    <button
      class="mt-3 text-sm text-orange-500 font-medium hover:text-orange-600 transition-colors"
    >
      Learn more →
    </button>
  </div>
</div>
```

#### 4. Swiper.js Integration

For sliders (for example, "Upcoming Events"):

- Initialize on the client (through `<script>` or React/Solid components).
- Settings: `slidesPerView: 1` on mobile and `slidesPerView: 3` on desktop.
- Navigation: Style arrows and pagination to match the overall design.

#### 5. Accessibility (A11y)

- Use semantic tags (`<header>`, `<footer>`, `<main>`, `<section>`).
- Manage focus in modal dialogs.
- Maintain sufficient text contrast.

#### 6. Component Layers and Naming

- Do not create duplicate components.
- Before creating a component, check whether the project already contains an equivalent component or one with suitable functionality.
- Reusing existing components is the priority.

# Naming and Folder Structure for Page Components

- Components associated with a specific page (for example, Home or About) must be organized in layers.
- Location pattern: `components/{page_name}/{component_name}.astro`.
- Example for the Home page: `components/home/HomeAbout.astro`.
- Example for the About page: `components/about/AboutTeam.astro`.

# Component Naming Rules

- A component name must describe its purpose and owning page (PascalCase with a page prefix).
- ✅ HomeHero.astro, HomeFeatures.astro, AboutHistory.astro
- ❌ Hero.astro, Features.astro (the owning page is unclear)
