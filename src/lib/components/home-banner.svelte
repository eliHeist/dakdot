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


        const circles = backdrop.querySelectorAll('.circle')
        const circlesArray = Array.from(circles);
        
        let circle_count = 0

        let size = 8
        let size_step = 0
        let scale = 1
        let scale_step = 0.2
        let color = 200
        let step = (200-3) / circles.length
        step = Math.floor(step);

        let y = 0
        let y_step = 0

        let z_index = circles.length

        circlesArray.reverse().forEach(circle => {
            circle_count++ // increment circle counter

            color-=step // decrement color value to make it a darker grey

            size+=size_step
            
            if (circle_count < 5) {
                size_step+=.1
            } else if (circle_count < 15) {
                size_step+=.08
                y_step+=.2
            } else if (circle_count < 20) {
                size_step+=.3
                y_step+=.0001
            } else {
                size_step+=.7
                y_step-=.5
            }
            y+=y_step
            
            let options = {
                height: `${size}rem`, 
                width: `${size}rem`, 
                y: `-${y}%`,
                z: z_index--,
                outlineColor: `rgba(${color}, ${color}, ${color}, 1)`,
            }
            if (circle_count % 2 !== 0) {
                options['backgroundColor'] = `rgba(${color}, ${color}, ${color}, 1)`
            }


            gsap.set(circle, options)
            console.log(z_index)
        });
    });
</script>

<div id="backdrop" class="backdrop full-width">
    <div class="container">
        <div class="circle dot"></div>
        <div class="circle"></div>
    </div>
</div>

<style lang="scss">
    .backdrop {
        height: 100vh;
        position: relative;
        overflow: hidden;

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
                
                &:nth-of-type(odd){
                    background-color: var(--clr-dark-950);
                }
                &:nth-of-type(even){
                    background-color: var(--clr-white);
                }

                // &:last-of-type {
                //     background-color: var(--clr-dark-950);
                // }
            }
        }

    }
</style>
