<script lang="ts">
    import gsap from "gsap";
    import { onMount } from "svelte";
    import * as THREE from "three";

    onMount(() => {
        // set the sene
        const scene = new THREE.Scene()

        // set the camera
        const camera = new THREE.PerspectiveCamera( 100, window.innerWidth / window.innerHeight, 0.1, 1000 );
        camera.position.set( 0, -.25, 5 );
        
        // set the renderer and canvas
        const canvas = document.querySelector(".webgl") as HTMLCanvasElement;
        const renderer = new THREE.WebGLRenderer({ canvas });
        renderer.setSize( window.innerWidth, window.innerHeight );
        // document.body.appendChild( renderer.domElement );
        
        // set the objects
        const geometry = new THREE.SphereGeometry( 1, 32, 32 );
        const material = new THREE.MeshStandardMaterial( { 
            color: '#ffffff', 
            emissive: 0xffffff, 
            emissiveIntensity: 1 
        } );
        const sphere = new THREE.Mesh( geometry, material );
        // sphere.position.set( 1, -8, 0 );
        scene.add( sphere );
        
        // Create a point light source
        const light = new THREE.PointLight(0xffffff, 2, 5);
        light.position.set(0, 0, .3);
        scene.add(light);

        // Create a function to add toruses forming a tunnel structure
        function createTunnel() {
            const numToruses = 15;
            const torusRadius = 1.2; // Slightly larger than the sphere

            for (let i = 0; i < numToruses; i++) {
                const torusGeometry = new THREE.TorusGeometry(torusRadius, 0.05, 16, 100);
                const torusMaterial = new THREE.MeshStandardMaterial({ color: 0xffffff });
                const torus = new THREE.Mesh(torusGeometry, torusMaterial);
                
                // Position the torus along the camera direction
                torus.position.z = i * .4;
                
                scene.add(torus);
            }
        }

        // Call the function to create the tunnel structure
        createTunnel();

        // resize on viewport change
        function onWindowResize() {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize( window.innerWidth, window.innerHeight );
        }
        window.addEventListener( 'resize', onWindowResize );

        // Create a function to animate the camera movement
        function animateCamera() {
            const duration = 16;
            // Create a timeline for the camera movement
            const timeline = gsap.timeline({ repeat: -1 });

            // Move the camera forward to position 4
            timeline.to(camera.position, { z: 4, duration: duration });

            // Delay the camera movement back to position 5
            timeline.to(camera.position, { z: 5, duration: duration });
        }

        function animateSphere() {
            const duration = 16;
            // Create a timeline for changing the color from #ffffff to #ff0000
            const timeline = gsap.timeline({ repeat: -1 });

            // Change the color from #ffffff to #ff0000
            timeline.to(material.emissive, { r: 0.1, g: 0.1, b: 1, duration: duration });

            // Change the color from #ff0000 to #ffffff
            timeline.to(material.emissive, { r: 1, g: 1, b: 1, duration: duration });
        }
        animateSphere()

        function animateLight() {
            // create a timeline for changing the color of the light from #ffffff to #2222ff
            const timeline = gsap.timeline({ repeat: -1 });
            // change the color from #ffffff to #2222ff
            timeline.to(light.color, { r: 0.5, g: 0.5, b: 1, duration: 16 });
            // change the color from #2222ff to #ffffff
            timeline.to(light.color, { r: 1, g: 1, b: 1, duration: 16 });
        }
        animateLight()

        // Call the function to start the camera animation
        animateCamera();

        // animate to display the scene
        function animate() {
            requestAnimationFrame( animate );

            // Rotate the sphere
            // sphere.rotation.x += 0.01;
            // sphere.rotation.y += 0.01;

            renderer.render(scene, camera);
        }
        animate();
    });
</script>

<div class="backdrop full-width">
<canvas class="webgl"></canvas>
</div>

<style lang="scss">
    .backdrop{
        height: 100vh;
        width: 100vw;
        overflow: hidden;

        .webgl{
            width: 100%;
            height: 100%;
            overflow: hidden;
            position: sticky;
            top: 0;
            z-index: -1;
        }
    }   
</style>