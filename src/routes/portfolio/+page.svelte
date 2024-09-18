<script lang="ts">
    import IconButton from "$lib/components/iconButton.svelte";
    import { onMount } from "svelte";

    interface Project {
        id:number,
        name:string,
        description:string,
        tags:string[],
        image:string
        behance:string|null
    }

    let projects:Project[] = [
        {
            id: 1,
            name: "Too Good",
            description: "Package design for Too good Yoghurt",
            tags: ["Food and Beverage", "Product Design", "Logo Design"],
            image: "/images/try.jpeg",
            behance: "https://www.behance.net/gallery/192114235/Dozen-Bites-Bakery-Logo",
        },
    ];
    for (let i = 2; i <= 9; i++) {
        projects.push({
            id: i,
            name: `Project ${i}`,
            description: `Description for Project ${i}`,
            tags: ["Tag1", "Tag2"],
            image: i % 2 === 0 ? "/images/try2.jpeg" : "/images/try.jpeg",
            behance: null,
        });
    }

    let active_project = projects[0];

    let show_active_project = true

    const handleClick = () => {
        show_active_project = !show_active_project
        onMount(() => {
            
        })
    }
</script>

<section class="full-width content-grid main">
    <div class="active-project" class:unfocus={!show_active_project}>
        <figure>
            <img src="{active_project.image}" alt="{active_project.name}" />
        </figure>
        <div class="details">
            <h2>
                <a href="/portfolio/{active_project.id}"
                    >{active_project.name.toUpperCase()}
                    <span class="link-arrow">
                        <svg
                            width="25"
                            height="25"
                            viewBox="0 0 25 25"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M0.666667 19C0.666667 21.9455 3.05448 24.3333 6 24.3333C8.94552 24.3333 11.3333 21.9455 11.3333 19C11.3333 16.0545 8.94552 13.6667 6 13.6667C3.05448 13.6667 0.666667 16.0545 0.666667 19ZM25 1C25 0.447715 24.5523 0 24 0H15C14.4477 0 14 0.447715 14 1C14 1.55228 14.4477 2 15 2H23V10C23 10.5523 23.4477 11 24 11C24.5523 11 25 10.5523 25 10V1ZM6.70711 19.7071L24.7071 1.70711L23.2929 0.292893L5.29289 18.2929L6.70711 19.7071Z"
                                fill="white"></path>
                        </svg>
                    </span>
                </a>
            </h2>
            <div class="tags">
                <!-- each loop through the tags and put them in p tags -->
                {#each active_project.tags as tag}
                    <span>{tag.toUpperCase()}</span>
                {/each}
            </div>
            <div class="links">
                {#if active_project.behance}
                    <IconButton icon='<i class="fa-brands fa-behance"></i>' href={active_project.behance} text="Behance" alt_text="View on Behance"/>
                {/if}
            </div>
        </div>
    </div>
    <div class="all breakout" class:unfocus={show_active_project}>
        {#each projects as project}
            <a role="button" href="#." class="project" class:unfocus={show_active_project} on:click={() => {
                    active_project = project;
                    show_active_project = !show_active_project
                }}>
                <img src="{project.image}" alt="{project.name}" />
                <h3>{project.name.toUpperCase()}</h3>
            </a>
        {/each}
    </div>
    <div class="action-bar">
        <button on:click="{handleClick}">VIEW ALL</button>
    </div>
</section>

<style lang="scss">
    .main {
        position: relative;
        margin-top: 10vh;
        height: 90vh;
    }
    .active-project {
        display: grid;
        grid-template-columns: 1fr 1fr;

        justify-items: center;
        align-items: center;
        transition: all .8s ease-in-out;

        &.unfocus {
            filter: blur(30px);
            opacity: .3;
        }

        figure {
            width: 100%;
            border-radius: 1.5rem;
            overflow: hidden;

            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }

        .details {
            h2 {
                
                a {
                    display: flex;
                    gap: 4rem;
                    align-items: center;
                    color: var(--clr-white);
                    font-size: 3rem;
                    .link-arrow {
                        display: grid;
                        place-content: center;
                        background-color: var(--clr-dark-500);
                        aspect-ratio: 1/1;
                        height: 100%;
                        padding: 1rem;
                        border-radius: 5rem;
                    }
                }
            }
            .tags {
                color: var(--clr-dark-400);
                margin-top: 4rem;
                display: grid;
            }
            .links {
                margin-top: 2rem;
            }
        }
    }

    .all{
        display: grid;
        column-gap: 1rem;
        row-gap: 4rem;
        align-items: center;
        align-content: center;
        grid-template-columns: repeat(auto-fill, minmax(10rem, 1fr));
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;

        &.unfocus {
            pointer-events: none;
        }

        
        .project{
            display: grid;
            transition: all .5s ease-in-out;
            cursor: pointer;
            
            &.unfocus {
                filter: blur(30px);
                opacity: 0;
                transform: translateY(10rem);
            }

            &:hover {
                transform: scale(1.1);
            }

            img {
                width: 7rem;
                height: 9rem;
                object-fit: cover;
                border-radius: 1rem;
            }

            h3 {
                font-size: .75rem;
                color: var(--clr-dark-200);
            }
        }
    }

    .iframe {
        position: absolute;
        inset: 0;
        width: 100%;
        height: 90vh;
    }

    .action-bar {
        display: grid;
        place-content: center;
        z-index: 2;

        button {
            background-color: transparent;
            border: 1px solid var(--clr-dark-600);
            color: var(--clr-dark-300);
            padding: .5rem 1.5rem;
            border-radius: .25rem;
            cursor: pointer;

            &:hover {
                color: var(--clr-white);
            }
        }
    }
</style>
