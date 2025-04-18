# Trading Portfolio Website

A professional portfolio website built with React, TypeScript, Vite, and Material-UI.

## Features

- Modern, responsive design with Material-UI components
- TypeScript for type safety
- Vite for fast development and optimized builds
- Animated UI elements with smooth transitions
- Multiple sections showcasing skills, experience, education, and more

## Deployment

This project is configured for deployment to GitHub Pages.

### Automatic Deployment

The project is set up with GitHub Actions for automatic deployment. When you push to the main branch, the GitHub Action will:

1. Build the project
2. Deploy it to the gh-pages branch
3. Make it available at https://chiragkumar-patel.github.io/portfolio/

### Manual Deployment

To deploy manually:

```bash
# Install dependencies
npm install

# Build the project
npm run build

# Deploy to GitHub Pages
npm run deploy
```

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

- `/src` - Source code
  - `/assets` - Images and other static assets
  - `/components` - React components
  - `/pages` - Page components
  - `/theme` - Theme configuration
- `/public` - Public assets
- `/dist` - Build output (generated)

## License

MIT
