# Astro Starter Kit: Basics

## Оплата Platega

Оплата запускается через серверный endpoint `/api/billing/checkout`. Клиент
передаёт только `planId`, а пользователь, сумма и параметры тарифа проверяются
на сервере. После ответа Platega создаётся pending-запись в Directus
`subscriptions`; доступ обновляется только callback-ами Platega.

Для server runtime задайте в окружении `DIRECTUS_URL`,
`DIRECTUS_SERVICE_TOKEN`, `PLATEGA_BASE_URL`, `PLATEGA_MERCHANT_ID`,
`PLATEGA_SECRET`, `PLATEGA_RETURN_URL` и `PLATEGA_FAILED_URL`. В кабинете
Platega укажите callback-маршруты `/api/webhooks/platega/payment`,
`/api/webhooks/platega/subscription-charge` и
`/api/webhooks/platega/subscription-status` на публичном HTTPS-домене.

При Docker-деплое через Dokploy серверные переменные должны быть добавлены как
runtime environment variables контейнера. Их не нужно и небезопасно передавать
как Docker build arguments. Исключение — публичный `PUBLIC_DIRECTUS_URL`: он
используется браузерным кодом и должен быть добавлен в Dokploy как build
argument, после чего приложение необходимо пересобрать без build cache.

```text
PUBLIC_DIRECTUS_URL=https://api.my-simple-english.ru
```

```sh
npm create astro@latest -- --template basics
```

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src
│   ├── assets
│   │   └── astro.svg
│   ├── components
│   │   └── Welcome.astro
│   ├── layouts
│   │   └── Layout.astro
│   └── pages
│       └── index.astro
└── package.json
```

To learn more about the folder structure of an Astro project, refer to [our guide on project structure](https://docs.astro.build/en/basics/project-structure/).

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
