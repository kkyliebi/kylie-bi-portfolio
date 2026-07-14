# Push to GitHub using GITHUB_TOKEN (for Cursor Agent / CI environments without credential manager).
# Usage:
#   GITHUB_TOKEN="ghp_..."
#   bash scripts/push-with-github-token.sh

set -e

if [ -z "$GITHUB_TOKEN" ]; then
    echo "GITHUB_TOKEN is not set."
    echo ""
    echo "Create a GitHub Personal Access Token with 'repo' scope, then run:"
    echo "  GITHUB_TOKEN='ghp_your_token_here' bash scripts/push-with-github-token.sh"
    echo ""
    echo "In Cursor Cloud Agent, add GITHUB_TOKEN as a secret/environment variable."
    exit 1
fi

SCRIPT_DIR=$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)
bash "$SCRIPT_DIR/setup-git-remote.sh"

BRANCH=$(git branch --show-current)
HEADER="Authorization: Basic $(echo -n "x-access-token:$GITHUB_TOKEN" | base64)"

echo "Pushing branch '$BRANCH' to origin..."
git -c "http.extraHeader=$HEADER" push -u origin HEAD
