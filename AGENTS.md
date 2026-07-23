# Универсальный AGENTS.md для фронтенд-проектов

Этот файл задаёт единые правила работы для фронтендов на Astro, Next.js и Nuxt. Его задача — не дублировать навыки, а маршрутизировать работу к нужному `SKILL.md`.

## Базовый порядок работы

1. Сначала открой главный файл навыков проекта: `~/shared-skills/shared-skills/SKILL.md`.
2. Затем включай только те навыки, которые соответствуют текущей задаче.
3. Если задача попадает под специализированный навык, следуй ему, а не переписывай правило вручную здесь.
4. Для больших задач держи архитектуру, контент, SEO, качество и документацию синхронно.

## Единые правила для всех фронтов

- Пиши код и тексты с учётом текущего фреймворка, но не привязывай бизнес-правила к Astro, Next или Nuxt без необходимости.
- Держи логику изолированной от UI.
- Не размазывай интеграции по компонентам, если это можно вынести в отдельный клиент, хук, сервис или серверный слой.
- Не дублируй инструкции в файлах проекта, если они уже описаны в навыке.
- При изменении пользовательского сценария обновляй связанный контент, навигацию, SEO и документацию одновременно.

## Как выбирать навыки

### Архитектура и структура

- Используй `~/shared-skills/shared-skills/architecture/SKILL.md`, когда нужно определить структуру папок, границы слоёв, подход к переиспользованию и размещению модулей.
- Если задача связана с переносом или раскладкой UI по компонентам, дополнительно используй `~/shared-skills/shared-skills/components/SKILL.md`.

### Контент и SEO

- Используй `~/shared-skills/shared-skills/seo-write/SKILL.md` для любых текстов, посадочных страниц, мета-тегов и SEO-структуры.
- Используй `~/shared-skills/shared-skills/content/SKILL.md`, когда работа идёт с коллекциями контента, frontmatter и markdown-данными.
- Используй `~/shared-skills/shared-skills/landing-copy/SKILL.md`, когда нужно собрать посадочную страницу по структуре запроса.
- Используй `~/shared-skills/shared-skills/cluster-pilar-page/SKILL.md`, когда один запрос разворачивается в кластер страниц.
- Используй `~/shared-skills/shared-skills/source-copy/SKILL.md`, когда нужно точно перенести верстку из `source/` без фантазии.
- Используй `~/shared-skills/shared-skills/astro-llm-md/SKILL.md`, когда нужно собрать LLM-ориентированную карту страниц.
- Используй `~/shared-skills/shared-skills/seo-engine/SKILL.md`, когда нужно собрать `robots.txt`, `sitemap` и SEO-инфраструктуру.
- Используй `~/shared-skills/shared-skills/seo-urls/SKILL.md`, когда нужно поддерживать плоский список URL для переобхода.

### Качество и документация

- Используй `~/shared-skills/shared-skills/quality/SKILL.md` для форматирования, линтинга, типизации и проверок.
- Используй `~/shared-skills/shared-skills/documentation/SKILL.md` для обновления `SUMMARY.md` и документации по изменённому функционалу.

### Интеграции

- Используй `~/shared-skills/shared-skills/directus-auth/SKILL.md` для авторизации Directus, refresh-токенов, session checks, protected/guest guards и logout.
- Используй `~/shared-skills/shared-skills/platega/SKILL.md` для платежей Platega, callback-ов, подписок, возвратов, балансов, выгрузок и Payout API.

## Специальные правила проекта

- Тексты пишутся от первого лица: `я`, `меня`, `мне`.
- Не используй обращения `вы`, `вас`, `компания`, `студия`, если это не прямой цитируемый контекст.
- Если задача про SEO или посадочную страницу, сначала проверь, есть ли подходящий кластер в `seo/`, и только потом пиши структуру.
- Если задача про форму обратной связи, выноси логику в отдельный хук или серверный модуль.
- Если задача про страницу, которая есть в `source/`, переносить нужно точно по исходной разметке, без новых визуальных решений.

## Контент и заявки

- Для написания контента по теме сайта используй MCP `rag-content-botsync-w1do`, если задача требует RAG-поддержку.
- Для заявок используй актуальный endpoint проекта, если он уже определён в текущем репозитории или документации.
- При создании страниц обновляй `urls-seo.txt`, если такой файл используется в проекте.

## Платежи

- Не доверяй success redirect как подтверждению оплаты.
- Не выдавай доступ без проверенного callback-а и сверки суммы, валюты и статуса.
- Секреты платёжных систем держи только на сервере.

## Фреймворк-специфика

### Astro

- Используй Astro для SSG/SSR и content collections.
- Делай минимальный клиентский JavaScript.
- Для шаблонов и посадочных страниц придерживайся server-first подхода.

### Next.js

- Используй App Router или Pages Router в соответствии с текущей архитектурой проекта.
- Разделяй server/client boundaries явно.
- Для forms, auth и payments держи серверные секреты вне клиентских компонентов.

### Nuxt

- Используй composables, server routes и `useAsyncData`/`useFetch` там, где это уместно.
- Не тащи секреты в client-only runtime.
- Для контента и SEO сохраняй серверную генерацию там, где это возможно.

## Когда нужно остановиться и уточнить

- Если задача затрагивает неизвестный стек или нет соответствующего skill-файла.
- Если нужно выбрать между несколькими допустимыми архитектурными вариантами и это меняет пользовательский сценарий.
- Если изменение требует внешнего решения: доступов, ключей, миграции данных или утверждения API-контракта.

## Точка входа в навыки

- `~/shared-skills/shared-skills/SKILL.md`
- `~/shared-skills/shared-skills/architecture/SKILL.md`
- `~/shared-skills/shared-skills/components/SKILL.md`
- `~/shared-skills/shared-skills/content/SKILL.md`
- `~/shared-skills/shared-skills/seo-write/SKILL.md`
- `~/shared-skills/shared-skills/landing-copy/SKILL.md`
- `~/shared-skills/shared-skills/source-copy/SKILL.md`
- `~/shared-skills/shared-skills/cluster-pilar-page/SKILL.md`
- `~/shared-skills/shared-skills/astro-llm-md/SKILL.md`
- `~/shared-skills/shared-skills/seo-engine/SKILL.md`
- `~/shared-skills/shared-skills/seo-urls/SKILL.md`
- `~/shared-skills/shared-skills/documentation/SKILL.md`
- `~/shared-skills/shared-skills/quality/SKILL.md`
- `~/shared-skills/shared-skills/directus-auth/SKILL.md`
- `~/shared-skills/shared-skills/platega/SKILL.md`
