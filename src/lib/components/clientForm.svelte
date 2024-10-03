<script lang="ts">
    import Icon from '@iconify/svelte';
    import { Label } from "$lib/components/ui/label/";
    import { Input } from "$lib/components/ui/input/";
    import { Textarea } from "$lib/components/ui/textarea/";
    import { Button } from '$lib/components/ui/button/';

    import { connect_collapse } from "$lib/stores/booleanStore";

    // Import GSAP
    import { gsap } from 'gsap';

    // Reactive statement to watch store value
    let sidebarEl: HTMLElement;
    let modalEl: HTMLElement;

    // Watch for changes in the connect_collapse store and animate accordingly
    $: if (sidebarEl && modalEl) {
        if ($connect_collapse) {
            // Slide the sidebar in when `connect_collapse` is true
            gsap.to(sidebarEl, { x: 0, scaleX: 1, duration: .7, ease: "power2.inOut" });
            gsap.to(modalEl, { backdropFilter: "blur(10px)", pointerEvents: "auto", duration: .5, ease: "power2.inOut" });
        } else {
            // Slide the sidebar out when `connect_collapse` is false
            gsap.to(sidebarEl, { x: "100%", scaleX: 2, duration: .7, ease: "power2.inOut" });
            gsap.to(modalEl, { backdropFilter: "blur(0px)", pointerEvents: "none", duration: .5, ease: "power2.inOut" });
        }
    }

    function closeComponent() {
        $connect_collapse = !$connect_collapse;
    }
</script>

<div bind:this={modalEl} class="modal">
    <div bind:this={sidebarEl} class="component bg-background w-fit p-8">
        <div class="relative h-full flex flex-col">
            <Button size="icon" variant="ghost" class="absolute top-[-1rem] right-[-1rem] grid place-content-center" on:click={closeComponent}>
                <Icon icon="majesticons:close-line" class="text-base" />
            </Button>
            <h2 class="text-3xl md:text-5xl leading-normal md:leading-normal mb-8 md:mb-12 h-fit">Hey! <br> Tell us everything</h2>
            <form action="" class="grid justify-between h-full">
                <div class="grid lg:grid-cols-2 gap-8 content-start lg:min-w-[35rem]">
                    <div>
                        <Label for="name">Name</Label>
                        <Input type="text" id="name" />
                    </div>
                    <div>
                        <Label for="email">Email</Label>
                        <Input type="email" id="email" />
                    </div>
                    <div class="lg:col-span-2">
                        <Label for="message">Message</Label>
                        <Textarea id="message" />
                    </div>
                </div>
                <div class="mt-auto flex items-center justify-between gap-4 flex-wrap">
                    <p>Email: <a class="link" href="mailto:connect@dakdot.com">connect@dakdot.com</a></p>
                    <Button>
                        Submit
                        <Icon icon="cil:arrow-right" class="text-xl ml-3" />
                    </Button>
                </div>
            </form>
        </div>
    </div>
</div>

<style lang="scss">
    .modal{
        position: fixed;
        inset: 0;
        display: grid;
        justify-content: flex-end;
        z-index: 1000;
        backdrop-filter: blur(10px);

        .component{
            transform: translateX(100%) scaleX(2);
            transform-origin: left;
        }
    }
    
</style>
