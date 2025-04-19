# TypeScript/JavaScript API Project Template

A modern template for building robust, scalable backend APIs using TypeScript or JavaScript. Includes everything needed to start building an Express API using best practices.

## ✨ Features

- 📦 Express.js API with TypeScript or JavaScript
- 🧪 Jest testing setup (unit + integration)
- 🛠 ESLint + Prettier for code quality
- 🧩 Automated release workflow (`release.sh` + GitHub Actions)
- 🗒️ CHANGELOG.md-based release notes for GitHub Releases
- 🧵 Project structure following best practices
- 📦 Sequelize ORM + PostgreSQL
- 🐳 Docker & Docker Compose
- 📄 Swagger/OpenAPI documentation
- 🔒 Security middlewares (helmet, cors, etc.)
- 🧰 Built-in logging system using Winston

## 🛠️ Getting Started

1. Clone the repository
2. Run `npm install`
3. Copy `.env.example` to `.env` and adjust config
4. Run the dev server:
   ```bash
   npm run dev
   ```

### Optional: release automation setup

```bash
npm run build             # Ensure build passes
./scripts/release.sh      # Interactive version tagging & GitHub Release
```

## 📚 Swagger API Docs

Once the server is running, open your browser at:

```
http://localhost:3000/api-docs
```

## 🚀 Release Flow

This project uses an automated release process:

1. Run `./scripts/release.sh` to bump the version, update `CHANGELOG.md`, and create a Git tag.
2. GitHub Actions triggers on tag push and creates a GitHub Release.
3. The release notes are pulled from the latest entry in `CHANGELOG.md`.

> See [`scripts/release.sh`](scripts/release.sh) and [`scripts/README.md`](scripts/README.md) for full details.

## 🧰 Internal Tooling

The `scripts/` folder contains internal developer tooling, such as:

- `release.sh`: assists with versioning, changelog updates, tagging, and publishing releases

More details in [`scripts/README.md`](scripts/README.md)

## License

MIT – © 2025
