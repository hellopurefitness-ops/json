# Ember & Oak — React website

A single-page React site for a (fictional) coffee roastery, built with Vite.

## Run it

```bash
npm install
npm run dev      # start dev server at http://localhost:5173
npm run build    # production build into dist/
```

Requires Node.js 18+.

## Make it yours

- **Content** — all text, menu items, beans, hours and contact details live in `src/data.js`.
- **Colors & fonts** — change the CSS variables at the top of `src/styles.css`.
- **Sections** — each section is its own component in `src/components/`. Add, remove or reorder them in `src/App.jsx`.

## Features

- Sticky navbar with smooth scrolling and a mobile hamburger menu
- Animated hero illustration (pure SVG)
- Tabbed café menu
- Bean shop with roast filters and a working cart drawer (add / remove / quantities / subtotal)
- "Open now" status computed from the opening hours
- Contact form with client-side validation (connect it to a backend or a form service to receive messages)
- Fully responsive

## Structure

```
src/
  main.jsx          entry point
  App.jsx           page layout + cart state
  data.js           all site content
  styles.css        styles
  components/
    Navbar.jsx  Hero.jsx  About.jsx  Menu.jsx
    Beans.jsx   Visit.jsx  Contact.jsx  Footer.jsx  CartDrawer.jsx
```
