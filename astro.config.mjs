// @ts-check
import tailwindcss from '@tailwindcss/vite';
import { fontProviders, defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';


// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },
  experimental: {
    fonts: [
        {
            name: "Lora",
            cssVariable: "--font-lora",
            provider: fontProviders.fontsource()
        },
        {
            name: "Karla",
            cssVariable: "--font-karla",
            provider: fontProviders.fontsource()
        },
    ]
  },
  adapter: vercel(),
  // Enable font preloading for better performance
  prefetch: {
    prefetchAll: true
  }
});