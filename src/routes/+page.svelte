<script lang="ts">

    import * as Card from "$lib/components/ui/card/index.js";
    import { Button } from "$lib/components/ui/button/index.js";

    import Icon from '@iconify/svelte';
    import Hero from "$lib/components/hero.svelte";

    export let data;
</script>

<Hero/>

<section class="full-width content-grid">
    <h2 class="large-header my-24">DESIGN YOUR <br>BRAND</h2>
    <div class="grid gap-16 sm:grid-cols-2 lg:grid-cols-3">
        {#each data.graphics_data as service}
        <div class="">
            <Card.Root class="group">
                <Card.Header>
                    <Card.Title class="text-2xl">{service.title}</Card.Title>
                </Card.Header>
                <Card.Content>
                    <Card.Description class="text-lg">{service.description}</Card.Description>
                </Card.Content>
                <!-- <Card.Footer class="flex justify-between">
                    <Button variant="outline">
                        <Icon icon="material-symbols-light:arrow-circle-right-outline" class="text-lg mr-2"/>
                        Find out more
                    </Button>
                </Card.Footer> -->
            </Card.Root>
        </div>
        {/each}
    </div>
</section>

<section class="full-width content-grid">
    <h2 class="large-header my-24">CREATE AND<br>AUTOMATE YOUR<br>SYSTEM</h2>
    <div class="grid gap-16 sm:grid-cols-2 lg:grid-cols-3">
        {#each data.dev_data as service}
        <div class="">
            <Card.Root class="max-w-mdd group">
                <Card.Header>
                    <Card.Title class="text-2xl">{service.title}</Card.Title>
                </Card.Header>
                <Card.Content>
                    <Card.Description class="text-lg">{service.description}</Card.Description>
                </Card.Content>
                <!-- <Card.Footer class="flex justify-between">
                    <Button variant="outline">
                        <Icon icon="material-symbols-light:arrow-circle-right-outline" class="text-lg mr-2"/>
                        Find out more
                    </Button>
                </Card.Footer> -->
            </Card.Root>
        </div>
        {/each}
    </div>
</section>

<section class="full-width content-grid">
    <div class="">
        <header>
            <h2 class="large-header my-24">
                <p>TOP</p>
                <p>WORK</p>
            </h2>
        </header>
        <div class="grid gap-16">
            {#each data.projects_data as project }
            <div class="flex even:flex-row-reverse odd:flex-row group">
                <div class="w-11/12 max-w-lg">
                    <img src="{project.img_url}" alt="" class="w-full rounded-xl aspect-square object-cover">
                    <h3 class="mt-4 text-lg font-semibold">{project.title}</h3>
                    <p class="text-muted-foreground mt-3">{project.description}</p>
                </div>
            </div>
            {/each}
        </div>
    </div>
</section>


<section class="full-width content-grid call-to-action">
    <h2 class="large-header">Interested?</h2>
    <p class="large-header">Get in touch with us</p>
    <a href="#" class="button">Contact Options</a>
</section>


<style lang="scss">
    section {
        margin-bottom: 10rem;

        &.margin-y{
            margin: 10rem 0;
        }
    }
    .cards-grid{
        display: grid;
        grid-template-columns: 1fr 1.2fr 1.6fr 1.2fr 1fr;
        gap: 4rem;
        width: 100%;
        place-items: center;
        justify-content: center;
        
        .card {
            width: 100%;
            // height: 100%;
            aspect-ratio: 1 / 1;
            border-radius: 1rem;
            overflow: hidden;
            transform-origin: center;
            transition: width .25s cubic-bezier(0.075, 0.82, 0.165, 1);
            
            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }

            &:last-child, &:first-child {
                transform: translateY(-160%);
            }
            
            &:nth-child(2), &:nth-child(4) {
                transform: translateY(-60%);
            }

            &:hover {
                width: 125%;
            }
        }
    }

    .work-grid {
        display: grid;
        gap: 4rem;
        width: 100%;
        place-content: center;
        
        @media screen and (min-width: 768px) {
            grid-template-columns: 1fr 1fr;
            grid-template-rows: repeat(auto-fill, 1fr);
            text-align: left;
        }

        .large-header{
            margin: 0;
        }

        .card {
            width: 100%;
            // height: 100%;
            aspect-ratio: 1 / 1;
            border-radius: 1rem;
            overflow: hidden;
            grid-row: span 2;
            
            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }

        footer{
            display: grid;
            place-content: center;
            padding: 2rem 0;

            .large-link{
                font-size: clamp(2rem, 5vw, 5rem);
                font-weight: 800;
                color: var(--clr-white);
            }
        }
    }

    .feedback-grid{
        display: grid;
        grid-template-columns: auto 1fr;
        align-items: center;
        gap: 4rem;

        .content-container{
            .card{
                padding: 2.8rem;
                background-color: var(--clr-dark-900);
                border-radius: 1rem;

                .feedback{
                    font-size: 1.4rem;
                }

                .name{
                    font-style: italic;
                    font-weight: 600;
                    &::before{
                        content: "~ ";
                    }
                }
            }
        }
    }

    .call-to-action{
        display: grid;
        place-content: center;
        place-items: center;
        
        .large-header{
            margin: 0;

            &:first-child{
                background: linear-gradient(to right, var(--clr-primary-600), blue);
                background-clip: text;
                color: transparent;
            }
        }
    }
</style>