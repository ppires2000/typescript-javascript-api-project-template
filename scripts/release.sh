#!/bin/bash

set -e

# ─────────────────────────────────────────────────────────────
# 🛡️  Step 1: Check for uncommitted changes
# ─────────────────────────────────────────────────────────────
if [[ -n $(git status --porcelain) ]]; then
  echo "❌ Uncommitted changes detected. Please commit or stash them before releasing."
  exit 1
fi

# ─────────────────────────────────────────────────────────────
# 🚫 Step 2: Prevent release from main/master branches
# ─────────────────────────────────────────────────────────────
CURRENT_BRANCH=$(git rev-parse --abbrev-ref HEAD)

if [[ "$CURRENT_BRANCH" == "main" || "$CURRENT_BRANCH" == "master" ]]; then
  echo "❌ You are on '$CURRENT_BRANCH'. Please switch to a feature or development branch."
  exit 1
fi

# ─────────────────────────────────────────────────────────────
# 🔢 Step 3: Interactive version bumping
# ─────────────────────────────────────────────────────────────
CURRENT_VERSION=$(jq -r .version package.json)
IFS='.' read -r MAJOR MINOR PATCH <<< "$CURRENT_VERSION"

echo "🔢 Current version: $CURRENT_VERSION"
echo "Select version bump:"
echo "1) Patch → ${MAJOR}.${MINOR}.$((PATCH + 1))"
echo "2) Minor → ${MAJOR}.$((MINOR + 1)).0"
echo "3) Major → $((MAJOR + 1)).0.0"
echo "4) Custom"

read -rp "👉 Your choice (1/2/3/4): " bump_choice

case $bump_choice in
  1) VERSION="${MAJOR}.${MINOR}.$((PATCH + 1))" ;;
  2) VERSION="${MAJOR}.$((MINOR + 1)).0" ;;
  3) VERSION="$((MAJOR + 1)).0.0" ;;
  4)
    read -rp "Enter custom version (x.y.z): " VERSION
    ;;
  *)
    echo "❌ Invalid choice. Aborting."
    exit 1
    ;;
esac

echo "📦 New version: $VERSION"

# ─────────────────────────────────────────────────────────────
# 🧼 Step 4: Lint, test, and build
# ─────────────────────────────────────────────────────────────
echo "🧪 Running prechecks..."
npm run lint
npm test
npm run build

# ─────────────────────────────────────────────────────────────
# 📝 Step 5: Update version in package files
# ─────────────────────────────────────────────────────────────
npm version "$VERSION" --no-git-tag-version
git add package.json package-lock.json

# ─────────────────────────────────────────────────────────────
# 🗒️ Step 6: Prompt for changelog entry
# ─────────────────────────────────────────────────────────────
# 🗒️ Step 6: Stage updated CHANGELOG.md (manually edited before running this script)
git add CHANGELOG.md

# ─────────────────────────────────────────────────────────────
# 🔖 Step 7: Commit, tag and push
# ─────────────────────────────────────────────────────────────
git commit -m "🔖 Release v$VERSION"
git tag "v$VERSION"

git push origin "$CURRENT_BRANCH"
git push origin "v$VERSION"

echo "✅ Release v$VERSION completed and pushed!"

echo ""
echo "📌 REMINDER: After merging the release PR into master, run:"
echo "   ./scripts/sync-development.sh"
echo ""
echo "📄 Tip: See RELEASING.md for the full release and sync procedure."
