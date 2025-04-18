# scripts/

This folder contains internal tools and scripts used to manage the repository.

## Scripts

### `release.sh`

A utility script to automate:

- Version tagging (using semantic versioning: `vX.Y.Z`)
- Creating Git tags and pushing them
- Optionally opening the GitHub Releases page for publishing notes

## Usage

```bash
./scripts/release.sh 1.0.1 "Your changelog message here"
```

> Ensure the script is executable: `chmod +x scripts/release.sh`

