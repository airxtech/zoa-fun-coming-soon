# ZOA.fun Deployment Guide

## Deployment Platforms

### Vercel (Recommended)

#### Setup

1. Connect GitHub repository to Vercel
2. Configure environment variables
3. Deploy automatically on push to main

#### Environment Variables

```
NEXT_PUBLIC_API_URL=https://api.zoa.fun
NEXT_PUBLIC_WS_URL=wss://api.zoa.fun
```

#### Deployment Command

Vercel automatically detects Next.js and builds accordingly.

### Netlify

#### Setup

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Deploy
netlify deploy
```

#### Configuration

Create `netlify.toml`:

```toml
[build]
  command = "npm run build"
  publish = ".next"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### Docker

#### Build

```bash
docker build -t zoa-fun:latest .
```

#### Run

```bash
docker run -p 3000:3000 \
  -e NEXT_PUBLIC_API_URL=https://api.zoa.fun \
  zoa-fun:latest
```

#### Docker Compose

```yaml
version: '3.8'

services:
  app:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NEXT_PUBLIC_API_URL=https://api.zoa.fun
    restart: unless-stopped
```

### AWS

#### Using Amplify

```bash
# Install AWS Amplify CLI
npm install -g @aws-amplify/cli

# Initialize
amplify init

# Publish
amplify publish
```

#### Using EC2

```bash
# Connect to instance
ssh -i key.pem ec2-user@your-instance

# Install Node.js
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
nvm install 18

# Clone and setup
git clone <repo>
cd zoa-fun-coming-soon
npm install
npm run build

# Run with PM2
npm install -g pm2
pm2 start npm --name "zoa-fun" -- start
pm2 save
pm2 startup
```

### Google Cloud Platform

#### Using Cloud Run

```bash
gcloud run deploy zoa-fun \
  --source . \
  --platform managed \
  --region us-central1
```

### Azure

#### Using App Service

```bash
# Login
az login

# Create resource group
az group create --name zoa-fun --location eastus

# Create app service
az appservice plan create --name zoa-fun-plan \
  --resource-group zoa-fun --sku B1 --is-linux

# Deploy
az webapp up --resource-group zoa-fun \
  --name zoa-fun --runtime "NODE|18"
```

## Pre-Deployment Checklist

- [ ] All tests passing
- [ ] No console errors
- [ ] Environment variables configured
- [ ] Build succeeds locally
- [ ] SEO metadata correct
- [ ] Performance optimized
- [ ] Security headers set
- [ ] Dependencies up to date
- [ ] Documentation updated

## Post-Deployment Checklist

- [ ] Site loads correctly
- [ ] All links work
- [ ] Email form submits
- [ ] Animations smooth
- [ ] Mobile responsive
- [ ] Analytics tracking
- [ ] Error logging active
- [ ] SSL certificate valid
- [ ] CDN configured

## Monitoring

### Uptime Monitoring

- Use Pingdom or UptimeRobot
- Monitor critical pages
- Set up alerts

### Performance Monitoring

- Enable Vercel Analytics
- Use Google PageSpeed Insights
- Monitor Core Web Vitals

### Error Tracking

- Set up Sentry for error logging
- Monitor console errors
- Track user interactions

## Rollback Procedure

### Vercel

1. Go to Deployments
2. Find previous successful deployment
3. Click "Promote to Production"

### Other Platforms

```bash
# Check git history
git log --oneline

# Revert to previous commit
git revert <commit-hash>
git push
```

## Performance Optimization

### Image Optimization

- Use Next.js Image component
- Compress before uploading
- Use WebP format

### Code Optimization

- Enable gzip compression
- Minify CSS and JS
- Tree shake unused code

### Caching

- Set proper cache headers
- Use CDN for static assets
- Cache API responses

## Scaling

### Horizontal Scaling

- Use load balancer
- Deploy multiple instances
- Use auto-scaling

### Vertical Scaling

- Increase server resources
- Upgrade to higher tier
- Optimize database queries

---

For support, contact: deploy@zoa.fun
