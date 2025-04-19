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

- Releases are only allowed from non-`main`/`master` branches for safety.
