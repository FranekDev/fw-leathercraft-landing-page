import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

const sites = defineCollection({
  loader: glob({ pattern: '*.md', base: 'src/content/sites' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    heroTitle: z.string(),
    heroDescription: z.string().array(),
    announcementMessage: z.string(),
    brandName: z.string(),
    url: z.string(),
    socials: z.object({
      Instagram: z.string(),
      TikTok: z.string(),
      YouTube: z.string(),
    }),
  }),
});

const products = defineCollection({
  loader: glob({ pattern: '*.md', base: 'src/content/products' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    className: z.string().optional(),
    order: z.number().optional(),
  }),
});

export const collections = {
  sites,
  products,
};