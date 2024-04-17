<script lang="ts">
    import { onMount } from "svelte";


    onMount(() => {
        const backdrop = document.querySelector("#backdrop") as HTMLDivElement;
        console.log(backdrop)
    })
</script>

<div id="backdrop">
    <div class="circle"></div>
    <div class="circle"></div>
    <div class="circle"></div>
    <div class="circle"></div>
    <div class="circle"></div>
    <div class="circle"></div>
    <div class="circle"></div>
    <div class="circle"></div>
    <div class="circle"></div>
    <div class="circle"></div>
</div>

<style lang="scss">
    #backdrop{
        height: 80vh;
        position: relative;

        .circle{
            aspect-ratio: 1/1;
            min-width: 3rem;
            background-color: rgba(255, 255, 255, 0.089);
            position: absolute;
        }
    }
</style>