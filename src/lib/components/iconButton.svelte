<script lang="ts">
    export let icon:any = `<i class="fa-brands fa-github"></i>`;

    export let text = "github";
    export let href = '#';
</script>

<a href="{href}">
    <div class="wrapper">
        <div class="icon-wrapper">
            {@html icon}
        </div>
        <div class="text-wrapper">
            <span class="side front">{text}</span>
        </div>
    </div>
</a>

<style lang="scss">
    .wrapper{
        display: flex;
        color: var(--clr-white);
        border: var(--clr-dark-800) 1px solid;
        border-radius: .5rem;
        overflow: hidden;
        width: fit-content;

        --radius: .5rem;
        --padding: .5rem 1rem;

        .icon-wrapper{
            padding: var(--padding);
            background-color: var(--clr-dark-800);
            color: var(--clr-white);
            font-size: 1.15rem;
        }

        .text-wrapper{
            padding: var(--padding);
            transition: background-color .3s ease-in-out;
        }

        &:hover{
            .text-wrapper{
                background-color: var(--clr-dark-900);
            }
        }
    }
</style>
