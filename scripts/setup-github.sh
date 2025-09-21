#!/bin/bash

# GitHub Setup Script for MCP Directory
# This script helps initialize the GitHub repository and push the initial code

echo "🚀 MCP Directory - GitHub Setup Script"
echo "======================================"

# Check if git is installed
if ! command -v git &> /dev/null; then
    echo "❌ Git is not installed. Please install Git first."
    exit 1
fi

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Please run this script from the mcpdir directory (where package.json is located)"
    exit 1
fi

# Get repository URL from user
echo ""
echo "📝 Please enter your GitHub repository URL:"
echo "   Example: https://github.com/username/mcpdirectory.git"
read -p "Repository URL: " repo_url

if [ -z "$repo_url" ]; then
    echo "❌ Repository URL is required"
    exit 1
fi

# Initialize git if not already initialized
if [ ! -d ".git" ]; then
    echo "🔧 Initializing Git repository..."
    git init
else
    echo "✅ Git repository already initialized"
fi

# Add all files
echo "📦 Adding files to Git..."
git add .

# Check if there are any changes to commit
if git diff --staged --quiet; then
    echo "ℹ️  No changes to commit"
else
    # Commit changes
    echo "💾 Committing changes..."
    git commit -m "Initial commit: MCP Directory with Next.js 14, Clerk auth, and premium UI

Features:
- Next.js 14 with App Router and TypeScript
- Clerk authentication integration
- Premium UI with Framer Motion animations
- Responsive design with Tailwind CSS
- AI MCP Creator interface
- Browse and package builder pages
- Comprehensive documentation
- SEO optimization and structured data
- Build fixes for production deployment"
fi

# Set main branch
echo "🌿 Setting main branch..."
git branch -M main

# Add remote origin
echo "🔗 Adding remote origin..."
git remote remove origin 2>/dev/null || true
git remote add origin "$repo_url"

# Push to GitHub
echo "🚀 Pushing to GitHub..."
if git push -u origin main; then
    echo ""
    echo "✅ Successfully pushed to GitHub!"
    echo ""
    echo "🎉 Next Steps:"
    echo "1. Visit your GitHub repository: ${repo_url%.git}"
    echo "2. Go to Vercel (https://vercel.com) and import your repository"
    echo "3. Configure environment variables in Vercel dashboard"
    echo "4. Deploy your application!"
    echo ""
    echo "📚 For detailed deployment instructions, see DEPLOYMENT.md"
else
    echo ""
    echo "❌ Failed to push to GitHub. Please check:"
    echo "1. Repository URL is correct"
    echo "2. You have write access to the repository"
    echo "3. Repository exists on GitHub"
    echo "4. You're authenticated with GitHub (git config --global user.name/email)"
fi