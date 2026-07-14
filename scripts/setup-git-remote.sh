#!/bin/bash
set -e

REMOTE_URL="https://github.com/kkyliebi/kylie-bi-portfolio.git"

if ! git rev-parse --is-inside-work-tree >/dev/null 2>&1; then
    echo "Not inside a git repository. Run this from the repo root."
    exit 1
fi

if git remote | grep -q "^origin$"; then
    CURRENT_URL=$(git remote get-url origin)
    if [ "$CURRENT_URL" != "$REMOTE_URL" ]; then
        echo "Updating origin URL: $CURRENT_URL -> $REMOTE_URL"
        git remote set-url origin "$REMOTE_URL"
    else
        echo "origin already configured: $REMOTE_URL"
    fi
else
    echo "Adding origin: $REMOTE_URL"
    git remote add origin "$REMOTE_URL"
fi

git remote -v
BRANCH=$(git branch --show-current)
echo ""
echo "Current branch: $BRANCH"
echo "Push with: git push -u origin $BRANCH"
