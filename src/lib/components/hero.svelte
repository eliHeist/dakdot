<script lang="ts">
    import { onMount } from "svelte";
    import * as THREE from "three";
    import { TextGeometry } from "three/addons/geometries/TextGeometry.js";
    import { FontLoader } from "three/addons/loaders/FontLoader.js";
    // import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

    // Tile definition
    type Tile = {
        text: string;
        text_color: string;
        cube_color: string;
    };

    // Array of tiles
    const tiles: Tile[] = [
        { text: "Brand Design", text_color: "#FF5733", cube_color: "#931030" },
        { text: "Tile 2", text_color: "#33FF57", cube_color: "#444444" },
        { text: "Tile 3", text_color: "#3357FF", cube_color: "#555555" },
        { text: "Tile 4", text_color: "#F33FFF", cube_color: "#666666" },
        { text: "Tile 5", text_color: "#FFFF33", cube_color: "#777777" },
        { text: "Tile 6", text_color: "#FF33FF", cube_color: "#888888" },
    ];

    let canvasEl: HTMLCanvasElement;
    let scene: THREE.Scene,
        camera: THREE.PerspectiveCamera,
        renderer: THREE.WebGLRenderer;
    let tilesMeshes: THREE.Mesh[] = [];
    let pointLight: THREE.PointLight;
    let currentIndex = 0;
    const circle_rad = 35; // Distance of tiles from the camera

    // Function to initialize Three.js scene, camera, renderer, and tiles
    function init() {
        // Create the scene
        scene = new THREE.Scene();

        // Set up the camera
        camera = new THREE.PerspectiveCamera(
            55,
            window.innerWidth / window.innerHeight,
            0.1,
            1000
        );
        camera.position.set(0, 5, 0);
        // camera.position.z = 20;

        // Set up the renderer
        renderer = new THREE.WebGLRenderer({ canvas: canvasEl });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(window.devicePixelRatio);

        // Create a point light at the camera position
        pointLight = new THREE.PointLight(0xfffff0, 40, 100);
        pointLight.position.set(0, 0, 0);
        scene.add(pointLight);

        const spotLight = new THREE.SpotLight(0xffffff, 3000, 100);
        spotLight.position.set(0, 5, 10);
        // spotLight.rotateY(THREE.MathUtils.degToRad(45));
        spotLight.angle = THREE.MathUtils.degToRad(30); // Set spotlight cone angle (30 degrees)
        // spotLight.penumbra = 0.2; // Soft edge of the spotlight
        spotLight.decay = 2; // Light intensity decay over distance
        // spotLight.distance = 100; // Max range of the spotlight
        // spotLight.castShadow = true;
        scene.add(spotLight);

        const spotLightHelper = new THREE.SpotLightHelper(spotLight);
        // scene.add(spotLightHelper);

        // const loader = new GLTFLoader();
        // loader.load( '3d/rectangular_base.glb', function ( gltf ) {
        //     gltf.scene.position.set( 0, 0, 15 );
        //     scene.add( gltf.scene );
        // }, undefined, function ( error ) {
        //     console.error( error );
        // });
        let circle_x = 0;
        let circle_z = 0;
        let y_position = 0;
        // Create tiles and add them to the scene
        createTiles(tiles, circle_x, circle_z, circle_rad, y_position);

        // Start the animation loop
        animate();

        // Handle window resize
        window.addEventListener("resize", onWindowResize);
    }

    // creating tiles
    function createTiles(
        tile_list: Tile[],
        circle_x: number,
        circle_z: number,
        circle_rad: number,
        y_position: number
    ) {
        const mid_angle = 360 / tile_list.length;
        let tile_angle = -90;
        tile_list.forEach((tile) => {
            // Calculate tile position and rotation
            const tile_y_revolution = THREE.MathUtils.degToRad(tile_angle); // Convert degrees to radians
            const tile_x = circle_x + circle_rad * Math.cos(tile_y_revolution);
            const tile_z = circle_z + circle_rad * Math.sin(tile_y_revolution);

            // Create tile geometry
            const tileGeometry = new THREE.BoxGeometry(15, 1, 10);
            const tileMaterial = new THREE.MeshStandardMaterial({
                color: tile.cube_color,
                emissive: tile.cube_color,
                emissiveIntensity: 0.01,
            });
            const tileMesh = new THREE.Mesh(tileGeometry, tileMaterial);

            // Set tile position and rotation
            tileMesh.position.set(tile_x, y_position, tile_z);
            tileMesh.rotation.y = tile_angle + 90;
            scene.add(tileMesh); // Add tile to scene

            // Create text geometry and set position and rotation
            let textMesh = createTextMesh(tile.text, tile.text_color);
            // console.log(textMesh);
            if (textMesh) {
                textMesh.position.set(tile_x, y_position + 3, tile_z); // Offset text above tile
                // textMesh.rotation.y = tile_y_revolution - 90;
                scene.add(textMesh); // Add text to scene
            }
        });

        // Increment tile angle by mid_angle
        tile_angle += mid_angle;
    }

    // Helper function to create text geometry
    function createTextMesh(text: string, color: string): THREE.Mesh {
        const loader = new FontLoader();
        const font = loader.load("https://threejs.org/examples/fonts/helvetiker_regular.typeface.json")
        const textGeometry = new TextGeometry(text, {
            font: font,
            size: 5,
            height: 1,
        });
        const textMaterial = new THREE.MeshBasicMaterial({
            color: color,
        });
        return new THREE.Mesh(textGeometry, textMaterial);
    }

    // Handle window resizing
    function onWindowResize() {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    }

    // Animation loop
    function animate() {
        requestAnimationFrame(animate);

        // // Hovering text effect
        // tilesMeshes.forEach((tileMesh, index) => {
        //     const textPosition = tileMesh.position.clone();
        //     textPosition.y += 1 + Math.sin(Date.now() * 0.002 + index) * 0.2; // Hover effect
        //     createTextMesh(textPosition, tiles[index].text, tiles[index].text_color);
        // });

        // // Rotate tiles every 2 seconds
        // if (Date.now() % 2000 < 50) {
        //     currentIndex = (currentIndex + 1) % tiles.length;
        //     rotateTiles();
        // }

        // // Update point light position to follow the camera
        // pointLight.position.copy(camera.position);

        // Render the scene
        renderer.render(scene, camera);
    }

    // Set up Three.js scene and listeners on mount
    onMount(() => {
        init();
    });
</script>

<div class="h-screen">
    <!-- Canvas element for Three.js rendering -->
    <canvas bind:this="{canvasEl}"></canvas>
</div>

<style>
    canvas {
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
</style>
