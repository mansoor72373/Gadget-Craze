// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    base: '/Gadget-Craze/', // Correct base path
    plugins: [react()],
});