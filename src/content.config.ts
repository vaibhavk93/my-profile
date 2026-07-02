import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const work = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/work' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    role: z.string(),
    period: z.string(),
    order: z.number(),
    updated: z.string(),
    metrics: z.array(z.object({ value: z.string(), label: z.string() })),
  }),
});

const writing = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/writing' }),
  schema: z.object({ title: z.string(), date: z.string(), summary: z.string() }),
});

export const collections = { work, writing };
