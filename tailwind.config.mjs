/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'bg': '#F5E5A3',
        'fg': '#111',
        'muted': '#6b6b6b',
        'accent': '#111',
        'border': '#1e1e1e',
      },
      fontFamily: {
        'main': ['Lora', 'serif'],
        'secondary': ['Karla', 'sans-serif'],
        'sans': ['Karla', 'sans-serif'],
        'serif': ['Lora', 'serif'],
      },
      maxWidth: {
        'container': '1024px',
      },
    },
  },
  plugins: [],
}