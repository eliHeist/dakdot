<script lang="ts">
    import "../app.scss";
    import "../app.ts";
    import { onMount } from "svelte";
    import { Menu, X } from "lucide-svelte";
    import LogoDot from "$lib/components/logo-dot.svelte";
    

    let isMenuOpen = false;
    let isScrolled = false;
    let prevScrollPosition = 0;

    onMount(() => {
        const handleScroll = () => {
            const currentScrollPosition = window.scrollY;
            isScrolled = currentScrollPosition > 10 && currentScrollPosition < prevScrollPosition;
            prevScrollPosition = currentScrollPosition;
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    });
</script>

<header
    class="fixed w-full z-50 transition-all duration-300 content-grid"
    class:hide="{isScrolled}"
>
    <nav class="container mx-auto px-4 py-4 flex justify-between items-center">
        <a href="/">
            <LogoDot width="{30}"/>
        </a>

        <button class="md:hidden" on:click="{() => (isMenuOpen = !isMenuOpen)}">
            {#if isMenuOpen}
                <X size="{24}" />
            {:else}
                <Menu size="{24}" />
            {/if}
        </button>

        <div class="hidden md:flex space-x-8">
            <a href="/" class="hover:text-primary-600">Home</a>
            <a href="/portfolio" class="hover:text-primary-600">Portfolio</a>
            <a href="/services" class="hover:text-primary-600">Services</a>
            <a href="/contact" class="hover:text-primary-600">Contact</a>
        </div>
    </nav>

    {#if isMenuOpen}
        <div class="md:hidden absolute w-full bg-white shadow-lg">
            <div class="container mx-auto px-4 py-4 flex flex-col space-y-4">
                <a href="/" class="hover:text-primary-600">Home</a>
                <a href="/portfolio" class="hover:text-primary-600"
                    >Portfolio</a>
                <a href="/services" class="hover:text-primary-600">Services</a>
                <a href="/contact" class="hover:text-primary-600">Contact</a>
            </div>
        </div>
    {/if}
</header>

<main class="full-width content-grid">
    <slot />
</main>

<footer class="breakout py-12">
    <div class="">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
                <h3 class="text-xl font-bold mb-4">DakDot</h3>
                <p>Empowering brands through web development and design.</p>
            </div>
            <div>
                <h3 class="text-xl font-bold mb-4">Contact</h3>
                <p>Kampala, Uganda</p>
                <p>Email: contact@dakdot.com</p>
            </div>
            <div>
                <h3 class="text-xl font-bold mb-4">Follow Us</h3>
                <div class="flex space-x-4">
                    <!-- Add social media icons here -->
                </div>
            </div>
        </div>
        <div class="mt-8 pt-8 border-t border-gray-800 text-center">
            <p>
                &copy; {new Date().getFullYear()} DakDot. All rights reserved.
            </p>
        </div>
    </div>
</footer>

<style lang="scss">
    header{
        transform: translateY(0);
        transition: all 0.3s ease;

        .hide {
            transform: translateY(-100%);
        }
    }
</style>

