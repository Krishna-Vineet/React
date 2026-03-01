# Redux To‑Do (reduxtodo)

A small React + Redux Toolkit learning project: a simple task manager with add, edit, complete, and delete functionality. It persists tasks in `localStorage` so your list survives page reloads.

## Features

- Add tasks with priority (Low / Medium / High)
- Mark tasks complete (checkbox)
- Edit and delete tasks
- Tasks persisted to `localStorage`
- Built with React, Redux Toolkit, Vite, and Tailwind CSS

## Project structure

- `src/` — React source files
  - `components/` — UI components (`AddTaskInput`, `TaskList`, `EditTaskModal`, etc.)
  - `slice/` — Redux slice (`todoSlice.js`)
  - `store.js` — Redux store configuration
- `index.html`, `package.json`, `vite.config.js`

## Prerequisites

- Node.js (16+ recommended)
- npm or yarn

## Install

```bash
npm install
```

## Run (development)

```bash
npm run dev
```

Then open the local dev URL shown by Vite (usually `http://localhost:5173`).

## Notes & Troubleshooting

- The app persists the `todos` array into `localStorage` as JSON. If `localStorage.todos` contains malformed JSON the app will log a parsing error to the console.
- If you see a `todos.map is not a function` error, verify that `todos` is an array in the Redux state and that localStorage data is stored as JSON (the project already stringifies/parses when saving/loading).
- The Redux slice lives in `src/slice/todoSlice.js`. The root reducer shape affects selectors — the current code uses `state.todos` as the array of tasks.

## Useful commands

- `npm run dev` — Start dev server
- `npm run build` — Build production bundle (if configured)

## Next steps (ideas)

- Add unit tests for reducers
- Add filtering / search for tasks
- Improve accessibility and keyboard support
- Add backend persistence (optional)

---
