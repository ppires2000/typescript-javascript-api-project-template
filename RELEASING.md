# 🎟️ RELEASING.md

This document outlines the official step-by-step process for preparing and releasing a new version of this project.

---

## ✅ Overview

The project uses:

- A `development` branch for all changes
- A `master` branch for stable releases
- Semantic versioning (`vX.Y.Z`)
- GitHub Actions to publish GitHub Releases from the `CHANGELOG.md`

---

## 🚀 Release Checklist

### 1. 📄 Edit `CHANGELOG.md`

Add a new section at the top:

```markdown
## [1.0.9] - YYYY-MM-DD

### Added

- ...

### Fixed

- ...
```

Use the correct version number and current date.

---

### 2. 📂 Stage, commit, and push your changes

```bash
git add CHANGELOG.md README.md scripts/README.md release.sh
git commit -m "📆 release: prepare v1.0.9"
git push origin development
```

---

### 3. 🛠 Run the release script

```bash
./scripts/release.sh
```

- Select the appropriate version bump (patch/minor/major)
- The script will:
  - Lint, test, and build
  - Tag the release
  - Push to GitHub
  - Trigger GitHub Actions to publish a GitHub Release using the `CHANGELOG.md` entry

---

### 4. ✅ Verify the GitHub Release

Visit:  
💎 `https://github.com/<your-repo>/releases`  
Ensure that:

- The version appears (e.g. `v1.0.9`)
- The notes match the new changelog section

---

### 5. ↺ Create a Pull Request (PR)

Merge `development` → `master`

- Title: `Release v1.0.9`
- Description: Copy the changelog section
- Review and merge the PR

---

### 6. 🗒 Sync development with master

After the PR is merged, run the sync helper script:

```bash
./scripts/sync-development.sh
```

This ensures `development` includes the final release commit made by GitHub when merging the PR.

---

## 📝 Notes

- Do not commit directly to `master`
- Do not create GitHub Releases manually — they're generated automatically
- Only run `release.sh` from `development` or a working branch, **never `main` or `master`**
