import { prisma } from '$lib/server/prisma';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
    const [projects, tags, industries] = await Promise.all([
        prisma.project.findMany({
            include: {
                tags: true,
                industry: true,
                links: true,
            },
            orderBy: {
                createdAt: 'desc',
            },
        }),
        prisma.tag.findMany(),
        prisma.industry.findMany(),
    ]);

    return {
        projects,
        tags,
        industries,
    };
};