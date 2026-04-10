# Fleuriane Lam — Portfolio

Personal portfolio website built with Next.js, TypeScript, and Tailwind CSS. Deployed on Vercel.

## Tech Stack

- [Next.js 16](https://nextjs.org/)
- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS v4](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)

## Prerequisites

- [Node.js](https://nodejs.org/) >= 18
- [pnpm](https://pnpm.io/) (recommended), [npm](https://www.npmjs.com/), or [yarn](https://yarnpkg.com/)

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/fleur17/Fleuriane-s-portfolio.git
cd Fleuriane-s-portfolio
```

### 2. Install dependencies

```bash
# pnpm (recommended)
pnpm install

# npm
npm install

# yarn
yarn install
```

> Husky pre-commit hooks are set up automatically via the `prepare` script.

### 3. Run the development server

```bash
# pnpm
pnpm dev

# npm
npm run dev

# yarn
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

| Script                   | pnpm                | npm                    | yarn                |
| ------------------------ | ------------------- | ---------------------- | ------------------- |
| Start dev server         | `pnpm dev`          | `npm run dev`          | `yarn dev`          |
| Build for production     | `pnpm build`        | `npm run build`        | `yarn build`        |
| Start production server  | `pnpm start`        | `npm run start`        | `yarn start`        |
| Run ESLint               | `pnpm lint`         | `npm run lint`         | `yarn lint`         |
| Run ESLint with auto-fix | `pnpm lint:fix`     | `npm run lint:fix`     | `yarn lint:fix`     |
| Format with Prettier     | `pnpm format`       | `npm run format`       | `yarn format`       |
| Check formatting         | `pnpm format:check` | `npm run format:check` | `yarn format:check` |
| Lint + format check      | `pnpm check`        | `npm run check`        | `yarn check`        |

## Project Structure

```
src/
  app/              # Next.js app router pages
  components/       # Reusable React components
  data/             # Static data files (projects, etc.)
  types/            # Shared TypeScript types
  assets/           # Local assets imported in code
public/
  images/
    common/         # Shared assets (logo, icons, tool logos)
    about/          # Images used on the about page
    projects/       # Per-project images
      neuroportal/
      elastup/
      ...
```

## Adding a New Project

1. Add the project entry to `src/data/projects.ts`
2. Add project images to `public/images/projects/<project-slug>/`
3. Create the project detail page at `src/app/<project-slug>/page.tsx`

## CI

GitHub Actions runs on every push and pull request to `main`:

- ESLint
- Prettier format check
- Next.js build

## Deployment

The project is deployed on [Vercel](https://vercel.com/). Every push to `main` triggers a production deployment automatically.
