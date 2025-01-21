import { prisma } from '$lib/prismaClient'; // Ensure prisma client is initialized here

export const GET = async ({ params }) => {
    const project = await prisma.project.findUnique({
        where: { id: parseInt(params.id) },
        include: { industry: true, tags: true, images: true, links: true },
    });
    return new Response(JSON.stringify(project), { status: 200 });
};

export const POST = async ({ request }) => {
    const { title, shortDescription, fullDescription, industryId, tags, links, images } = await request.json();

    const newProject = await prisma.project.create({
        data: {
            title,
            shortDescription,
            fullDescription,
            industryId,
            tags: { connect: tags.map((tagId) => ({ id: tagId })) },
            links: { create: links },
            images: { create: images },
        },
    });

    return new Response(JSON.stringify(newProject), { status: 201 });
};
