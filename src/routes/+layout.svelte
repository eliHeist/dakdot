<script lang="ts">
    import Nav from "$lib/nav.svelte";
    import "../app.scss";
    import { onMount } from "svelte";
    import Lenis from 'lenis'

    onMount(() => {
        // Initialize Lenis
        const lenis = new Lenis({
            autoRaf: true,
        });
        
        // Listen for the scroll event and log the event data
        lenis.on('scroll', (e) => {
        });
    })
</script>

<Nav/>

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
</style>

