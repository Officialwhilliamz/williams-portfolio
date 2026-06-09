# Williams Warmate — Portfolio

Personal portfolio site built with React + Vite + Tailwind CSS + Framer Motion.

---

## Quick Start

### 1. Install dependencies
```bash
npm install
```

### 2. Run locally
```bash
npm run dev
```
Open http://localhost:5173

### 3. Build for production
```bash
npm run build
```

---

## Before You Deploy — Fill In Your Details

### Notion URLs
Open `src/data/projects.js` and replace the placeholder URLs:
```js
notionUrl: "YOUR_ZEPHYR_BANK_NOTION_URL",   // paste your Notion public link
notionUrl: "YOUR_AIRBNB_NOTION_URL",         // paste your Notion public link
```

### Contact Details
Open `src/components/Contact.jsx` and replace:
```js
const EMAIL = 'your.email@gmail.com'
const LINKEDIN = 'https://linkedin.com/in/your-handle'
```

---

## Deploy to Vercel

1. Push this folder to a GitHub repository
2. Go to https://vercel.com → New Project → Import your repo
3. Vercel auto-detects Vite — just click Deploy
4. Your site is live with a `.vercel.app` URL

---

## Project Structure

```
williams-portfolio/
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Projects.jsx
│   │   ├── Skills.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── data/
│   │   └── projects.js      ← Add new projects here
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
└── postcss.config.js
```

---

## Adding a New Project

In `src/data/projects.js`, add a new object to the array:
```js
{
  id: 3,
  title: "Your Project Title",
  description: "One line description.",
  tags: ["Tag1", "Tag2"],
  notionUrl: "https://notion.so/your-page",
  coverColor: "from-green-900 to-navy-mid",
}
```
The Projects section will automatically display it.
