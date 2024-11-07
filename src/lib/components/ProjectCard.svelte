<script lang="ts">
    import type { Project, Link } from "@prisma/client";
    import { Globe, Heart, Github } from "lucide-svelte";

    export let project: Project & {
        tags: { name: string }[];
        links: Link[];
        industry: { name: string };
    };

    const getIcon = (type: string) => {
        switch (type.toLowerCase()) {
            case "website":
                return Globe;
            case "behance":
                return Heart;
            case "github":
                return Github;
            default:
                return Globe;
        }
    };
</script>

<div class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
    <img
        src="{project.thumbnail}"
        alt="{project.title}"
        class="w-full h-48 object-cover" />
    <div class="p-6">
        <h3 class="text-xl font-bold mb-2">{project.title}</h3>
        <p class="text-gray-600 mb-4">{project.shortDescription}</p>

        <div class="flex flex-wrap gap-2 mb-4">
            {#each project.tags as tag}
                <span
                    class="bg-primary-100 text-primary-800 px-2 py-1 rounded text-sm">
                    {tag.name}
                </span>
            {/each}
        </div>

        <div class="flex justify-between items-center">
            <span class="text-sm text-gray-500">{project.industry.name}</span>
            <div class="flex space-x-3">
                {#each project.links as link}
                    <a
                        href="{link.url}"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="text-gray-600 hover:text-primary-600 transition-colors">
                        <svelte:component
                            this="{getIcon(link.type)}"
                            size="{20}" />
                    </a>
                {/each}
            </div>
        </div>
    </div>
</div>
