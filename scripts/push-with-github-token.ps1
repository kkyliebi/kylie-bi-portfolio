# Push to GitHub using GITHUB_TOKEN (for Cursor Agent / CI environments without credential manager).
# Usage:
#   $env:GITHUB_TOKEN = "ghp_..."
#   powershell -ExecutionPolicy Bypass -File scripts/push-with-github-token.ps1

$ErrorActionPreference = "Stop"

if (-not $env:GITHUB_TOKEN) {
    Write-Error @"
GITHUB_TOKEN is not set.

Create a GitHub Personal Access Token with 'repo' scope, then run:
  `$env:GITHUB_TOKEN = 'ghp_your_token_here'
  powershell -ExecutionPolicy Bypass -File scripts/push-with-github-token.ps1

In Cursor Cloud Agent, add GITHUB_TOKEN as a secret/environment variable.
"@
}

& "$PSScriptRoot/setup-git-remote.ps1"

$branch = git branch --show-current
$header = "Authorization: Basic " + [Convert]::ToBase64String(
    [Text.Encoding]::ASCII.GetBytes("x-access-token:$($env:GITHUB_TOKEN)")
)

Write-Host "Pushing branch '$branch' to origin..."
git -c "http.extraHeader=$header" push -u origin HEAD
