# React Router Basic Project

This repository contains a simple React project demonstrating **React Router** usage for client-side navigation. It was built using [Vite](https://vitejs.dev/) as the build tool.

## 🚀 Features

- React application scaffolded with Vite
- Multiple pages: Home, About, Contact, Products
- A shared layout component with a navigation bar and footer
- Client-side routing using `react-router-dom` v6
- Basic styling with a CSS file for each component

## 📁 Project Structure

```text
reactRouter/
├── public/
├── src/
│   ├── About.jsx
│   ├── Contact.jsx
│   ├── Home.jsx
│   ├── Layout.jsx
│   ├── Navbar.jsx
│   ├── Products.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── README.md
└── vite.config.js
```

## 🛠 Setup & Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Krishna-Vineet/React.git
   cd React/reactRouter
   ```
2. **Install dependencies**
   ```bash
   npm install
   ```
3. **Start development server**
   ```bash
   npm run dev
   ```
   The app will be available at [http://localhost:5173](http://localhost:5173).

## 📝 Usage

- The `Navbar` component contains links that update the URL without refreshing the page.
- The `Layout` component wraps the routes and includes a footer.
- Add new routes by editing `src/main.jsx` and importing new components.

## 💡 Tips

- Ensure `react-router-dom` is installed (`npm install react-router-dom`).
- Use `<Outlet />` in layout components to render child routes.

## 📚 Additional Resources

- [React Router documentation](https://reactrouter.com/)
- [Vite documentation](https://vitejs.dev/)

---

Feel free to explore and modify this project to learn more about nested routes and dynamic parameters!