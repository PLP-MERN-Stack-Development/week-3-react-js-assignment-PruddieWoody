# Project Structure for React + Vite + Tailwind + API + Task Manager App

```
my-app/
├── public/
│   └── vite.svg (default, optional)
├── src/
│   ├── components/
│   │   ├── ApiDemoList.jsx
│   │   ├── Button.jsx
│   │   ├── Card.jsx
│   │   ├── Footer.jsx
│   │   ├── Layout.jsx
│   │   ├── Navbar.jsx
│   │   ├── TaskManager.jsx
│   │   └── ThemeSwitcher.jsx
│   ├── context/
│   │   └── ThemeContext.jsx
│   ├── hooks/
│   │   └── useLocalStorage.js
│   ├── pages/
│   │   ├── About.jsx
│   │   ├── ApiDemo.jsx
│   │   ├── Home.jsx
│   │   └── Tasks.jsx
│   ├── App.jsx
│   ├── index.css
│   ├── main.jsx
│   └── vite-env.d.ts (optional, generated by Vite for TS projects)
├── .gitignore
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── vite.config.js
```
- All component, hook, context, and page files are inside `src/`.
- Each component is in its own file for clarity and reusability.
- Tailwind CSS is fully configured.
- Routing is managed via React Router.
