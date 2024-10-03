// src/lib/stores/collapseStore.js
import { writable } from 'svelte/store';

// Create a writable store for the collapse state
export const connect_collapse = writable(false);
export const nav_collapse = writable(true);
