<script lang="ts">
    import { onMount } from "svelte";
    import { gsap } from "gsap";

    import Button from "$lib/components/ui/button/button.svelte";
    import * as Card from "$lib/components/ui/card";

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

        // Process section animations
        gsap.to(".process-step", {
            scrollTrigger: {
                trigger: ".process-section",
                start: "top center",
                end: "bottom center",
                scrub: 1,
            },
            x: 0,
            opacity: 1,
            stagger: 0.5,
        });
    });
</script>

<section class="hero min-h-screen flex items-center relative">
    <div class="px-4">
        <div class="hero-content max-w-2xl">
            <h1 class="text-5xl md:text-7xl font-bold mb-6">
                Digital Solutions. Design Excellence.
            </h1>
            <p class="text-xl mb-8">
                Empowering brands through web development and design.
            </p>
            <div class="flex space-x-4">
                <a href="/portfolio">
                    <Button variant="outline" size="lg"
                        >See Our Services</Button>
                </a>
                <a href="/portfolio">
                    <Button size="lg">Explore Portfolio</Button>
                </a>
            </div>
        </div>
    </div>
</section>

<section class="about py-20">
    <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
                <h2 class="text-4xl font-bold mb-6">Who We Are</h2>
                <p class="text-lg">
                    At DakDot, we combine technology and creativity to offer
                    high-quality, people-centered solutions. With a focus on
                    delivering scalable web development and stunning design, we
                    help brands build a strong digital presence.
                </p>
            </div>
            <div class="relative">
                <!-- Add team image here -->
                <div class="bg-gray-300 h-[400px] rounded-lg"></div>
            </div>
        </div>
    </div>
</section>

<section class="process-section py-20">
    <div class="px-4">
        <h2 class="text-4xl font-bold mb-12 text-center">How We Work</h2>
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
            {#each ["Get Client's Request", "Come Up with Solutions", "Create a Prototype", "Deliver the Final Product"] as step, i}
                <Card.Root>
                    <Card.Header>
                        <div class="text-4xl font-bold text-primary-600 mb-4">
                            {i + 1}
                        </div>
                        <Card.Title>{step}</Card.Title>
                    </Card.Header>
                    <Card.Content>
                        <Card.Description>
                            {#if i === 0}
                                We start by understanding your needs. Our team
                                listens carefully to ensure every detail is
                                captured.
                            {:else if i === 1}
                                Next, we brainstorm creative solutions tailored
                                to your brand and goals.
                            {:else if i === 2}
                                We build prototypes and wireframes to give you a
                                tangible view of what your solution will look
                                like.
                            {:else}
                                After refining the prototype, we craft the final
                                product, ready to impress and perform.
                            {/if}
                        </Card.Description>
                    </Card.Content>
                </Card.Root>
            {/each}
        </div>
    </div>
</section>

<section class="cta py-20 bg-primary-600 text-white">
    <div class="container mx-auto px-4 text-center">
        <h2 class="text-4xl font-bold mb-6">Ready to Elevate Your Brand?</h2>
        <a
            href="/contact"
            class="inline-block bg-white text-primary-600 px-8 py-3 rounded-lg hover:bg-gray-100">
            Get Started
        </a>
    </div>
</section>
