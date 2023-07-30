// vite.config.js
import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  root: "src",
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/index.html'),
        care: resolve(__dirname, 'src/care/index.html'),
        stack: resolve(__dirname, 'src/stack/index.html'),
      },
    },
  },
})