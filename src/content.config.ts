import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
    loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
    schema: z.object({
        title: z.string(),
        description: z.string().optional(),
        excerpt: z.string().optional(),
        date: z.string(),
        category: z.string(), // slug of the category
        categoryName: z.string(), // display name of the category
        image: z.string().optional(),
        order: z.number().default(0),
    }),
});

export const collections = {
    'blog': blog,
};
