# HumanLup MCP Docs

This repository contains the **HumanLup MCP** documentation site. It is built with [Next.js](https://nextjs.org/) and the [Nextra docs theme](https://nextra.site/) to provide a lightweight, MDX‑first experience with built‑in navigation and search.

## Project Structure

- `docs/` – Source of all documentation pages in MDX.
  - `mcp/` – Introduction to the Master Control Program and its architecture.
  - `gpt5/` – Guidelines for working with GPT‑5 in your agents.
  - `workflows/` – Step‑by‑step guides for common agent workflows.
  - `code/` – TypeScript snippets for interacting with the MCP API.
  - `patterns/` – UI/UX patterns and micro‑strategies.
- `scripts/` – (coming soon) Automation scripts (e.g. diary curator, news scout).
- `theme.config.tsx` – Customization for the Nextra docs theme.
- `next.config.mjs` – Wraps Next.js with the Nextra plugin.
- `package.json` – Project metadata and dependencies.

## Getting Started

Install dependencies and run the development server:

```bash
npm install
npm run dev
```

Visit `http://localhost:3000` in your browser to view the site locally. For production builds, run `npm run build` and `npm run start`.

## License

The contents of this repository are © 2025 Lupo Studios. All rights reserved. Intended for internal use only.