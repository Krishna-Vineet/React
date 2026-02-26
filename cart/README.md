# 🛒 React Cart & Wishlist Demo

A minimal e‑commerce front‑end built to practice React fundamentals, context state management and client‑side routing. You can browse categories, add products to a shopping cart or wishlist, and view a summary before checkout. The project is powered by Vite, Tailwind CSS and React Router.

---

## 🚀 Features

- **Home page** with hero banner, feature highlights and category grid
- Category-specific product listings for **Sports Gear**, **Healthy Food** and **Modern Shoes**
- **Shopping cart** with subtotal, tax, shipping logic and empty state
- **Wishlist** page for saving favorite items
- Global state management via React Context (`cartContext`, `wishlistContext`)
- Mobile‑responsive layouts using Tailwind CSS
- Client‑side navigation implemented with React Router v7

## 🧱 Tech Stack

| Category        | Technology           |
|-----------------|----------------------|
| Library         | React 19             |
| Bundler/Dev     | Vite                |
| Styling         | Tailwind CSS         |
| Routing         | react-router-dom 7   |
| Linting         | ESLint (with React plugins)

## 📁 Project Structure

```
cart/
├─ public/             # static assets
├─ src/
│  ├─ components/      # reusable UI components (Product1, Product2, etc.)
│  ├─ context/         # React Context providers (cart, wishlist)
│  ├─ data/            # mock product data
│  ├─ layout/          # shared layout (SiteLayout)
│  ├─ pages/           # routed pages (Home, Sports, Food, Shoes, Cart, Wishlist)
│  ├─ index.css
│  └─ main.jsx         # app entrypoint
├─ package.json
├─ vite.config.js
├─ tailwind.config.js
└─ README.md           # this file
```

## 🛠️ Getting Started

**Prerequisites:** Node.js 18+ (npm is fine)<br>

```bash
# clone the repo
git clone https://github.com/Krishna-Vineet/React.git
cd React/projectsOnGithub/cart

# install dependencies
npm install

# start development server
npm run dev
```

Open <http://localhost:5173> in your browser to explore the application.

## ✅ Available Scripts

- `npm run dev` – start Vite dev server
- `npm run build` – create production build
- `npm run preview` – preview build locally
- `npm run lint` – run ESLint over source files

## 🎯 Next Steps / Improvements

- Persist cart and wishlist to `localStorage` or backend
- Add authentication and user profiles
- Connect to real product API instead of mock data
- Implement quantity controls, remove items, and checkout flow
- Add tests with Jest/React Testing Library

---

Made with ❤ by **Vineet** as a learning project. Feel free to fork and modify!