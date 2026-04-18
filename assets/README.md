# Assets for pi-nvidia-extension

This directory contains visual assets for the pi.dev/packages gallery.

## Required Assets

### Screenshot (Recommended)
- **File**: `screenshot.png`
- **Format**: PNG, JPEG, GIF, or WebP
- **Size**: 1200x630px (recommended for social sharing)
- **Content**: Show the extension in action, preferably:
  - The `/login nvidia` command being used
  - Model selection interface
  - Successful API key validation message
  - Available models list

### Demo Video (Optional but Recommended)
- **File**: `demo.mp4`
- **Format**: MP4 only
- **Duration**: 15-30 seconds
- **Content**: Quick demo showing:
  - Installation process
  - API key input and validation
  - Model selection
  - Basic usage example

## How to Create Assets

### Screenshot
```bash
# Using terminal recording (macOS)
# 1. Run pi with your extension
pi
/login nvidia

# 2. When you see the success message, take a screenshot
# Cmd + Shift + 4 (macOS) or Windows + Shift + S (Windows)

# 3. Save as assets/screenshot.png
```

### Demo Video
```bash
# Using terminal recording
# macOS:
asciinema rec assets/demo-terminal.cast

# Convert to MP4:
asciinema upload assets/demo-terminal.cast

# Or use OBS/QuickTime/Windows Game Bar for screen recording
```

## Asset Guidelines

1. **Keep it clean**: Remove sensitive information (API keys, personal data)
2. **Show value**: Highlight the key features (API validation, model selection)
3. **Be concise**: Focus on the most important aspects
4. **Good quality**: Ensure text is readable and visuals are clear

## Placeholder Assets

Currently, this directory has placeholder instructions. Once you create real assets:

1. Add `screenshot.png` and/or `demo.mp4`
2. Update package.json to reference them:
```json
"pi": {
  "extensions": ["./index.ts"],
  "image": "https://raw.githubusercontent.com/lutfi-zain/pi-nvidia-extension/main/assets/screenshot.png",
  "video": "https://raw.githubusercontent.com/lutfi-zain/pi-nvidia-extension/main/assets/demo.mp4"
}
```

3. Commit and push the assets

## Tools for Creating Assets

- **Screenshots**: 
  - macOS: Cmd + Shift + 4
  - Windows: Windows + Shift + S
  - Linux: gnome-screenshot, spectacle

- **Terminal Recording**:
  - asciinema (https://asciinema.org/)
  - terminalizer (https://terminalizer.com/)
  - termtosvg (https://github.com/nbedos/termtosvg)

- **Video Editing**:
  - ffmpeg (command-line)
  - HandBrake (GUI)
  - Online tools: Clideo, Kapwing

## Example Asset Creation Workflow

```bash
# 1. Record terminal session
asciinema rec assets/demo.cast

# 2. Review the recording
asciinema play assets/demo.cast

# 3. Upload to asciinema (optional)
asciinema upload assets/demo.cast

# 4. Take screenshots at key moments
# - During API key input
# - After successful validation
# - Showing model list

# 5. Edit video if needed (add captions, trim)
ffmpeg -i assets/demo.cast -vf "scale=1280:-1" assets/demo.mp4

# 6. Add to package.json
# Update the pi.image and pi.video fields

# 7. Commit and push
git add assets/
git commit -m "Add gallery assets"
git push
```

## Current Status

- [ ] Screenshot created
- [ ] Demo video created
- [ ] Assets added to package.json
- [ ] Assets committed to repository
- [ ] Assets available on GitHub (for raw URLs)
