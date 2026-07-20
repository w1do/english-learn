export interface BlogCategory {
  slug: string;
  name: string;
}

export const blogCategories: BlogCategory[] = [
  { slug: 'a0-polnyj-start-s-nula-2', name: 'A0 — Полный старт с нуля' },
  { slug: 'a1-bazovyj-anglijskij-3', name: 'А1 - Базовый Английский' },
  { slug: 'a2-uverennaa-baza-4', name: 'A2 — Уверенная база' },
  { slug: 'b1-svobodnoe-obsenie-5', name: 'B1 — Свободное общение' },
  { slug: 'b2-prodvinutyj-uroven-6', name: 'B2 — Продвинутый уровень' },
];

export function getCategoryName(slug: string): string {
  return blogCategories.find((c) => c.slug === slug)?.name ?? slug;
}
