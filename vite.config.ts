import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
    plugins: [sveltekit()],
    optimizeDeps: {
        include: ['gsap'],
    },
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `@use "sass:math";` // Use modern syntax if needed
            }
        }
    }
});
