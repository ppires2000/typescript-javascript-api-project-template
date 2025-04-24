# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [2.0.0] - 2025-04-24

### Added

- JWT-based authentication via `/auth/login`
- Protected route `/auth/me` with `authenticateToken` middleware
- Sequelize `beforeCreate` hook for password hashing
- Supertest coverage for `auth`, `users`, and health routes
- `jest.globalSetup.ts` to manage DB lifecycle for tests

### Changed

- Swagger documentation migrated to unified `.yaml` files:
  - `auth.openapi.yaml`
  - `health.openapi.yaml`
  - `users.openapi.yaml`
- Cleaned up all inline JSDoc Swagger blocks
- Fully modular and testable route structure

### Fixed

- DB collisions during test runs with `sequelize.sync({ force: true })`
- Inconsistent Swagger formatting and duplication

---

## [1.0.9] - 2025-04-18

### Added

- New script: `sync-development.sh` to safely sync `development` with `master` after a release
- `RELEASING.md` now included as the official release procedure checklist

### Changed

- `release.sh` updated to remind maintainers to use the sync script instead of printing full git steps
- `RELEASING.md` updated to reflect this change and simplify post-release steps

---

## [1.0.8] - 2025-04-18

### Added

- `RELEASING.md` file with the official step-by-step release and sync procedure

### Changed

- `release.sh` updated to include a reminder for syncing `development` with `master` after the PR merge

---

## [1.0.7] - 2025-04-18

### Docs

- Updated `README.md` to document release flow and internal tooling
- Updated `scripts/README.md` to reflect actual `release.sh` behavior

--

## [1.0.6] - 2025-04-19

### Fixed

- Automation cleanup and changelog fix

---

## [1.0.5] - 2025-04-18

### Fixed

- Corrected the GitHub Release notes automation to properly extract the latest changelog entry using `awk`.

---

## [1.0.4] - 2025-04-18

### Changed

- Removed manual release description prompt from `release.sh` since release notes are now extracted from `CHANGELOG.md`.

### Fixed

- Resolved duplicate entries in GitHub release body due to overlapping changelog parsing in `release.yml`.

### DevOps

- Cleaned up CI/CD pipeline behavior related to automatic tagging and release publishing.

### Changed

- `release.sh` script was updated to simplify the release process.

### Removed

- Removed the interactive prompt asking for a short release description (now automatically extracted from `CHANGELOG.md`).

---

## [1.0.3] - 2025-04-18

### Added

- Automated changelog parsing for GitHub Releases
- Interactive version bump and release flow via `release.sh`

### Fixed

- Resolved test failures for healthcheck endpoint

---

## [1.0.2] - 2025-04-18

### Added

- Mocked Sequelize connection in healthcheck test
- New `release.sh` with tagging, changelog, and versioning logic

---

## [1.0.0] - 2025-04-18

### Added

- Initial project setup with Express, TypeScript, Sequelize, Jest, ESLint, Prettier, Swagger
