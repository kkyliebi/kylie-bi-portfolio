# Ensures origin remote exists for kylie-bi-portfolio.
# Use when git remote -v is empty or push fails with "origin does not appear to be a git repository".

$ErrorActionPreference = "Stop"
$RemoteUrl = "https://github.com/kkyliebi/kylie-bi-portfolio.git"

function Test-GitRepo {
    git rev-parse --is-inside-work-tree 2>$null | Out-Null
    return $LASTEXITCODE -eq 0
}

if (-not (Test-GitRepo)) {
    Write-Error "Not inside a git repository. Run this from the repo root."
}

$remotes = git remote
if ($remotes -contains "origin") {
    $currentUrl = git remote get-url origin
    if ($currentUrl -ne $RemoteUrl) {
        Write-Host "Updating origin URL: $currentUrl -> $RemoteUrl"
        git remote set-url origin $RemoteUrl
    } else {
        Write-Host "origin already configured: $RemoteUrl"
    }
} else {
    Write-Host "Adding origin: $RemoteUrl"
    git remote add origin $RemoteUrl
}

git remote -v
$branch = git branch --show-current
Write-Host ""
Write-Host "Current branch: $branch"
Write-Host "Push with: git push -u origin $branch"
