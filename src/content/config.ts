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
    // Header Section
    headerButtonText: z.string(),
    headerButtonUrl: z.string(),
    // CTA Section
    ctaTitle: z.string(),
    ctaSubtitle: z.string(),
    ctaDescription: z.string(),
    ctaButtonPrimary: z.string(),
    ctaButtonPrimaryUrl: z.string(),
    ctaButtonSecondary: z.string(),
    ctaButtonSecondaryUrl: z.string(),
    // Products Section
    productsTitle: z.string(),
    productsDescription: z.string(),
    // Social Section
    socialTitle: z.string(),
    socialDescription: z.string(),
    // Slots Status
    slotsAvailable: z.boolean(),
    slotsAvailableText: z.string(),
    slotsUnavailableText: z.string(),
    // Scroll Indicator
    scrollText: z.string(),
    // Footer
    copyrightText: z.string(),
    footerText: z.string(),
    socials: z.array(z.object({
      name: z.string(),
      url: z.string(),
      icon: z.string(),
    })),
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