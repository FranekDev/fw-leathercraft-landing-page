// @ts-check
import tailwindcss from '@tailwindcss/vite';
import { fontProviders, defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';


// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },
  fonts: [
    {
      name: "Lora",
      cssVariable: "--font-lora",
      provider: fontProviders.fontsource(),
      weights: ["400 700"],
      styles: ["normal"],
      subsets: ["latin", "latin-ext"],
    },
    {
      name: "Karla",
      cssVariable: "--font-karla",
      provider: fontProviders.fontsource(),
      weights: ["200 800"],
      styles: ["normal"],
      subsets: ["latin", "latin-ext"],
    },
  ],
  adapter: vercel(),
  // Enable font preloading for better performance
  prefetch: {
    prefetchAll: true
  }
});