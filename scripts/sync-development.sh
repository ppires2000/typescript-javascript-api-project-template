#!/bin/bash

set -e

echo "🔄 Syncing development with master..."

# Checkout development branch
git checkout development

# Ensure we have the latest from remote
git fetch origin

# Merge latest master into development
git merge origin/master

# Push updated development branch
git push origin development

echo "✅ 'development' branch is now synced with 'master'."
