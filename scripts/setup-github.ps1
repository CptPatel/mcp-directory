# GitHub Setup Script for MCP Directory (PowerShell)
# This script helps initialize the GitHub repository and push the initial code

Write-Host "🚀 MCP Directory - GitHub Setup Script" -ForegroundColor Cyan
Write-Host "======================================" -ForegroundColor Cyan

# Check if git is installed
try {
    git --version | Out-Null
} catch {
    Write-Host "❌ Git is not installed. Please install Git first." -ForegroundColor Red
    exit 1
}

# Check if we're in the right directory
if (-not (Test-Path "package.json")) {
    Write-Host "❌ Please run this script from the mcpdir directory (where package.json is located)" -ForegroundColor Red
    exit 1
}

# Get repository URL from user
Write-Host ""
Write-Host "📝 Please enter your GitHub repository URL:" -ForegroundColor Yellow
Write-Host "   Example: https://github.com/username/mcp-directory.git" -ForegroundColor Gray
$repo_url = Read-Host "Repository URL"

if ([string]::IsNullOrWhiteSpace($repo_url)) {
    Write-Host "❌ Repository URL is required" -ForegroundColor Red
    exit 1
}

# Initialize git if not already initialized
if (-not (Test-Path ".git")) {
    Write-Host "🔧 Initializing Git repository..." -ForegroundColor Yellow
    git init
} else {
    Write-Host "✅ Git repository already initialized" -ForegroundColor Green
}

# Add all files
Write-Host "📦 Adding files to Git..." -ForegroundColor Yellow
git add .

# Check if there are any changes to commit
$staged_changes = git diff --staged --name-only
if ($staged_changes) {
    # Commit changes
    Write-Host "💾 Committing changes..." -ForegroundColor Yellow
    $commit_message = @"
Initial commit: MCP Directory with Next.js 14, Clerk auth, and premium UI

Features:
- Next.js 14 with App Router and TypeScript
- Clerk authentication integration
- Premium UI with Framer Motion animations
- Responsive design with Tailwind CSS
- AI MCP Creator interface
- Browse and package builder pages
- Comprehensive documentation
- SEO optimization and structured data
- Build fixes for production deployment
"@
    git commit -m $commit_message
} else {
    Write-Host "ℹ️  No changes to commit" -ForegroundColor Blue
}

# Set main branch
Write-Host "🌿 Setting main branch..." -ForegroundColor Yellow
git branch -M main

# Add remote origin
Write-Host "🔗 Adding remote origin..." -ForegroundColor Yellow
git remote remove origin 2>$null
git remote add origin $repo_url

# Push to GitHub
Write-Host "🚀 Pushing to GitHub..." -ForegroundColor Yellow
try {
    git push -u origin main
    Write-Host ""
    Write-Host "✅ Successfully pushed to GitHub!" -ForegroundColor Green
    Write-Host ""
    Write-Host "🎉 Next Steps:" -ForegroundColor Cyan
    Write-Host "1. Visit your GitHub repository: $($repo_url -replace '\.git$', '')" -ForegroundColor White
    Write-Host "2. Go to Vercel (https://vercel.com) and import your repository" -ForegroundColor White
    Write-Host "3. Configure environment variables in Vercel dashboard" -ForegroundColor White
    Write-Host "4. Deploy your application!" -ForegroundColor White
    Write-Host ""
    Write-Host "📚 For detailed deployment instructions, see DEPLOYMENT.md" -ForegroundColor Gray
} catch {
    Write-Host ""
    Write-Host "❌ Failed to push to GitHub. Please check:" -ForegroundColor Red
    Write-Host "1. Repository URL is correct" -ForegroundColor White
    Write-Host "2. You have write access to the repository" -ForegroundColor White
    Write-Host "3. Repository exists on GitHub" -ForegroundColor White
    Write-Host "4. You're authenticated with GitHub (git config --global user.name/email)" -ForegroundColor White
}