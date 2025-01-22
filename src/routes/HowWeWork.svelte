<script lang="ts">
    import { onMount } from "svelte";
    import gsap from "gsap";
    import { Header } from "$lib/components/ui/card";

    if (typeof window !== "undefined") {
        
    }

    

    async function pinItems() {
        const { ScrollTrigger } = await import("gsap/ScrollTrigger");
        gsap.registerPlugin(ScrollTrigger);
        const container = document.querySelector(".hww") as HTMLElement;
        const steps: NodeListOf<HTMLElement> =
            container.querySelectorAll(".step");
        console.log(steps);
        steps.forEach((step, i) => {
            ScrollTrigger.create({
                trigger: step,
                start: "top top",
                pin: true,
                pinSpacing: false,
                snap: 1,
            });
            gsap.from(step.children, {
                y: 50,
                opacity: 0,
                scrollTrigger: {
                    trigger: step,
                    start: "top center",
                    end: "top top",
                    toggleActions: "play none reverse reset",
                },
            });
        });
    }

    onMount(async () => {
        if (typeof window === "undefined") {
            return;
        }
        const { ScrollTrigger } = await import("gsap/ScrollTrigger");
        gsap.registerPlugin(ScrollTrigger);

        const animation = gsap.timeline();

        let wrapper = document.querySelector(".hww") as HTMLElement;
        let header = wrapper.querySelector(".header") as HTMLElement
        let cards: NodeListOf<HTMLElement> = wrapper.querySelectorAll(".step");
        let cardHeight: number;

        function pinInit() {
            animation.clear();
            cardHeight = cards[0].offsetHeight;

            cards.forEach((card, index) => {
                if (index > 0) {
                    gsap.set(card, { y: index * cardHeight });

                    animation.to(
                        card,
                        { y: 0, duration: index * 0.5, ease: "none" },
                        0
                    );
                }
            });
        }

        pinInit()

        ScrollTrigger.create({
            trigger: wrapper,
            start: "top top",
            pin: true,
            end: ()=>`+=${(cards.length*cardHeight) + header.offsetHeight}`,
            scrub: true,
            animation: animation,
            markers: false,
            invalidateOnRefresh: true
        })

        ScrollTrigger.addEventListener("refreshInit", pinInit)
    });
</script>

<section class="hww breakout">
    <header class="header grid place-content-center">
        <h2 class="text-center font-bold text-[3rem] lg:text-[6rem]">How We Work?</h2>
    </header>
    <div class="steps relative">
        <div class="step bg-grad-rad-white">
            <h2 class="title">1. Discovery & Research</h2>
            <p class="description">
                We start by understanding your goals, audience, and challenges.
                Through consultations and research, we gather insights to build a
                strong foundation.
            </p>
        </div>
    
        <div class="step  bg-grad-rad-red">
            <h2 class="title">2. Strategic Planning</h2>
            <p class="description">
                We define the project scope, timelines, and deliverables to align
                with your vision and objectives.
            </p>
        </div>
    
        <div class="step  bg-grad-rad-blue">
            <h2 class="title">3. Creative Development</h2>
            <p class="description">
                From concept creation to design and development, we craft solutions
                that bring your brand to life.
            </p>
        </div>
    
        <div class="step  bg-grad-rad-yellow">
            <h2 class="title">4. Review & Refinement</h2>
            <p class="description">
                Your feedback matters. We collaborate to refine the work until it
                exceeds expectations.
            </p>
        </div>
    
        <div class="step  bg-grad-rad-white">
            <h2 class="title">5. Delivery & Launch</h2>
            <p class="description">
                We deliver the final product and assist with deployment to ensure a
                seamless launch.
            </p>
        </div>
    
        <div class="step bg-foregound text">
            <h2 class="title">6. Ongoing Support</h2>
            <p class="description">
                We provide post-project support, maintenance, and optimization to
                help you achieve sustained success.
            </p>
        </div>
    </div>
</section>

<section class="spacer h-screen"></section>

<style lang="scss">
    .header{
        height: 30dvh;
        font-size: 6rem;
    }
    .step {
        position: absolute;
        height: 70dvh;
        width: 100%;
        display: grid;
        place-content: center;
        padding: 2rem;
        border-radius: 2rem;
        opacity: 1;
    }

    .title {
        @apply text-5xl;
    }

    .description {
        font-size: 1.125rem;
        line-height: 1.6;
    }
</style>
