# Mahin's Portfolio 🚀

A modern, animated portfolio website built with React, TypeScript, GSAP, and Three.js.

## Features

- ✨ Smooth scroll animations with GSAP
- 🎨 3D character model with Three.js
- 📱 Responsive design
- 🎯 Interactive cursor effects
- 🚀 Built with Vite for fast development

## Tech Stack

- React 18
- TypeScript
- Vite
- GSAP (with ScrollSmoother)
- Three.js / React Three Fiber
- CSS3

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

The site will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
npm run preview
```

## Customization

### Personal Information
Edit these files to add your own content:
- `src/components/Landing.tsx` - Your name and title
- `src/components/About.tsx` - Your bio
- `src/components/Career.tsx` - Your experience
- `src/components/Work.tsx` - Your projects
- `src/components/Contact.tsx` - Your contact info
- `src/components/SocialIcons.tsx` - Your social links
- `src/components/Navbar.tsx` - Your email

### Project Images
Add your project screenshots to `public/images/` and update the paths in `Work.tsx`.

## Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Import to Vercel
3. Deploy automatically

### Netlify
1. Build: `npm run build`
2. Publish directory: `dist`

### GitHub Pages
Note: GSAP Club plugins (ScrollSmoother) require a paid license for hosting. 
See [GSAP Installation](https://gsap.com/docs/v3/Installation/) for details.

## Credits

Design inspired by [Rajesh Chityal's Portfolio](https://github.com/raxx21/rajesh-portfolio)

## License

MIT License
