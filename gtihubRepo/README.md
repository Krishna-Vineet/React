# Github Lite (React Learning Project)

This repository contains a small React application built as part of a beginner's journey into React development. The goal of the project is to fetch and display public repositories for a given GitHub username using the GitHub REST API. Since I'm new to React, this project represents one of my initial learning exercises.

> ⚠️ **Note:** I'm just getting started with React – expect simple, educational code and minimal styling.

---

## 🚀 Features

- **Search GitHub users** by username.
- Display a list of public repositories with basic information:
  - Name
  - Primary language
  - Description
- **Click on a repository card** to open a modal with additional details and links.
- Graceful handling of invalid usernames or network errors.

## 🗂 Project Structure

```
gtihubRepo/
├── src/
│   ├── App.jsx           # Main application component
│   ├── RepoCard.jsx      # Reusable card for individual repos
│   ├── RepoModal.jsx     # Modal component showing repo details
│   ├── useFindRepos.js   # Custom hook to fetch repositories
│   ├── main.jsx          # Entry point rendering <App />
│   ├── index.css         # Global styles
│   ├── App.css           # Styles for App component
│   ├── repoCard.css      # Styles for RepoCard
│   ├── repoModal.css     # Styles for RepoModal
│   └── ...
├── package.json          # Dependencies & scripts
├── vite.config.js
├── eslint.config.js
└── README.md             # ← You're reading it!
```

## 🛠️ Installation and Setup

1. **Clone the repository** (or download the zip):
   ```bash
   git clone https://github.com/krishna-vineet/gtihubRepo.git
   cd gtihubRepo
   ```
2. **Install dependencies**:
   ```bash
   npm install
   ```
3. **Start the development server**:
   ```bash
   npm run dev
   ```
   - The app should open automatically at `http://localhost:5173` (or another port shown in the terminal).

## 💡 How to Use

1. Type a GitHub username (e.g., `krishna-vineet`) into the input field.
2. Press `Enter` or click **Find Repos**.
3. A list of the user's public repositories will appear as cards.
4. Click on any card to open a modal with more info and a link to the GitHub page.
5. Click outside the modal or press `Esc` to close it.

## 🧠 Learning Notes

- `useFindRepos.js` uses the `fetch` API inside a custom React hook with `useEffect`.
- State is managed with `useState` in `App.jsx`.
- Conditional rendering is used to display the modal only when a repo is selected.
- Basic CSS (and Tailwind, partly configured) is used for layout; styling is kept minimal.

## ✅ Scripts

```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "lint": "eslint ."
  }
}
```

Use `npm run dev` for development and `npm run build` to create a production bundle.

## 📚 Next Steps

- Improve error handling and show messages in the UI.
- Add loading indicators while fetching.
- Expand the modal with more repository metadata (stars, forks, etc.).
- Experiment with routing and additional pages.
- Continue learning and refactoring as I grow more comfortable with React!

---

Thanks for checking out my first React learning project! Feel free to play around, give feedback, or use this as a reference for your own experiments.

📝 *Created by a React beginner.*
