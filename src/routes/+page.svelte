<script lang="ts">
    import { onMount } from "svelte";
    import { gsap } from "gsap";
    import { ArrowRight } from "lucide-svelte";

    import HowWeWork from "$lib/sections/HowWeWork.svelte";
    import Hero from "$lib/sections/Hero.svelte";
</script>

<Hero/>

<section class="about h-[100dvh] grid items-center">
    <div class="">
        <div>
            <p class="text-3xl">
                Driven by a passion to inspire growth and impact, we deliver
                world-class, tailored services to meet the unique needs of our
                clients, creating meaningful change through creativity.
            </p>
        </div>
    </div>
</section>

<section class="py-20">
    <div class="grid gap-y-32">
        <div class="wrapper">
            <figure class="rounded-3xl bg-gray-500 aspect-square"></figure>
            <div class="flex justify-between items-center mt-6">
                <h3 class="text-xl">Project Name goes Here.</h3>
                <button
                    class="aspect-square h-14 rounded-full grid place-content-center outline outline-1 outline-foreground">
                    <ArrowRight class="-rotate-45" />
                </button>
            </div>
        </div>
        <div class="wrapper">
            <figure class="rounded-3xl bg-gray-500 aspect-[3/4]"></figure>
            <div class="flex justify-between items-center mt-6">
                <h3 class="text-xl">Project Name goes Here.</h3>
                <button
                    class="aspect-square h-14 rounded-full grid place-content-center outline outline-1 outline-foreground">
                    <ArrowRight class="-rotate-45" />
                </button>
            </div>
        </div>
    </div>
</section>

<!-- <HowWeWork/> -->

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
