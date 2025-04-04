# Contributing to TypeScript / JavaScript API Project Template

Thank you for considering contributing to this project! 🚀  
This template is designed to help you (and others) build scalable, clean, and production-ready backend APIs using TypeScript and Express.

---

## 🙌 How You Can Contribute

### 🐛 Report Bugs

- Open an issue with detailed steps to reproduce the bug
- Include logs or screenshots if applicable

### ✨ Suggest Enhancements

- Propose new features or improvements
- Share examples from your own use cases

### 💻 Submit Code

- Fix bugs
- Add new features (e.g. models, auth, config)
- Improve documentation or tests

---

## 📁 Project Setup (for local dev)

```bash
git clone https://github.com/ppires2000/typescript-javascript-api-project-template.git
cd typescript-javascript-api-project-template
cp .env.example .env
docker compose up -d     # Start PostgreSQL
npm install
npm run dev              # Start dev server
```

---

## 🔍 Scripts to Know

| Script                  | Purpose                                |
| ----------------------- | -------------------------------------- |
| `npm run dev`           | Start API in development mode          |
| `npm run test`          | Run all tests                          |
| `npm run lint`          | Run ESLint checks                      |
| `npm run lint:fix`      | Auto-fix lint issues                   |
| `npm run test:coverage` | Run tests and generate coverage report |

---

## 📐 Code Style

- TypeScript with strict mode
- ESLint + Prettier (runs automatically on commit via Husky)
- Keep logic modular and documented

---

## 🧪 Tests

- Use **Jest** for unit and integration tests
- Add tests for new endpoints, models, and logic
- Run tests with `npm run test`

---

## 🧼 Commit Guidelines

We recommend using [Conventional Commits](https://www.conventionalcommits.org/):

Examples:

- `feat: add user registration endpoint`
- `fix: correct DB connection error`
- `docs: update README with usage`
- `chore: upgrade dependencies`

---

## 🤝 Code of Conduct

Be kind, respectful, and constructive. This project follows the [Contributor Covenant](https://www.contributor-covenant.org/).

---

Thank you for being part of this project 🙌
