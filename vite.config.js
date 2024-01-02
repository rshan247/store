import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// const rootDir = 'src';

// https://vitejs.dev/config/
export default defineConfig({
  // root: rootDir,
  plugins: [react()],
})
