import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const posts = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/posts" }),
  schema: z.object({
    title: z.string(),
    summary: z.string().optional(),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    date: z.coerce.date().optional(),
    tags: z.array(z.string()).optional(),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    overview: z.string(),
    pride: z.number().optional(),
    image: z.string(),
    imageAlt: z.string(),
    date: z.coerce.date().optional(),
    tags: z.array(z.string()).optional(),
    client: z.string().optional(),
    quote: z.string().optional(),
    before: z.string().optional(),
    beforeAlt: z.string().optional(),
  }),
});

export const collections = { posts, projects };
