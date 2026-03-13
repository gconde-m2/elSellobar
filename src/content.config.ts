import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const carta = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/carta" }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    price: z.coerce.number(),
    category: z.enum(['Para Picar', 'Raciones', 'Bebidas', 'Postres']),
  }),
});

export const collections = { carta };
