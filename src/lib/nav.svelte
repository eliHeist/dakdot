<script lang="ts">
    import { onMount } from "svelte";
    import { Menu, X } from "lucide-svelte";
    import { gsap } from "gsap";
    import LogoDot from "$lib/components/logo-dot.svelte";
    

    let navElement: HTMLElement
    let lastScrollPosition= 0
    let isNavHidden = false

    function handleNavScroll() {
        if (!navElement) return

        const currentScrollPosition = window.scrollY
        const scrollingDown = currentScrollPosition > lastScrollPosition
        const scrollinUp = currentScrollPosition < lastScrollPosition

        if (scrollingDown && !isNavHidden){
            gsap.to(navElement, {
                y: navElement.offsetHeight,
                duration: 0.3,
                ease: 'power2.in'
            })
            isNavHidden= true
        } else if (scrollinUp&& isNavHidden) {
            gsap.to(navElement, {
                y: 0,
                duration: 0.3,
                ease: 'p0wer2.out'
            })
            isNavHidden = false
        }
        lastScrollPosition = currentScrollPosition
    }

    onMount(() => {
        window.addEventListener('scroll', handleNavScroll)

        return () => {
            window.removeEventListener('scroll', handleNavScroll)
        }
    });
</script>

<header bind:this={navElement} id="page_header" class="full-width content-grid">
    <nav class="flex justify-between items-center">
        <a href="/">
            <LogoDot width="{30}"/>
        </a>

        <button class="md:hidden">
            {#if isNavHidden}
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

    <div class="hidden absolute w-full bg-white shadow-lg">
        <div class="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a href="/" class="hover:text-primary-600">Home</a>
            <a href="/portfolio" class="hover:text-primary-600"
                >Portfolio</a>
            <a href="/services" class="hover:text-primary-600">Services</a>
            <a href="/contact" class="hover:text-primary-600">Contact</a>
        </div>
    </div>
</header>

<style lang="scss">
    header{
        position: fixed;
        bottom: 0;
        right: 0;
        left: 0;
        z-index: 1000;
    }
    nav {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 1rem 0;

        menu{
            display: flex;
            gap: 1rem;

            a{
                font-weight: 500;
                color: var(--clr-white);

                &:hover{
                    color: var(--clr-primary-600);
                }
            }
        }
    }
</style>