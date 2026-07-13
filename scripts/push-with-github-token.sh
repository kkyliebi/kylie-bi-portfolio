#!/usr/bin/env bash
# Push to GitHub using GITHUB_TOKEN (Cursor Cloud Agent / Linux CI).
# Usage:
#   export GITHUB_TOKEN="ghp_..."
#   bash scripts/push-with-github-token.sh

set -euo pipefail

if [[ -z "${GITHUB_TOKEN:-}" ]]; then
  cat <<'EOF' >&2
GITHUB_TOKEN is not set.

Create a GitHub Personal Access Token with 'repo' scope, then run:
  export GITHUB_TOKEN='ghp_your_token_here'
  bash scripts/push-with-github-token.sh

In Cursor Cloud Agent, add GITHUB_TOKEN as a Runtime Secret in cursor.com settings.
EOF
  exit 1
fi

bash "$(dirname "$0")/setup-git-remote.sh"

branch="$(git branch --show-current)"
echo "Pushing branch '${branch}' to origin..."
git -c "http.extraHeader=Authorization: Basic $(printf 'x-access-token:%s' "$GITHUB_TOKEN" | base64 | tr -d '\n')" push -u origin HEAD
