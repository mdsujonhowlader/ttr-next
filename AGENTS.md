# AGENTS.md - TTR Next.js Project

## Project Overview
- Next.js 16 App Router project with MongoDB (Mongoose) + Cloudinary
- Tailwind CSS v4, ESLint 10, React 19
- Two route groups: `(main)` = public site, `(dashboard)` = admin panel

## Commands
```bash
npm run dev      # Development server
npm run build    # Production build
npm run start    # Start production server
npm run lint     # ESLint check
```

## Environment Variables (.env)
- `MONGO_DB` - MongoDB connection string
- `CLOUDINARY_CLOUD_NAME`, `CLOUDINARY_API_KEY`, `CLOUDINARY_API_SECRET`

## Key Directories
- `actions/` - Server Actions (API logic)
- `model/` - Mongoose schemas
- `components/` - React components
- `app/(main)/` - Public pages
- `app/(dashboard)/` - Admin dashboard pages
- `utils/` - Utility functions (slugUtils, data-utils, etc.)

## MongoDB Connection
Singleton in `lib/mongoose.js` - connection cached.

## Server Actions
Located in `actions/*.js` - use "use server" directive. Examples: `BlogAction.js`, `loginAction.js`.

## Known Limitations
- **lucide-react pinned to 0.460.0**: v1.x removed social icons (Facebook, Instagram, Linkedin, Twitter, Youtube). Using older version required for these icons.

## Proxy
Located in `app/proxy.js` - handles auth checks for dashboard routes.