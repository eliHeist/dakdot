<script lang="ts">
    import { onMount } from "svelte";
    import { gsap } from "gsap";
    import ProjectCard from "$lib/components/ProjectCard.svelte";
    import FilterBar from "$lib/components/FilterBar.svelte";
    import type { PageData } from "./$types";

    export let data: PageData;

    let selectedTags: number[] = [];
    let selectedIndustry: number | null = null;
    let filteredProjects = data.projects;

    $: {
        filteredProjects = data.projects.filter((project) => {
            const matchesTags =
                selectedTags.length === 0 ||
                project.tags.some((tag) => selectedTags.includes(tag.id));
            const matchesIndustry =
                !selectedIndustry || project.industry.id === selectedIndustry;
            return matchesTags && matchesIndustry;
        });
    }

    const tags = data.tags;
    const industries = data.industries;

    onMount(async () => {
        // Dynamically import ScrollTrigger in the client side
        const { default: ScrollTrigger } = await import("gsap/ScrollTrigger");

        // Register the plugin
        gsap.registerPlugin(ScrollTrigger);

        gsap.from(".project-card", {
            scrollTrigger: {
                trigger: ".projects-grid",
                start: "top center",
                end: "bottom center",
            },
            y: 50,
            opacity: 0,
            duration: 0.6,
            stagger: 0.2,
        });
    });

    function handleFilterChange(event: CustomEvent) {
        selectedTags = event.detail.tags;
        selectedIndustry = event.detail.industry;
    }
</script>

<svelte:head>
    <title>Portfolio | DakDot</title>
</svelte:head>

<div class="min-h-screen py-40 full-width content-grid">
    <div class="">
        <div class="max-w-2xl mx-auto text-center mb-20">
            <h1 class="text-4xl md:text-5xl font-bold mb-4">Our Work</h1>
            <p class="text-lg text-muted-foreground">
                Explore our portfolio of web development and design projects
            </p>
        </div>

        <FilterBar
            {tags}
            {industries}
            {selectedTags}
            {selectedIndustry}
            on:filterchange="{handleFilterChange}" />

        <div
            class="projects-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {#each filteredProjects as project (project.id)}
                <div class="project-card">
                    <ProjectCard {project} />
                </div>
            {/each}
        </div>

        {#if filteredProjects.length === 0}
            <div class="text-center py-12">
                <p class="text-gray-500">
                    No projects match your selected filters.
                </p>
            </div>
        {/if}
    </div>
</div>
