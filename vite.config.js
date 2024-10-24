import { defineConfig } from 'vite';
import chokidar from 'chokidar';
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})

