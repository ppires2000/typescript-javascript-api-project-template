# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

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
