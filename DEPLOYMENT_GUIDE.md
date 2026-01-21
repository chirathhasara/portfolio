# Deploy to GitHub Pages - Setup Guide

This guide will help you deploy your portfolio to GitHub Pages using GitHub Actions.

## 📋 Prerequisites

- GitHub account
- Repository created on GitHub
- Code pushed to GitHub

---

## 🚀 Deployment Steps

### Step 1: Update Vite Configuration

✅ **Already done!** The `vite.config.js` has been updated with the base path.

**Important:** Make sure the `base` value in `vite.config.js` matches your repository name:

```javascript
base: '/portfolio/', // Change 'portfolio' to YOUR repository name
```

**Examples:**
- Repository: `my-portfolio` → `base: '/my-portfolio/'`
- Repository: `portfolio` → `base: '/portfolio/'`
- Repository: `website` → `base: '/website/'`

---

### Step 2: Push Code to GitHub

If you haven't already pushed your code:

```bash
git add .
git commit -m "Add GitHub Actions deployment"
git push origin main
```

**Note:** If your default branch is `master` instead of `main`, update line 5 in `.github/workflows/deploy.yml`:
```yaml
branches:
  - master  # Change from 'main' to 'master'
```

---

### Step 3: Configure GitHub Pages Settings

1. Go to your repository on GitHub
2. Click **Settings** (top menu)
3. Scroll down and click **Pages** (left sidebar)
4. Under **"Build and deployment"**, configure:
   - **Source**: Select **GitHub Actions** (not "Deploy from a branch")
5. That's it! No need to select a branch when using GitHub Actions

**Screenshot reference:**
```
Settings → Pages → Source: GitHub Actions
```

---

### Step 4: Enable Workflow Permissions (Important!)

1. Still in your repository, go to **Settings**
2. Click **Actions** → **General** (left sidebar)
3. Scroll to **"Workflow permissions"**
4. Select **"Read and write permissions"**
5. Check ✅ **"Allow GitHub Actions to create and approve pull requests"**
6. Click **Save**

---

### Step 5: Trigger Deployment

The workflow will automatically run when you push to the `main` branch.

**To trigger manually:**
1. Go to **Actions** tab in your repository
2. Click **"Deploy to GitHub Pages"** workflow
3. Click **"Run workflow"** button
4. Select branch: `main`
5. Click **"Run workflow"**

---

### Step 6: Wait for Deployment

1. Go to **Actions** tab
2. You'll see your workflow running (orange circle 🟠)
3. Wait 2-5 minutes for it to complete (green checkmark ✅)
4. If it fails (red X ❌), click on it to see error details

---

### Step 7: Access Your Site

Once deployed, your site will be available at:

```
https://YOUR_USERNAME.github.io/YOUR_REPOSITORY_NAME/
```

**Example:**
- Username: `chirathhasara`
- Repository: `portfolio`
- URL: `https://chirathhasara.github.io/portfolio/`

---

## 🔧 Troubleshooting

### Problem: Workflow fails with "Permission denied"

**Solution:** Enable write permissions (Step 4 above)

---

### Problem: 404 error or blank page after deployment

**Solution:** Check that `base` in `vite.config.js` matches your repository name exactly

```javascript
// If repository is "my-portfolio"
base: '/my-portfolio/'  // ✅ Correct

// Common mistakes:
base: '/portfolio/'     // ❌ Wrong if repo is named differently
base: 'my-portfolio'    // ❌ Missing slashes
base: '/my-portfolio'   // ❌ Missing trailing slash
```

---

### Problem: CSS/JS files not loading (404 errors in console)

**Solution:** Same as above - incorrect `base` path in `vite.config.js`

---

### Problem: Workflow runs but nothing deploys

**Solution:** 
1. Make sure Source is set to "GitHub Actions" (not branch)
2. Check workflow permissions are set to "Read and write"

---

### Problem: Assets (images) not showing

**Solution:** 
1. Make sure images are in the `src/assets` folder
2. Import images properly in components:
```javascript
import myImage from '../assets/image.png'
<img src={myImage} alt="description" />
```

---

## 🎨 Custom Domain (Optional)

To use your own domain like `yourname.com`:

1. In your repository, go to **Settings** → **Pages**
2. Under **"Custom domain"**, enter your domain
3. Click **Save**
4. In your domain registrar (GoDaddy, Namecheap, etc.), add DNS records:
   - **Type:** A Record
   - **Name:** @ 
   - **Value:** 
     - `185.199.108.153`
     - `185.199.109.153`
     - `185.199.110.153`
     - `185.199.111.153`
   
   OR for subdomain (www):
   - **Type:** CNAME
   - **Name:** www
   - **Value:** `YOUR_USERNAME.github.io`

5. Wait 24-48 hours for DNS to propagate

---

## 📝 Making Updates

After initial deployment, any push to `main` branch will automatically redeploy:

```bash
# Make your changes
git add .
git commit -m "Update portfolio"
git push origin main
```

The workflow will run automatically and update your live site in 2-5 minutes!

---

## ✅ Checklist

Before going live, verify:

- [ ] `vite.config.js` has correct `base` path matching repository name
- [ ] GitHub Pages source is set to "GitHub Actions"
- [ ] Workflow permissions are "Read and write"
- [ ] Google Sheets script URL is added in `Contact.jsx` (if using contact form)
- [ ] All links work correctly
- [ ] Images load properly
- [ ] Site looks good on mobile and desktop

---

## 🎉 You're Done!

Your portfolio is now live on GitHub Pages! Share your link:
`https://YOUR_USERNAME.github.io/YOUR_REPOSITORY_NAME/`

---

## 📞 Need Help?

Check the Actions tab for error logs or review this guide again. Most issues are related to:
1. Incorrect `base` path in Vite config
2. Missing workflow permissions
3. Wrong source selected in Pages settings
