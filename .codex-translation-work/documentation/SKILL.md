---
name: documentation
description: Rules for documenting changes and maintaining SUMMARY.md.
---

### Documentation and Summary

This rule establishes a mandatory change-recording process to maintain development continuity and make the context understandable to both people and LLMs.

#### 1. Mandatory Documentation

Every significant project change must be documented. This includes:

- **Layers**: Creating or changing architectural layers (components, services, collections).
- **Milestones**: Completing major work items (for example, SEO setup or Shadcn integration).
- **Changes**: Bug fixes or refactoring existing code.

#### 2. Summary File (SUMMARY.md)

Maintain a `SUMMARY.md` file at the project root. Its purpose is to give an LLM a concise but complete view of the project's current state.

**SUMMARY.md structure:**

- **Current Status**: The project's current stage.
- **Recent Changes**: A list of recently implemented features and changes.
- **Tech Debt**: Known issues or work that remains to be done.
- **Next Steps**: The next planned tasks.

#### 3. Update Process

1. After all lint checks pass (see the [quality guide](./quality.md)) and a task or milestone is complete, Junie (or the developer) must update the relevant section in `docs` or `skills`.
2. All key information must be condensed and transferred to `SUMMARY.md`.
3. Old entries in `SUMMARY.md` may be archived with the `done` status when they are no longer relevant to understanding the current state.

#### 4. Why This Is Necessary

- **For an LLM**: Makes it possible to understand the project quickly without scanning every file.
- **For the developer**: Provides a transparent history of decisions and architectural changes.
