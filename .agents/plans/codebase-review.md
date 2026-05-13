# TTR Codebase Review

**Project**: The Tech Resolver (TTR) — Next.js 16 agency website
**Date**: 2026-05-13

---

## What This Project Is

A full-stack digital agency website with a public-facing site (home, services, blog, portfolio, contact, about, digital marketing) and a password-protected admin dashboard (CRUD for services, projects, blogs, image gallery, site settings). Built with Next.js 16 App Router, MongoDB/Mongoose, Cloudinary, Tailwind CSS v4, and JavaScript (no TypeScript).

---

## 🔴 Critical — Security

### 1. Plain-text passwords
- **Files**: `model/admin.js:6`, `actions/loginAction.js:12-19`
- **Issue**: Passwords are stored and compared as plain text. No hashing (bcrypt, argon2, etc.).
- **Fix**: Hash passwords with `bcrypt` on save; compare with `bcrypt.compare()` on login.

### 2. No auth enforcement on dashboard routes
- **File**: `proxy.js`
- **Issue**: The `admin-auth` cookie is set on login but **never validated** on any dashboard route. Anyone who knows a `/dashboard/*` URL can access it directly.
- **Fix**: Build a proper `middleware.js` at the app root that validates the cookie.

### 3. Login has no rate limiting
- **File**: `actions/loginAction.js`
- **Issue**: No attempt tracking, no delay, no CAPTCHA. Unbounded brute-force.
- **Fix**: Add in-memory or DB-backed attempt tracking with cooldown.

---

## 🐛 Bugs

### 4. Blog detail page crashes on missing blog
- **File**: `app/(main)/blogs/[slug]/page.js:11-22`
- **Issue**: `getBlogBySlug` returns `{ error: "Blog not found" }` on miss. The check `if (!blog)` passes because objects are truthy. Then `blog.imageId._id.toString()` on line 18 throws if `imageId` is `null`.
- **Fix**: Check `blog.error` or `blog?.imageId` before accessing.

### 5. `getAppearances` can return `undefined`
- **File**: `actions/appearanceAction.js:108-110`
- **Issue**: The catch block has no return. `HeroSection.jsx:60` calls `.map()` on it directly — crashes if the DB call fails.
- **Fix**: Return a default value or `[]` from the catch block.

### 6. Contact form and newsletter are non-functional
- **Files**: Contact page, footer, homepage newsletter
- **Issue**: No `action` or server handler wired up. Decorative HTML only.
- **Fix**: Add server actions for contact form submission and newsletter signup.

---

## 🟡 Structural

### 7. Inconsistent error return shapes across actions
| File | Success shape | Error shape |
|------|--------------|-------------|
| `BlogAction.js` | `{ success: true, msg }` | `{ success: false, errors: [...] }` |
| `loginAction.js` | `{ success: true }` | `{ error: "..." }` |
| `servicAction.js` | `{ success: true, msg }` | `{ success: false, msg }` |
| `gellaryAction.js` | `{ success: true }` | `{ success: false, message }` |

- **Fix**: Normalize to one shape, e.g. `{ success: boolean, data?: any, error?: string }`.

### 8. Typo: `gellaryAction.js` → `galleryAction.js`
- **Issue**: Filename and all exports misspelled. Propagates across 8+ import sites.
- **Fix**: Rename file and update all imports.

### 9. Duplicate / unused components
- `ServiceFormClient.jsx` and `ServiceFormWrapper.jsx` do the same thing — `ServiceFormClient.jsx` appears unreachable.
- `components/common/Button.jsx` contains a demo `CopyButton` component, not a reusable button.
- `components/common/ToastAlert.jsx` is unused (app uses `react-hot-toast` via context).

### 10. Inconsistent Mongoose model patterns
- Four different import/styles across models.
- Some use `models.X ?? model("X", schema)`, others use `mongoose.models.X || mongoose.model("X", Schema)`.

### 11. `cz-shortcut-listen="true"` on `<body>`
- **Files**: `app/(main)/layout.js:23`, `app/(dashboard)/layout.js:22`
- **Issue**: Browser extension artifact (Grammarly), not a valid HTML attribute.

### 12. `FullScreeenLoading` typo + naming collision
- `Loading.js` (dashboard) imports `FullScreeenLoading` — misspelled.
- `loading.js` (main) imports `FullScreenLoader` — correct.
- Different components for the same purpose.

### 13. Cross-route-group import
- `app/(main)/loading.js` imports from `../(dashboard)/_components/ui-common/FullscreenLoader`.

---

## 🔵 Improvements

### 14. Build a proper auth middleware
- Add `middleware.js` at the app root to validate `admin-auth` cookie on `/dashboard/*` routes.

### 15. Add TypeScript
- Would catch error-shape mismatches, null-checks, and model inconsistencies at build time.

### 16. Add error boundaries and not-found pages
- Neither route group has `error.js` or custom `not-found.js`.
- DB failure or invalid slug currently produces a white screen or 500.

### 17. Add SEO metadata
- Most pages lack `generateMetadata` or `metadata` exports.
- No `robots.txt` or `sitemap.xml`.

