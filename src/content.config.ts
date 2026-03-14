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
  loader: file("src/content/config/general.json"),
  schema: z.object({
    logo: z.string().optional(),
    siteName: z.string(),
    heroImage: z.string(),
    gallery: z.array(z.object({
      label: z.string(),
      image: z.string()
    }))
  })
});

export const collections = { carta, settings };
