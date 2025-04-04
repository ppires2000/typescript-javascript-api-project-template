# TypeScript / JavaScript API Project Template

![CI](https://github.com/ppires2000/typescript-javascript-api-project-template/actions/workflows/ci.yml/badge.svg)
![Codecov](https://codecov.io/gh/ppires2000/typescript-javascript-api-project-template/branch/development/graph/badge.svg)
![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)
![Node](https://img.shields.io/badge/node-20.x-brightgreen)
![TypeScript](https://img.shields.io/badge/typed_with-TypeScript-blue.svg)
![Prettier](https://img.shields.io/badge/code_style-Prettier-blueviolet.svg)

> 🚀 A clean, scalable, and production-ready TypeScript/JavaScript backend API template using Express.js, Sequelize, PostgreSQL, and Docker.  
> Built with best practices in mind: CI/CD, Swagger, ESLint, testing, and more.

---

## ✨ Features

- ✅ Express.js API structure (versioned routing)
- 🐘 PostgreSQL database (via Docker Compose)
- 🧱 Sequelize ORM (typed, migration-ready)
- ⚙️ Environment variable support (`.env`)
- 💅 Prettier + ESLint + Husky + lint-staged
- 🧪 Jest + Supertest + Code Coverage
- 🧾 Swagger/OpenAPI auto-generated docs
- 🔒 Secure defaults (Helmet, CORS, logging)
- 🚀 GitHub Actions CI with Codecov badge
- 📁 Project structure designed for scale

---

## 📂 Project Structure

```
.
├── src/
│   ├── app.ts               # Express app setup
│   ├── server.ts            # App entry point
│   ├── routes/              # Versioned API routes
│   ├── controllers/         # Business logic (to be added)
│   ├── database/            # Sequelize config & models
│   ├── utils/               # Logger, middleware, etc.
│   └── docs/swagger.ts      # Swagger config
├── database/data/           # PostgreSQL volume (gitignored)
├── .github/workflows/ci.yml# GitHub Actions config
├── docker-compose.yml       # PostgreSQL container
└── .env / .env.example      # Environment variables
```

---

## 🛠️ Getting Started

```bash
git clone https://github.com/ppires2000/typescript-javascript-api-project-template.git
cd typescript-javascript-api-project-template
cp .env.example .env
docker compose up -d       # Start PostgreSQL
npm install
npm run dev                # Start API in dev mode
```

---

## 🧪 Testing & Coverage

```bash
npm run test              # Run tests
npm run test:coverage     # Run with coverage
```

See coverage report in `/coverage/lcov-report/index.html`

---

## 📚 Swagger API Docs

Once the server is running, open:  
`http://localhost:3000/api/docs`

---

## 🐳 Docker

Spin up the PostgreSQL database via Docker Compose:

```bash
docker compose up -d
```

PostgreSQL will persist data in `./database/data` (gitignored)

---

## ✅ GitHub Topics / Tags

To add under repository settings:

```
typescript, javascript, express, api, sequelize, postgres, docker, eslint, prettier, jest, swagger, template
```

---

## 📜 License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

---

## 💬 Feedback & Contributions

Open an issue or submit a PR — contributions are always welcome!  
See [`CONTRIBUTING.md`](CONTRIBUTING.md) for guidelines.
