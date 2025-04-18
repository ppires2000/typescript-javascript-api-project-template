# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

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
