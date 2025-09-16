# Deployment Guide

This guide covers deploying the MCP Directory to Vercel and connecting it to GitHub.

## Prerequisites

- GitHub account
- Vercel account
- Clerk account (for authentication)
- Node.js 18+ installed locally

## 1. GitHub Repository Setup

### Create Repository
1. Go to [GitHub](https://github.com) and create a new repository
2. Name it `mcp-directory` or your preferred name
3. Make it public or private as needed
4. Don't initialize with README (we already have one)

### Connect Local Project to GitHub
```bash
cd mcpdir
git init
git add .
git commit -m "Initial commit: MCP Directory with Next.js 14, Clerk auth, and premium UI"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git push -u origin main
```

## 2. Environment Variables Setup

### Required Environment Variables
Create these in your Vercel dashboard:

```env
# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
CLERK_SECRET_KEY=sk_test_...
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/dashboard

# Next.js
NEXTAUTH_URL=https://your-domain.vercel.app
NEXTAUTH_SECRET=your-secret-key-here
```

### Get Clerk Keys
1. Go to [Clerk Dashboard](https://dashboard.clerk.com/)
2. Create a new application or use existing
3. Copy the publishable key and secret key
4. Configure sign-in/sign-up URLs in Clerk dashboard

## 3. Vercel Deployment

### Method 1: Vercel CLI (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy from project directory
cd mcpdir
vercel

# Follow prompts:
# - Link to existing project? No
# - Project name: mcp-directory
# - Directory: ./
# - Override settings? No
```

### Method 2: Vercel Dashboard
1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click "New Project"
3. Import your GitHub repository
4. Configure:
   - Framework Preset: Next.js
   - Root Directory: `./mcpdir` (if repo contains the mcpdir folder)
   - Build Command: `npm run build`
   - Output Directory: `.next`
   - Install Command: `npm install`

### Method 3: GitHub Integration
1. Connect Vercel to your GitHub account
2. Import the repository
3. Vercel will auto-deploy on every push to main branch

## 4. Post-Deployment Configuration

### Domain Setup
1. In Vercel dashboard, go to your project
2. Go to Settings > Domains
3. Add your custom domain or use the provided vercel.app domain

### Environment Variables in Vercel
1. Go to Settings > Environment Variables
2. Add all required variables from the list above
3. Redeploy after adding variables

### Clerk Production Setup
1. In Clerk dashboard, add your production domain
2. Update allowed origins and redirect URLs
3. Update environment variables with production keys if needed

## 5. Monitoring and Maintenance

### Vercel Analytics
- Enable Web Analytics in Vercel dashboard
- Monitor Core Web Vitals and performance

### Error Monitoring
- Check Vercel Functions logs for errors
- Set up error tracking (Sentry, LogRocket, etc.)

### Performance Optimization
- Enable Vercel Speed Insights
- Monitor build times and bundle size
- Optimize images and assets

## 6. Continuous Deployment

### Automatic Deployments
- Production: Deploys from `main` branch
- Preview: Deploys from feature branches
- Development: Local development server

### Branch Protection
1. Go to GitHub repository settings
2. Add branch protection rules for `main`
3. Require pull request reviews
4. Require status checks to pass

## 7. Troubleshooting

### Common Issues

#### Build Failures
```bash
# Check build locally
npm run build

# Common fixes:
# - Fix TypeScript errors
# - Resolve import issues
# - Check environment variables
```

#### Authentication Issues
- Verify Clerk keys are correct
- Check allowed domains in Clerk dashboard
- Ensure redirect URLs match

#### Performance Issues
- Enable Next.js Image Optimization
- Use dynamic imports for large components
- Implement proper caching strategies

### Debug Commands
```bash
# Check deployment logs
vercel logs

# Local development with production env
vercel dev

# Pull environment variables
vercel env pull .env.local
```

## 8. Security Checklist

- [ ] Environment variables are secure
- [ ] No sensitive data in repository
- [ ] HTTPS enabled (automatic with Vercel)
- [ ] Clerk authentication properly configured
- [ ] API routes are protected
- [ ] Content Security Policy configured
- [ ] Rate limiting implemented

## 9. Backup and Recovery

### Database Backup (when implemented)
- Set up automated backups
- Test restore procedures
- Document recovery steps

### Code Backup
- GitHub serves as primary backup
- Consider additional mirrors for critical projects
- Tag releases for easy rollback

## 10. Scaling Considerations

### Vercel Limits
- Function execution time: 10s (Hobby), 60s (Pro)
- Function size: 50MB
- Bandwidth: 100GB (Hobby), 1TB (Pro)

### Performance Optimization
- Implement ISR (Incremental Static Regeneration)
- Use Edge Functions for global performance
- Optimize bundle size and loading

---

## Quick Deploy Checklist

- [ ] Repository created and code pushed to GitHub
- [ ] Vercel project created and connected to GitHub
- [ ] Environment variables configured in Vercel
- [ ] Clerk authentication set up with production keys
- [ ] Custom domain configured (optional)
- [ ] SSL certificate active (automatic)
- [ ] Analytics and monitoring enabled
- [ ] Error tracking configured
- [ ] Performance monitoring active

## Support

For deployment issues:
- Check Vercel documentation
- Review Clerk setup guides
- Check GitHub Actions (if used)
- Monitor Vercel function logs