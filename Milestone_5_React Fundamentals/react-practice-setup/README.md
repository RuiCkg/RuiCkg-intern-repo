# React + Tailwind Setup

## Steps to set up the project

1. Create a React app
```bash
npx create-react-app react-state-setup
cd react-state-setup
```
2. Install Tailwind CSS
```bash
npm install -D tailwindcss@3.4.17 postcss autoprefixer
npx tailwindcss init -p
```

3. Configure Tailwind
Update tailwind.config.js:
```js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

4. Add Tailwind to CSS
Update src/index.css:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

5. Run the project
```bash
npm start
```