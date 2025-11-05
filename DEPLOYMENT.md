# 🚀 Deployment Guide - AI Fitness Coach

This guide will help you deploy your AI Fitness Coach application to various platforms.

## 📋 Pre-Deployment Checklist

- [ ] Environment variables configured
- [ ] Google Gemini API key obtained and tested
- [ ] Application tested locally
- [ ] Build process verified (`npm run build`)
- [ ] All dependencies installed

## 🔑 Required Environment Variables

Create these environment variables in your deployment platform:

```env
GOOGLE_GEMINI_API_KEY=your_actual_gemini_api_key_here
NANO_BANANA_API_KEY=your_nano_banana_api_key_here  # Optional
ELEVENLABS_API_KEY=your_elevenlabs_api_key_here    # Optional
NEXT_PUBLIC_APP_URL=https://your-domain.com
```

## 🌐 Deployment Platforms

### 1. Vercel (Recommended)

**Why Vercel?**
- Optimized for Next.js
- Automatic deployments
- Global CDN
- Serverless functions
- Free tier available

**Steps:**
1. Push your code to GitHub
2. Connect GitHub to Vercel
3. Import your repository
4. Add environment variables in Vercel dashboard
5. Deploy automatically

**Vercel Configuration:**
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": ".next",
  "installCommand": "npm install",
  "framework": "nextjs"
}
```

### 2. Netlify

**Steps:**
1. Push code to GitHub
2. Connect repository to Netlify
3. Set build command: `npm run build`
4. Set publish directory: `.next`
5. Add environment variables
6. Deploy

**Netlify Configuration (netlify.toml):**
```toml
[build]
  command = "npm run build"
  publish = ".next"

[build.environment]
  NODE_VERSION = "18"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### 3. Railway

**Steps:**
1. Connect GitHub repository
2. Add environment variables
3. Deploy automatically
4. Custom domain setup (optional)

### 4. DigitalOcean App Platform

**Steps:**
1. Create new app from GitHub
2. Configure build settings
3. Add environment variables
4. Deploy

## 🔧 Build Optimization

### Performance Optimizations

1. **Image Optimization**
   ```javascript
   // next.config.js
   module.exports = {
     images: {
       domains: ['via.placeholder.com'],
       formats: ['image/webp', 'image/avif'],
     },
   }
   ```

2. **Bundle Analysis**
   ```bash
   npm install --save-dev @next/bundle-analyzer
   ```

3. **Compression**
   ```javascript
   // next.config.js
   module.exports = {
     compress: true,
   }
   ```

### Build Commands

```bash
# Development
npm run dev

# Production build
npm run build

# Start production server
npm run start

# Lint code
npm run lint

# Type check
npx tsc --noEmit
```

## 🔒 Security Considerations

### Environment Variables
- Never commit `.env.local` to version control
- Use different API keys for development and production
- Rotate API keys regularly

### API Security
- Implement rate limiting
- Add request validation
- Monitor API usage

### Content Security Policy
```javascript
// next.config.js
module.exports = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; script-src 'self' 'unsafe-eval'; style-src 'self' 'unsafe-inline';"
          }
        ]
      }
    ]
  }
}
```

## 📊 Monitoring & Analytics

### Error Tracking
Consider integrating:
- Sentry for error tracking
- LogRocket for session replay
- Google Analytics for user analytics

### Performance Monitoring
- Vercel Analytics (if using Vercel)
- Google PageSpeed Insights
- Web Vitals monitoring

## 🔄 CI/CD Pipeline

### GitHub Actions Example
```yaml
name: Deploy to Vercel
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Setup Node.js
        uses: actions/setup-node@v2
        with:
          node-version: '18'
      - name: Install dependencies
        run: npm install
      - name: Run tests
        run: npm run test
      - name: Build application
        run: npm run build
      - name: Deploy to Vercel
        uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.ORG_ID }}
          vercel-project-id: ${{ secrets.PROJECT_ID }}
```

## 🌍 Custom Domain Setup

### Vercel
1. Go to project settings
2. Add custom domain
3. Configure DNS records
4. Enable HTTPS (automatic)

### Netlify
1. Go to domain management
2. Add custom domain
3. Configure DNS
4. Enable HTTPS

## 📱 Mobile App Deployment (PWA)

The application is PWA-ready. To enhance mobile experience:

1. **Add PWA Configuration**
   ```javascript
   // next.config.js
   const withPWA = require('next-pwa')({
     dest: 'public'
   })
   
   module.exports = withPWA({
     // your config
   })
   ```

2. **Create Manifest**
   ```json
   // public/manifest.json
   {
     "name": "AI Fitness Coach",
     "short_name": "FitnessAI",
     "description": "Personalized AI-powered fitness plans",
     "start_url": "/",
     "display": "standalone",
     "background_color": "#ffffff",
     "theme_color": "#000000",
     "icons": [
       {
         "src": "/icon-192x192.png",
         "sizes": "192x192",
         "type": "image/png"
       }
     ]
   }
   ```

## 🚨 Troubleshooting

### Common Issues

1. **Build Failures**
   - Check Node.js version (use 18+)
   - Clear npm cache: `npm cache clean --force`
   - Delete node_modules and reinstall

2. **API Issues**
   - Verify environment variables
   - Check API key permissions
   - Monitor rate limits

3. **Performance Issues**
   - Enable compression
   - Optimize images
   - Use CDN for static assets

### Debug Commands
```bash
# Check build locally
npm run build && npm run start

# Analyze bundle size
npm run analyze

# Check for unused dependencies
npx depcheck

# Security audit
npm audit
```

## 📞 Support

If you encounter deployment issues:
1. Check the platform's documentation
2. Review build logs
3. Test locally first
4. Check environment variables
5. Contact platform support if needed

---

**Happy Deploying! 🎉**

Your AI Fitness Coach is ready to help users transform their fitness journey worldwide!
