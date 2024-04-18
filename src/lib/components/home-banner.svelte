<script lang="ts">
    import gsap from "gsap";
    import { onMount } from "svelte";

    onMount(() => {
        const backdrop = document.querySelector("#backdrop") as HTMLDivElement;
        const container = backdrop.querySelector(".container") as HTMLDivElement;
        // Find the last child of the container
        const lastChild = container.lastElementChild as HTMLDivElement;

        // Duplicate the last child 50 times
        for (let i = 0; i < 30; i++) {
        const duplicate = lastChild.cloneNode(true); // Clone the last child including its child nodes
            container.appendChild(duplicate);
        }


        const classes = backdrop.querySelectorAll('.circle')
        console.log(classes)
        let size = 8
        let size_step = 0
        let scale = 1
        let scale_step = 0.2
        let color = 200
        let step = (200-3) / classes.length
        step = Math.floor(step);

        let y = 0
        let y_step = 4

        classes.forEach(circle => {
            scale+=1+scale_step
            color-=step
            scale_step+=0.1
            size+=(size_step+1)
            size_step+=0.2
            y+=y_step
            y_step -= (4/(classes.length-15))
            
            gsap.set(circle, {
                height: `${size}rem`, 
                width: `${size}rem`, 
                y: `-${y}%`,
                outlineColor: `rgba(${color}, ${color}, ${color}, 1)`
            })
        });
    });
</script>

<div id="backdrop" class="backdrop">
    <div class="container">
        <div class="circle dot"></div>
        <div class="circle"></div>
    </div>
</div>

<style lang="scss">
    .backdrop {
        height: 80vh;
        position: relative;

        .container {
            position: absolute;
            left: 50%;
            top: 70%;
            transform: translate(-50%, -50%);
            width: 100%;
            height: 100%;
            display: grid;
            place-items: center;
            z-index: 1;
            .circle {
                position: absolute;
                width: 8rem;
                height: 8rem;
                outline: .12rem solid var(--clr-white);
                
                border-radius: 50%;
                transform-origin: center 90%;

                &.dot {
                    background-color: var(--clr-white);
                }
            }
        }

    }
</style>
