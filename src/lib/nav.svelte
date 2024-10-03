<script>
    import { onMount } from 'svelte';

    import Icon from '@iconify/svelte';
    import { Button } from '$lib/components/ui/button/'
    import LogoDot from "./components/logo-dot.svelte";
    import ClientForm from "./components/clientForm.svelte";

    import { connect_collapse } from "$lib/stores/booleanStore";

    let connect_toggle = false;
	let sm_nav_state = false;

	function toggleNav() {
		sm_nav_state = !sm_nav_state;
	}

	let lastScrollY = 0;
	let isCollapsed = false;

	function handleScroll() {
		const currentScrollY = window.scrollY;

		if (currentScrollY > lastScrollY) {
			// Scrolling down
			isCollapsed = true;
		} else {
			// Scrolling up
			isCollapsed = false;
		}

		lastScrollY = currentScrollY;
	}

    function toggleSidebar() {
        // Update the store value to toggle the sidebar
        connect_collapse.update(current => !current);
    }

	// Add event listener on component mount
	onMount(() => {
		window.addEventListener('scroll', handleScroll);
	});
</script>

<header class="full-width content-grid z-0" class:collapse={isCollapsed}>
    <nav class="breakout grid-cols-3">  
        <a href="/">
            <LogoDot/>
        </a>
        <menu class="px-6 py-2 bg-white text-black rounded-full text-sm font-semibold">
            <a href="#">SERVICES</a>
            <a href="/portfolio">PORTFOLIO</a>
            <a href="#">ABOUT</a>
        </menu>

        <Button class="flex gap-2" on:click={toggleSidebar}>
            <Icon icon="ic:round-plus" />
            <span>Become a client</span>
        </Button>
    </nav>
</header>

<ClientForm/>


<style lang="scss">
    header{
        position: fixed;
        top: 0;
        right: 0;
        left: 0;
        z-index: 1000;
        transition: all 0.3s ease-in-out;
        transform: translateY(0) scaleX(1);

        &.collapse {
            transform: translateY(-100%) scaleX(1.2);
        }
    }
    nav {
        display: grid;
        align-items: center;
        justify-items: center;
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