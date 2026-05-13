# AGENTS.md - TTR Next.js Project

# CRITICAL RULES - MUST FOLLOW

## RESPONSES

- Keep responses concise and to the point - unless the user asks otherwise

## PLANNING MODE

- Always ask clarifying questions
- Never assume design, tech stack or features
- Use deep-dive sub-agents to assist with research
- Use deep-dive sub-agents to review the different aspects of your plan before presenting to the user

## CHANGE / EDIT MODE

- Never implement features yourself when possible - use sub-agents!
- Identify changes from the plan that can be implemented in parallel, and use sub-agents to implement the features efficiently
- When using sub-agents to implement features, act as a coordinator only
- Use the best model for the task - premium models for complex tasks (like coding) and mid-tier models for simpler tasks, like documentation
- After completing features (large or small), always run commands like lint, type check and next build to check code quality


## TESTING

- Use any testing tools, libraries available to the project for testing your changes
- Never assume your changes simply work, always test!
- If the project does not have any testing tools, scripts, MCP tools, skills, etc. available for testing, ask the user whether testing should be skipped.

## UI DESIGN

- Always follow the UI design system when creating or reviewing components or pages.
- Design System: @DESIGN.md
- **Key Styling Facts**:
  - Dark mode is default; implemented via `.dark` class (managed by `next-themes`).
  - Primary accent is Green/Teal (`hue ~144-150`).
  - Font stack is **Inter** (via `--font-inter-sans`).

## Project Overview
- Next.js 16 App Router project with MongoDB (Mongoose) + Cloudinary
- **Frontend**: Tailwind CSS v4 (inline theme config), React 19, Inter font
- **Theming**: `next-themes` with class-based dark mode strategy (`.dark`)
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
- `lib/` - Core libraries (Mongoose connection singleton)

## MongoDB Connection
Singleton in `lib/mongoose.js` - connection cached.

## Server Actions
Located in `actions/*.js` - use "use server" directive. Examples: `BlogAction.js`, `loginAction.js`.

## Known Limitations
- **lucide-react pinned to 0.460.0**: v1.x removed social icons (Facebook, Instagram, Linkedin, Twitter, Youtube). Using older version required for these icons.

## Proxy
Located in `app/proxy.js` - handles auth checks for dashboard routes.
```