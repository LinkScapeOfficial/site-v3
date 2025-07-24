# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

LinkScape Site V3 is a Next.js-based website for the LinkScape student hacker organization. It's built with modern React patterns, TypeScript, and Tailwind CSS with a comprehensive GitHub-inspired design system.

## Development Commands

- `pnpm i` - Install dependencies
- `pnpm run dev` - Start development server
- `pnpm run build` - Build for production
- `pnpm run start` - Start production server
- `pnpm run lint` - Run ESLint

## Architecture & Structure

### Core Framework
- **Next.js 15** with App Router (`src/app/` directory)
- **TypeScript** throughout the codebase
- **Tailwind CSS** with extensive custom color system and animations
- **shadcn/ui** components with customized styling

### Key Directories
- `src/app/` - Next.js App Router pages and layouts
- `src/components/` - Reusable React components
- `src/components/ui/` - shadcn/ui base components
- `src/components/animations/` - Custom animation components (BlurFade, etc.)
- `src/lib/` - Utility functions (cn helper for className merging)
- `src/config/` - Configuration files

### Design System
The project uses a comprehensive GitHub-inspired color palette defined in `tailwind.config.js` with:
- Extensive `gh.*` color variants (gray, blue, green, yellow, orange, red, purple, pink, coral)
- Custom z-index scale (41-50)
- Extended width utilities (112, 128, 144, 160, 176, 192)
- Geist font family integration

### Component Patterns
- **Responsive Grid Layouts**: Components like `leaders.tsx` implement complex responsive grids with different layouts for mobile, tablet, and desktop
- **Animation Integration**: Custom blur-fade animations and Framer Motion integration
- **Icon Usage**: Mix of Primer Octicons, Lucide React, and React Icons
- **Image Optimization**: Next.js Image component with external GitHub avatars and CDN assets

### Styling Approach
- Tailwind-first with `cn()` utility from `lib/utils.ts` for conditional classes
- Custom CSS variables integration via shadcn/ui theme system
- Extensive use of CSS Grid for complex responsive layouts
- DaisyUI plugin integration alongside custom styling

### External Dependencies
- **Vercel Analytics** for tracking
- **Next Sitemap** for SEO
- **Framer Motion** for advanced animations
- **Radix UI** primitives via shadcn/ui components

### Content Management
Team member data and images are managed via:
- GitHub avatars (avatars.githubusercontent.com)
- Custom CDN assets (cdn.linkscape.app)
- Direct component integration rather than CMS

## Development Notes

The codebase follows Next.js 15 patterns with server components by default. When working with animations or interactivity, components use 'use client' directive appropriately. The project emphasizes responsive design with mobile-first approach and complex grid layouts that adapt across breakpoints.