### 18. Remove `server.js`
- Custom HTTP server is unnecessary with Next.js App Router and prevents Vercel deployment.
- Use `next start` instead.

### 19. Hash passwords + rate limiting
- Use `bcrypt` for password hashing.
- Add login attempt tracking (in-memory or DB) with cooldown.

### 20. Normalize error return pattern
- Pick one shape and use it across all action files.

---

## 🚀 Project List Page — 10x UI/UX Redesign Plan

**Date**: 2026-05-13
**Status**: Proposed

### Context

The current project system uses a **tab-based structure** (categories with nested project subdocuments). The public projects page has basic anchor-link tabs and simple cards with no search/filter. The admin panel can create categories but **cannot add individual projects** to them — the "Edit" link at `view-projects/page.js:81` points to `/dashboard/projects/edit-project/[tabId]` (404). Projects also lack **tags** per item.

### Phase 1: Data Model & Validation

| File | Action |
|------|--------|
| `model/project.js` | **Modify** — add `tags: [{ type: String }]` to the sub-schema in `projects` array; optionally add `projectLongDesc: { type: String }` |
| `validation/validationSchema.js` | **Modify** — add `projectSchema` (Zod) for per-project fields |

### Phase 2: Server Actions

| File | Action |
|------|--------|
| `actions/projectsAction.js` | **Modify** — update `addProjectToTab`, `updateProject` to handle tags; add `getAllProjects()` flattened action returning all projects with `tabName` mapped as `category` |

### Phase 3: Admin Panel — Full Project Management

| File | Action |
|------|--------|
| `app/(dashboard)/dashboard/projects/edit-project/[tabId]/page.js` | **Create** — server component fetches tab by ID, serializes, renders manage component |
| `app/(dashboard)/dashboard/projects/edit-project/[tabId]/_components/ManageTabProjects.jsx` | **Create** — client component with inline form/modal to add/edit/delete projects within a tab; uses tags chip input, gallery picker (`AllFileGellary`), `react-hot-toast` |

### Phase 4: Frontend — 10x Better Project List Page

| File | Action |
|------|--------|
| `components/projects/ProjectHero.jsx` | **Create** — animated gradient hero with motion entrance, live project/category counter |
| `components/projects/ProjectFilters.jsx` | **Create** — client component: category pills, search bar, tag filter |
| `components/projects/ProjectCard.jsx` | **Create** — elevated card with thumbnail zoom, category chip overlay, tags, description, hover glow (follows DESIGN.md tokens) |
| `components/projects/ProjectGrid.jsx` | **Create** — responsive grid (`sm:2, lg:3, xl:4`), staggered `motion` entry animation, empty state |
| `app/(main)/projects/page.js` | **Rewrite** — calls `getAllProjects()`, serializes data, composes new components |

### UX Improvements Over Current

| Current | 10x Better |
|---------|-----------|
| Static hero | Animated gradient + motion entrance + live counters |
| No search/filter | Search bar + category pills + tag filter with debounce |
| Anchor-link tab jumps (hard refresh) | Client-side filter with smooth fade transition |
| Basic card (shadow + hover scale) | Gradient border, hover glow, zoom overlay, tags-as-badges |
| No animations | Staggered card entrance via `motion/react` |
| No empty state | Illustrated empty state with CTA |
| No stats | Project/category count strip below hero |

### ✅ Decisions

1. **Detail pages — YES.** Individual projects will have their own slug for dedicated detail pages at `/projects/[slug]`.
2. **Admin upload flow — Dedicated "Add Project" button.** Separate page with category dropdown selector.

---

## 📬 Contact Page — Working Email Form Plan

**Date**: 2026-05-13
**Status**: Proposed

### Context

The contact page at `/contacts` has a form that stores submissions in MongoDB but **sends zero emails** — no notification to admin, no auto-reply to user. The `SmallContactSection` component has a decorative non-functional form. No email library or env vars exist.

### Phase 1: Email Service Setup

| File | Action |
|------|--------|
| `package.json` | **Modify** — add email library (nodemailer or resend) |
| `.env` | **Modify** — add SMTP or Resend API credentials |
| `lib/email.js` | **Create** — email utility/transporter |

### Phase 2: Backend

| File | Action |
|------|--------|
| `validation/validationSchema.js` | **Modify** — add `contactSchema` (Zod) |
| `actions/contactAction.js` | **Rewrite** — Zod validation + save to DB + send email to admin + auto-reply to user |

### Phase 3: Frontend

| File | Action |
|------|--------|
| `app/(main)/contacts/page.js` | **Update** — loading states, per-field error messages, better UX |
| `components/SmallContactSection.jsx` | **Fix** — make functional or remove decorative form |

### 🔴 Open Question

**Which email provider?** Options:
- **Nodemailer + Gmail SMTP** — Free, needs Gmail app password, daily limits
- **Resend** — Modern API, generous free tier (100/day), clean setup
- **Nodemailer + any SMTP** — Works with SendGrid/Brevo/etc, needs credentials
