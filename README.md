# UniSim Website

A React-based website built with Vite, TailwindCSS, and React Router.

## Prerequisites

Before you begin, ensure you have installed:
- [Node.js](https://nodejs.org/) (version 16 or higher)
- npm (comes with Node.js)

## Installation

1. Clone the repository:
```bash
git clone https://github.com/l-hanson-dev/ENG1-UniSim-website.git
cd ENG1-UniSim-website
```

2. Install dependencies:
```bash
npm install
```

This will install all required dependencies listed in package.json

## Development

To start the development server:
```bash
npm run dev
```

This will:
- Start a local development server
- Enable hot module replacement (HMR)
- Open your default browser to `http://localhost:5173`

## Building for Production

To create a production build:
```bash
npm run build
```

This will:
- Generate optimized assets in the `dist` directory
- Minify all JavaScript and CSS
- Generate static HTML

To preview the production build locally:
```bash
npm run preview
```

## Project Structure

```
UniSim-website/
├── src/                # Source files
│   ├── app/           # React components
│   ├── styles/        # CSS files
│   └── main.jsx       # Entry point
├── public/            # Static assets
├── index.html         # HTML template
├── vite.config.js     # Vite configuration
├── tailwind.config.js # Tailwind configuration
└── package.json       # Project dependencies
```

## Technologies Used

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [TailwindCSS](https://tailwindcss.com/)
- [React Router](https://reactrouter.com/)

## Additional Notes

- The site uses TailwindCSS for styling (Currently very broken)
- Dark mode support is included
- React Router handles navigation
- The development server supports hot reloading

## Common Issues

1. If you see module not found errors:
   - Delete the `node_modules` folder
   - Run `npm install` again

2. If the development server won't start:
   - Check if port 5173 is already in use
   - Try running `npm run dev -- --port 3000`