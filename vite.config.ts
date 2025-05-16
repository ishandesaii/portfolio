import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// vite.config.ts
export default defineConfig({
  base: "/portfolio/",
  plugins: [react()],
  // ...rest of config
});

