import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishedDate: z.string(),
    author: z.string().default('GX2C'),
    tags: z.array(z.string()),
    category: z.enum(['research', 'advisory', 'ai-products', 'industry']),
  }),
});

export const collections = { blog };
