import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const cv = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/cv' }),
  schema: z.object({
    title: z.string(),
    technologies: z.string(),
    company: z.string(),
    client: z.string(),
    role: z.string(),
    order: z.number(),
  }),
});

export const collections = { cv };
