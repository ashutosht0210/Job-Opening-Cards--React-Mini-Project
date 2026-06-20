# Job Opening Cards — React Mini Project

A small practice project built with **React** (Vite) to learn and apply **props**. It renders a list of job opening cards for various companies by mapping over job data and passing each job as a prop to a reusable `Card` component.

## Live Link

- [Live]()

## What it does

- Takes an array of job listing data (company, role, etc.)
- Maps over it and renders a `Card` component for each job opening
- Each `Card` receives the job object via props and displays it

## Tech Stack

- React
- Vite
- Plain CSS

## Project Structure

```
mini-project/
├── src/
│   ├── components/
│   │   ├── Card.jsx     # Displays a single job opening's info
│   │   └── User.js      # Job listing data
│   ├── App.jsx           # Maps over jobs, renders Card for each
│   ├── main.jsx           # React entry point
│   └── index.css          # Styling
├── index.html
├── package.json
├── README.md
└── vite.config.js
```

## Getting Started

Clone the repo and install dependencies:

```bash
git clone https://github.com/ashutosht0210/Job-Opening-Cards--React-Mini-Project.git
cd Job-Opening-Cards--React-Mini-Project
npm install
```

Run the dev server:

```bash
npm run dev
```

Open the local URL shown in the terminal (usually `http://localhost:5173`) to view it in the browser.

## What I learned

This project was built to practice:

- Passing data between components using **props**
- Rendering lists with `.map()`
- Structuring a React app with reusable components

## Status

Practice project — built for learning purposes.