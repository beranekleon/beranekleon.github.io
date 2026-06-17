import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const posts = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/pages/posts" }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    github_url: z.string().optional(),
  })
});

export const collections = { posts };
