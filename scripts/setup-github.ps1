# GitHub Setup Script for MCP Directory (PowerShell)
Write-Host "MCP Directory - GitHub Setup Script" -ForegroundColor Cyan
Write-Host "====================================" -ForegroundColor Cyan

# Check if git is installed
try {
    git --version | Out-Null
    Write-Host "Git is installed" -ForegroundColor Green
} catch {
    Write-Host "Git is not installed. Please install Git first." -ForegroundColor Red
    exit 1
}

# Check if we're in the right directory
if (-not (Test-Path "package.json")) {
    Write-Host "Please run this script from the mcpdir directory" -ForegroundColor Red
    exit 1
}

# Get repository URL from user
Write-Host ""
Write-Host "Please enter your GitHub repository URL:" -ForegroundColor Yellow
Write-Host "Example: https://github.com/username/mcp-directory.git" -ForegroundColor Gray
$repo_url = Read-Host "Repository URL"

if ([string]::IsNullOrWhiteSpace($repo_url)) {
    Write-Host "Repository URL is required" -ForegroundColor Red
    exit 1
}

# Initialize git if not already initialized
if (-not (Test-Path ".git")) {
    Write-Host "Initializing Git repository..." -ForegroundColor Yellow
    git init
} else {
    Write-Host "Git repository already initialized" -ForegroundColor Green
}

# Add all files
Write-Host "Adding files to Git..." -ForegroundColor Yellow
git add .

# Check if there are any changes to commit
$staged_changes = git diff --staged --name-only
if ($staged_changes) {
    Write-Host "Committing changes..." -ForegroundColor Yellow
    git commit -m "Initial commit: MCP Directory with Next.js 14, Clerk auth, and premium UI"
} else {
    Write-Host "No changes to commit" -ForegroundColor Blue
}

# Set main branch
Write-Host "Setting main branch..." -ForegroundColor Yellow
git branch -M main

# Add remote origin
Write-Host "Adding remote origin..." -ForegroundColor Yellow
try {
    git remote remove origin 2>$null
} catch {
    # Remote doesn't exist, that's fine
}
git remote add origin $repo_url

# Push to GitHub
Write-Host "Pushing to GitHub..." -ForegroundColor Yellow
try {
    git push -u origin main
    Write-Host ""
    Write-Host "Successfully pushed to GitHub!" -ForegroundColor Green
    Write-Host ""
    Write-Host "Next Steps:" -ForegroundColor Cyan
    $clean_url = $repo_url -replace '\.git$', ''
    Write-Host "1. Visit your GitHub repository: $clean_url" -ForegroundColor White
    Write-Host "2. Go to Vercel (https://vercel.com) and import your repository" -ForegroundColor White
    Write-Host "3. Configure environment variables in Vercel dashboard" -ForegroundColor White
    Write-Host "4. Deploy your application!" -ForegroundColor White
    Write-Host ""
    Write-Host "For detailed deployment instructions, see DEPLOYMENT.md" -ForegroundColor Gray
} catch {
    Write-Host ""
    Write-Host "Failed to push to GitHub. Please check:" -ForegroundColor Red
    Write-Host "1. Repository URL is correct" -ForegroundColor White
    Write-Host "2. You have write access to the repository" -ForegroundColor White
    Write-Host "3. Repository exists on GitHub" -ForegroundColor White
    Write-Host "4. You're authenticated with GitHub" -ForegroundColor White
    Write-Host ""
    Write-Host "You can also push manually:" -ForegroundColor Yellow
    Write-Host "git remote add origin $repo_url" -ForegroundColor Gray
    Write-Host "git push -u origin main" -ForegroundColor Gray
}