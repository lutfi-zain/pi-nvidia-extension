# Publishing Guide for pi-nvidia-extension

This guide walks you through publishing your package to npm and getting it listed on pi.dev/packages.

## Prerequisites

- Node.js 18+ installed
- npm account (create at https://www.npmjs.com/signup)
- Git repository properly configured

## Step 1: Prepare Your Package

### 1.1 Check package.json

Ensure your `package.json` has all required fields:

```json
{
  "name": "pi-nvidia-extension",
  "version": "0.0.1",
  "description": "NVIDIA NIM provider for pi-coding-agent with 10 high-performance models and live API key validation",
  "main": "index.ts",
  "author": "Lutfi",
  "license": "MIT",
  "keywords": ["pi-package", "nvidia", "nim", "llm", "ai", "gpu"],
  "pi": {
    "extensions": ["./index.ts"]
  },
  "repository": {
    "type": "git",
    "url": "https://github.com/lutfi-zain/pi-nvidia-extension.git"
  },
  "homepage": "https://github.com/lutfi-zain/pi-nvidia-extension#readme",
  "bugs": {
    "url": "https://github.com/lutfi-zain/pi-nvidia-extension/issues"
  }
}
```

### 1.2 Verify Files

Check that all necessary files are present:

```bash
cd pi-nvidia-extension
ls -la
```

Required files:
- ✅ `package.json` - Package metadata
- ✅ `index.ts` - Main extension code
- ✅ `README.md` - Documentation
- ✅ `LICENSE` - License file
- ✅ `.npmignore` - Files to exclude from npm

### 1.3 Check Package Name

Verify the package name is available on npm:

```bash
npm search pi-nvidia-extension
```

If the name is taken, you'll need to choose a different name or use a scoped package like `@lutfi/pi-nvidia-extension`.

## Step 2: Test Package Locally

### 2.1 Dry Run Publish

Test what will be published without actually publishing:

```bash
npm pack --dry-run
```

This shows you exactly what files will be included in the package.

### 2.2 Create Test Package

Create a tarball to test locally:

```bash
npm pack
```

This creates `pi-nvidia-extension-0.0.1.tgz` in the current directory.

### 2.3 Test Installation

Test installing from the tarball:

```bash
# In a different directory
cd /tmp
npm install /path/to/pi-nvidia-extension/pi-nvidia-extension-0.0.1.tgz
```

## Step 3: Login to npm

### 3.1 Create npm Account (if needed)

Go to https://www.npmjs.com/signup and create an account.

### 3.2 Login

```bash
npm login
```

You'll be prompted for:
- Username
- Password
- Email (for two-factor authentication if enabled)

### 3.3 Verify Login

```bash
npm whoami
```

This should display your npm username.

## Step 4: Configure npm (Optional)

### 4.1 Set Registry (if using private registry)

```bash
npm config set registry https://registry.npmjs.org/
```

### 4.2 Configure Two-Factor Authentication (Recommended)

```bash
npm profile enable-2fa
```

## Step 5: Publish to npm

### 5.1 Final Check

Before publishing, do a final check:

```bash
# Check package.json
cat package.json

# Verify files
ls -la

# Dry run
npm pack --dry-run
```

### 5.2 Publish

```bash
npm publish
```

You should see output like:

```
npm notice 
npm notice 📦  pi-nvidia-extension@0.0.1
npm notice === Tarball Details === 
npm notice name:          pi-nvidia-extension
npm notice version:       0.0.1
npm notice package size:  X kB
npm notice unpacked size: X kB
npm notice shasum:        XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
npm notice integrity:     XXX sha512-XXXXXXXXXXXXXXXX==
npm notice total files:   X
npm notice 
npm notice Publishing to https://registry.npmjs.org/
+ pi-nvidia-extension@0.0.1
```

### 5.3 Verify Publication

Check that your package is on npm:

```bash
npm view pi-nvidia-extension
```

Or visit: https://www.npmjs.com/package/pi-nvidia-extension

## Step 6: Test Installation from npm

### 6.1 Install Your Package

```bash
# Install globally
npm install -g pi-nvidia-extension

# Or install locally
npm install pi-nvidia-extension
```

### 6.2 Test with pi

```bash
# Test the extension
pi -e npm:pi-nvidia-extension

# Or install permanently
pi install npm:pi-nvidia-extension
```

## Step 7: Update GitHub (Optional)

### 7.1 Add npm Badge to README

Add an npm badge to your README.md:

```markdown
[![npm version](https://badge.fury.io/js/pi-nvidia-extension.svg)](https://www.npmjs.com/package/pi-nvidia-extension)
```

### 7.2 Create Release on GitHub

Create a new GitHub release that references the npm version:

```bash
git tag -a v0.0.1 -m "Release v0.0.1 - Published to npm"
git push origin v0.0.1
```

## Step 8: Monitor pi.dev/packages

### 8.1 Check for Listing

After publishing to npm, your package should automatically appear on:

https://pi.dev/packages

This may take a few minutes to hours as the registry updates.

### 8.2 Verify Listing

Search for your package:

```bash
# On pi.dev/packages, search for:
# - "pi-nvidia-extension"
# - "nvidia"
# - "nim"
```

## Troubleshooting

### Issue: Package name already taken

**Solution**: Use a scoped package or different name:
```bash
# Scoped package
npm publish --access public

# Or rename in package.json
```

### Issue: Permission denied

**Solution**: Ensure you're logged in and have permissions:
```bash
npm login
npm whoami
```

### Issue: Files not included

**Solution**: Check `.npmignore` and `files` field in package.json:
```bash
npm pack --dry-run
```

### Issue: Version conflict

**Solution**: Increment version in package.json:
```bash
npm version patch  # or minor, major
npm publish
```

### Issue: 404 Not Found after publish

**Solution**: For scoped packages, use `--access public`:
```bash
npm publish --access public
```

## Maintenance

### Updating the Package

When you make changes:

```bash
# 1. Update version
npm version patch  # or minor, major

# 2. Commit changes
git add .
git commit -m "Update to version X.X.X"
git push

# 3. Publish to npm
npm publish

# 4. Create GitHub release
gh release create vX.X.X
```

### Unpublishing (Emergency Only)

⚠️ **Warning**: You can only unpublish within 72 hours

```bash
npm unpublish pi-nvidia-extension --force
```

## Best Practices

1. **Semantic Versioning**: Follow semver (major.minor.patch)
2. **Changelog**: Keep a CHANGELOG.md file
3. **Testing**: Test thoroughly before publishing
4. **Documentation**: Keep README.md up to date
5. **Security**: Don't publish sensitive data
6. **Dependencies**: Keep dependencies minimal and updated

## Next Steps

After successful publishing:

1. ✅ Share on social media
2. ✅ Submit to pi community forums
3. ✅ Add to relevant lists/curations
4. ✅ Monitor for issues and feedback
5. ✅ Plan for future updates

## Checklist

- [ ] Package name available on npm
- [ ] package.json properly configured
- [ ] All required files present
- [ ] LICENSE file included
- [ ] .npmignore configured
- [ ] Local testing completed
- [ ] npm account created and logged in
- [ ] Package published successfully
- [ ] Installation tested from npm
- [ ] Listed on pi.dev/packages
- [ ] Documentation updated
- [ ] GitHub release created

---

**Congratulations!** Your package is now published and available to the Pi community! 🎉
