<script lang="ts">
    import { onMount } from "svelte";
    import { gsap } from "gsap";
    import Button from "$lib/components/ui/button/button.svelte";
    import * as Card from "$lib/components/ui/card";

    let heroSpacerHeight = 100;

    onMount(async () => {
        // Dynamically import ScrollTrigger in the client side
        const { default: ScrollTrigger } = await import("gsap/ScrollTrigger");

        // Register the plugin
        gsap.registerPlugin(ScrollTrigger);

        // Hero animations
        gsap.from(".hero-content", {
            x: -100,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
        });

        const header = document.querySelector("#page_header") as HTMLElement;
        heroSpacerHeight = header.offsetHeight;
    });
</script>

<section class="hero bg-grad-rad-red h-[100dvh] flex flex-col full-width">
    <div class="flex-1 grid items-center content-grid">
        <div class="hero-content">
            <div>
                <h1 class="text-6xl md:text-7xl font-bold mb-6">
                    Creative
                    <span>Digital</span>
                    <span class="font-extralight">Solutions Agency</span>
                </h1>
            </div>
            <p class="text-xl mb-8">
                Empowering brands through web development and design.
            </p>
            <div class="flex space-x-4">
                <a href="/portfolio">
                    <Button variant="outline" size="lg"
                        >Explore Portfolio</Button>
                </a>
            </div>
        </div>
    </div>
    <div style="height: {heroSpacerHeight}px;"></div>
</section>
