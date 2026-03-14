import { defineCollection, z } from 'astro:content';
import { glob, file } from 'astro/loaders';

const carta = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/carta" }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    price: z.coerce.number(),
    category: z.enum(['Para Picar', 'Raciones', 'Bebidas', 'Postres']),
  }),
});

const settings = defineCollection({
  loader: glob({ pattern: "general.json", base: "./src/content/config" }),
  schema: z.object({
    logo: z.union([
      z.string(),
      z.object({
        src: z.string(),
        alt: z.string().optional(),
      })
    ]).optional(),
    siteName: z.string(),
    heroImage: z.string(),
    gallery: z.array(z.object({
      label: z.string(),
      image: z.string()
    }))
  })
});

export const collections = { carta, settings };
