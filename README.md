# React + Vite + Tailwind CSS: Task Manager & API Demo

A modern, responsive React application demonstrating component architecture, state management, hooks, theme context, and API integration using [Vite](https://vitejs.dev/) and [Tailwind CSS](https://tailwindcss.com/).

## ✨ Features

- **Reusable Components:** Button, Card, Navbar, Footer, Layout
- **Task Manager:** Add, complete, delete, and filter tasks (All, Active, Completed)
- **Theme Switcher:** Light/Dark mode with context and Tailwind dark mode
- **API Integration:** Fetch, search, and paginate posts from JSONPlaceholder
- **Responsive Design:** Works on mobile, tablet, and desktop with Tailwind CSS
- **Persist Tasks:** Tasks saved with a custom `useLocalStorage` hook

---

## 🚀 Getting Started

### 1. Clone the Repository

```sh
git clone https://github.com/YOUR_USERNAME/YOUR_REPO.git
cd YOUR_REPO
```

### 2. Install Dependencies

```sh
npm install
```

### 3. Start the Development Server

```sh
npm run dev
```

- Visit the local URL shown in your terminal (usually http://localhost:5173).

---

## 📦 Project Structure

```
src/
  components/     # Reusable UI components
  context/        # React context for theme management
  hooks/          # Custom React hooks
  pages/          # App routes/pages
  App.jsx         # Main app with routing
  main.jsx        # Entry point
  index.css       # Tailwind CSS & global styles
tailwind.config.js
postcss.config.js
vite.config.js
package.json
index.html
```

---

## 🛠️ Customization & Usage

- **Add more routes** by editing `src/App.jsx` and adding new components/pages.
- **Change API**: The API demo uses [JSONPlaceholder](https://jsonplaceholder.typicode.com/posts), but you can swap in any REST endpoint.
- **Styling**: Tweak Tailwind utility classes or update `tailwind.config.js` as needed.

---

## 🌙 Theme Switching

- The app uses a `ThemeContext` and Tailwind's `dark` mode classes for seamless theme switching.
- Click the ☀️/🌙 button in the navbar to toggle themes.

---

## 🧪 Testing the App

- Try adding, completing, and deleting tasks in the Task Manager.
- Go to the API Demo page to fetch, search, and paginate demo posts.

---

## 📝 License

MIT

---

## 🙌 Credits

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [JSONPlaceholder](https://jsonplaceholder.typicode.com/)

---

