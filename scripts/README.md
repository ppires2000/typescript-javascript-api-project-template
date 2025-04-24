# scripts/

This folder contains internal tools and scripts used to manage the repository.

## Scripts

### `release.sh`

A utility script to automate:

- Interactive version bumping using semantic versioning (`vX.Y.Z`)
- Linting, testing, and building before release
- Version tagging and committing
- Pushing Git tag and code to GitHub
- Triggering GitHub Actions to automatically create a GitHub Release

## Usage

1. Make sure you've edited `CHANGELOG.md` with the new version entry (top of file).
2. Run the release script from the project root:

```bash
./scripts/release.sh
```

3. Follow the prompts to choose the version bump (patch/minor/major/custom).

> GitHub Actions will automatically publish the release with notes from `CHANGELOG.md`.

## Notes

- Ensure the script is executable:
  ```bash
  chmod +x scripts/release.sh
  ```

### 🧹 reset-db.sh

A simple helper to fully reset the database — used to wipe out all existing tables and re-seed clean test data:

```bash
./scripts/reset-db.sh
```

This script performs the following steps:

1. Rolls back all Sequelize migrations
2. Re-applies all migrations
3. Runs all seeders

Useful when changes to models, password logic, or schema make previous data invalid or outdated.

- Releases are only allowed from non-`main`/`master` branches for safety.
