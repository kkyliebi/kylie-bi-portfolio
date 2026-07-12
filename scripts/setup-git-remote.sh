#!/usr/bin/env bash
# Ensures origin remote exists for kylie-bi-portfolio.

set -euo pipefail

REMOTE_URL="https://github.com/kkyliebi/kylie-bi-portfolio.git"

if ! git rev-parse --is-inside-work-tree >/dev/null 2>&1; then
  echo "Not inside a git repository. Run this from the repo root." >&2
  exit 1
fi

if git remote | grep -qx origin; then
  current_url="$(git remote get-url origin)"
  if [[ "$current_url" != "$REMOTE_URL" ]]; then
    echo "Updating origin URL: $current_url -> $REMOTE_URL"
    git remote set-url origin "$REMOTE_URL"
  else
    echo "origin already configured: $REMOTE_URL"
  fi
else
  echo "Adding origin: $REMOTE_URL"
  git remote add origin "$REMOTE_URL"
fi

git remote -v
branch="$(git branch --show-current)"
echo
echo "Current branch: ${branch}"
echo "Push with: git push -u origin ${branch}"
