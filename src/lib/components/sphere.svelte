<script lang="ts">
    import gsap from "gsap";
    import { onMount } from "svelte";
    import * as THREE from "three";

    onMount(() => {
        const scene = new THREE.Scene()
        const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

        const renderer = new THREE.WebGLRenderer();
        renderer.setSize( window.innerWidth, window.innerHeight );
        document.body.appendChild( renderer.domElement );
    });
</script>

<div class="backdrop full-width">

</div>

<style>
    .backdrop{
        height: 100vh;
        width: 100vw;
        overflow: hidden;
    }   
</style>