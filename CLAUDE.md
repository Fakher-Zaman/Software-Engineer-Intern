# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Overview

This is an internship learning repository organized into two main categories:

1. **Learning Modules** (numbered directories 1-7): Progressive learning through HTML, CSS, JavaScript, TypeScript, and Git
2. **Project Directory** (`/8-NextJs`): Main focus for development work, containing multiple Next.js-based projects

The primary active projects are:
- **nextjs-pelican-project**: Portfolio/template site using Tailwind UI and Framer Motion
- **nextjs-stripe**: Payment integration proof-of-concept with Stripe
- **nextjs-nextui**: Component library and UI experimentation
- **8-NextJs/next-auth-project**: Authentication system with MongoDB and NextAuth.js

## Common Commands

All Next.js projects follow the same command structure:

```bash
# Start development server (runs on http://localhost:3000)
npm run dev

# Build for production
npm run build

# Run production server
npm start

# Run ESLint
npm run lint
```

Run these commands from the specific project directory (e.g., `cd nextjs-pelican-project && npm run dev`).

## Project Structure Patterns

### Next.js App Router Projects

Most projects use Next.js 14+ with the App Router (not Pages Router):

```
project-root/
├── app/              # App Router - route segments and layouts
│   ├── layout.js     # Root layout wrapping all pages
│   ├── page.js       # Home page
│   └── [route]/      # Dynamic routes
├── components/       # React components (not route-specific)
├── public/          # Static assets (images, fonts, etc.)
├── styles/          # Global styles or CSS modules
├── models/          # Database models (if using MongoDB/Mongoose)
├── config/          # Configuration files
├── util/            # Utility functions and helpers
├── package.json
├── tsconfig.json    # TypeScript configuration
├── next.config.js
└── tailwind.config.js
```

### Key Files to Know

- **app/**: Use this for pages. Each folder represents a route, `page.js`/`.tsx` is the actual page component
- **components/**: Shared React components reused across pages
- **next.config.js**: Next.js configuration (image optimization, redirects, etc.)
- **tailwind.config.js**: Tailwind CSS customization and theme
- **.eslintrc.json**: ESLint rules (most projects use Next.js default config)

## Technology Stack

### Common Across All Projects

- **Next.js 14+** with App Router
- **React 18+**
- **TypeScript** (type definitions included)
- **Tailwind CSS 3** for styling
- **ESLint** with next/eslint-config for linting

### Per-Project Additions

| Project | Key Libraries |
|---------|---|
| nextjs-pelican-project | Framer Motion (animations), Headless UI, React Icons |
| nextjs-stripe | Stripe SDK |
| nextjs-nextui | NextUI component library |
| next-auth-project | NextAuth.js, MongoDB/Mongoose, bcryptjs |

## Database & Authentication

**next-auth-project** uses MongoDB with Mongoose:
- Models stored in `/models` directory
- Database connections in `config/`
- Credentials/env vars in `.env.local` (see .gitignore)
- Uses bcryptjs for password hashing

## Development Workflow

1. **Identify the project** - Note which subdirectory (e.g., `nextjs-pelican-project` or `8-NextJs/next-auth-project`)
2. **Install dependencies** - `npm install` (if not already done)
3. **Start dev server** - `npm run dev` from the project directory
4. **Make changes** - Edit files in `/app` for pages, `/components` for reusable components
5. **Test in browser** - Changes auto-reload at http://localhost:3000

## Code Style & Conventions

- **Naming**: Use camelCase for files/variables, PascalCase for components
- **'use client'**: Add at top of files using client-side hooks (useState, useEffect, etc.)
- **Tailwind classes**: Always use Tailwind CSS for styling; some projects have prettier-plugin-tailwindcss for auto-sorting
- **Components**: Keep components focused and single-purpose
- **Imports**: Use relative imports for local files (`import X from '@/components/X'` when available)

## Environment & Configuration

- **.env.local**: Contains secrets (MongoDB URI, NextAuth secrets, Stripe keys). Not committed.
- **.gitignore**: Ignore entire `/Notes` directories, `node_modules`, and environment files
- **TypeScript**: Most projects have TypeScript enabled; check `tsconfig.json` for path aliases (e.g., `@/` for root imports)

## Common Pitfalls & Patterns

1. **Client vs Server Components**: App Router components are server by default. Add `'use client'` when using hooks or browser APIs.
2. **Next.js Image Optimization**: Use `next/image` component for optimized images, not HTML `<img>` tags.
3. **Public Static Files**: Place images/fonts in `/public` and reference as `/filename` in code.
4. **Tailwind Config**: Each project has its own `tailwind.config.js` for custom colors/fonts. Check before adding custom classes.

## Learning Progression

If working on foundational concepts:
- **1-HTML through 3-JS**: Basic syntax and DOM manipulation
- **4-TS_Scrimba, 6-TS_FreeCodeCamp, 7-TS_From_Docs**: TypeScript deep-dives
- **8-NextJs/\***: Apply learning to full-stack development with Next.js

Each learning module is isolated; focus on the specific task/challenge in the assigned directory.
