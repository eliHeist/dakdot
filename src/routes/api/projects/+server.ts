import { prisma } from "$lib/prismaClient";
import type { RequestHandler } from "@sveltejs/kit";

// Create a new project
export const POST: RequestHandler = async ({ request }) => {
    const { title, subtitle, description, thumbnail, industryId, tags, links, images } = await request.json();

    if (!title || !thumbnail || !industryId || !tags) {
        return new Response(JSON.stringify({ error: "Missing required fields" }), { status: 400 });
    }

    const newProject = await prisma.project.create({
        data: {
            title,
            subtitle,
            description,
            thumbnail,
            industryId,
            tags: { connect: tags.map((tagId: number) => ({ id: tagId })) },
            links: { create: links },
            images: { create: images },
        },
    });

    return new Response(JSON.stringify(newProject), { status: 201 });
}
