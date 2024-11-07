<script lang="ts">
    import { onMount } from "svelte";
    import { gsap } from "gsap";
    import ServiceCard from "$lib/components/ServiceCard.svelte";
    import {
        Globe,
        Palette,
        Laptop,
        Code,
        Box,
        PenTool,
        Skull,
        FileCode,
        Cloud,
        LayoutGrid,
    } from "lucide-svelte";
    import Button from "$lib/components/ui/button/button.svelte";

    import { goto } from '$app/navigation';


    const services = [
        {
            title: "Web Development",
            description:
                "Custom web applications built with modern technologies.",
            icon: Code,
            features: [
                "Django & Python Development",
                "TypeScript & JavaScript Solutions",
                "SvelteKit Applications",
                "Progressive Web Apps (PWA)",
                "API Development & Integration",
            ],
        },
        {
            title: "UI/UX Design",
            description:
                "User-centered design that delivers exceptional experiences.",
            icon: LayoutGrid,
            features: [
                "User Interface Design",
                "User Experience Design",
                "Wireframing & Prototyping",
                "Design Systems",
                "Mobile-First Design",
            ],
        },
        {
            title: "3D Design",
            description:
                "Stunning 3D visualizations for products and concepts.",
            icon: Skull,
            features: [
                "Product Visualization",
                "Architectural Visualization",
                "Animation & Motion Graphics",
                "Virtual Reality (VR)",
                "Augmented Reality (AR)",
            ],
        },
        {
            title: "Graphic Design",
            description:
                "Creative design solutions that make your brand stand out.",
            icon: PenTool,
            features: [
                "Brand Identity Design",
                "Logo Design",
                "Print Design",
                "Packaging Design",
                "Marketing Materials",
            ],
        },
        {
            title: "Cloud Solutions",
            description: "Scalable cloud infrastructure for your applications.",
            icon: Cloud,
            features: [
                "Cloud Architecture",
                "Deployment & DevOps",
                "Performance Optimization",
                "Security Implementation",
                "Monitoring & Maintenance",
            ],
        },
        {
            title: "IT Consultation",
            description: "Expert guidance for your digital transformation.",
            icon: Laptop,
            features: [
                "Technology Strategy",
                "Digital Transformation",
                "System Architecture",
                "Security Audits",
                "Performance Optimization",
            ],
        },
    ];

    onMount(async () => {
        // Dynamically import ScrollTrigger in the client side
        const { default: ScrollTrigger } = await import("gsap/ScrollTrigger");

        // Register the plugin
        gsap.registerPlugin(ScrollTrigger);

        // Hero section animation
        gsap.from(".hero-content", {
            y: 30,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
        });

        // Services grid animation
        gsap.from(".service-card", {
            scrollTrigger: {
                trigger: ".services-grid",
                start: "top center+=100",
                end: "bottom center",
            },
            y: 50,
            opacity: 0,
            duration: 0.8,
            stagger: 0.2,
        });
    });
</script>

<svelte:head>
    <title>Services | DakDot</title>
</svelte:head>

<div class="min-h-screen full-width">
    <!-- Hero Section -->
    <section class="text-white py-40">
        <div class="container mx-auto px-4">
            <div class="hero-content max-w-3xl mx-auto text-center">
                <h1 class="text-4xl md:text-6xl font-bold mb-6">
                    Transform Your Digital Presence
                </h1>
                <p class="text-xl text-gray-300 mb-8">
                    We offer comprehensive digital solutions to help your
                    business thrive in the modern world.
                </p>
                <Button variant="outline" size="lg" on:click={() => goto('/contact')}>Get Started</Button>
            </div>
        </div>
    </section>

    <!-- Services Grid -->
    <section class="py-40 content-grid">
            <div class="max-w-3xl mx-auto text-center mb-20">
                <h2 class="text-3xl md:text-4xl font-bold mb-4">
                    Our Services
                </h2>
                <p class="text-muted-foreground">
                    We provide end-to-end solutions for your digital needs, from
                    development to design.
                </p>
            </div>

            <div
                class="services-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {#each services as service}
                    <ServiceCard {...service} />
                {/each}
            </div>
    </section>

    <!-- CTA Section -->
    <section class="bg-primary-600 text-white py-20">
        <div class="container mx-auto px-4 text-center">
            <h2 class="text-3xl md:text-4xl font-bold mb-6">
                Ready to Start Your Project?
            </h2>
            <p class="text-xl mb-8 max-w-2xl mx-auto">
                Let's work together to bring your vision to life. Contact us
                today for a free consultation.
            </p>
            <a
                href="/contact"
                class="inline-block bg-white text-primary-600 hover:bg-gray-100 px-8 py-3 rounded-lg transition-colors">
                Contact Us
            </a>
        </div>
    </section>
</div>
