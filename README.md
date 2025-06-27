# PlanVibe — Time Tracker App

PlanVibe is a modern web application for time tracking and project management.

## Features

- Create and view projects
- Upload a project icon
- Specify company, start and end dates
- Quick navigation to project time tracking
- Authentication (Google OAuth stub)
- Responsive design

## Technologies

- React 18 + TypeScript
- Vite
- Redux Toolkit (project storage)
- React Router DOM 6
- React Datepicker
- ESLint, Prettier

## Project Structure

```
src/
  components/         // UI components (ProjectCard, CreateProjectModal, etc.)
  layouts/            // Main layouts
  pages/              // Pages (Time, Projects, Login, Not-found)
  routes/             // AppRouter
  services/           // (reserved for API)
  store/              // Redux slices and store
  types/              // Shared types
  utils/              // Utility functions
public/               // Static files and icons
```

## Quick Start

1. Install dependencies:
   ```sh
   pnpm install
   # or npm install
   ```
2. Start the development server:
   ```sh
   pnpm dev
   # or npm run dev
   ```
3. Open [http://localhost:5173](http://localhost:5173) in your browser.

## Scripts

- `pnpm dev` — start the dev server
- `pnpm build` — build for production
- `pnpm preview` — preview the production build
- `pnpm lint` — run linter

## TODO

- Implement full Google authentication
- Add server-side data storage (e.g., Supabase)
- Improve time analytics and reporting

---

Project created with Vite + React + TypeScript!!!
