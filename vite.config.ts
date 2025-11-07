import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteStaticCopy } from 'vite-plugin-static-copy'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: 'admin',
          dest: ''
        },
        {
          src: 'content',
          dest: ''
        },
        // Copy the public folder if it exists (for CMS media uploads)
        {
          src: 'public',
          dest: '',
          // This prevents build errors if the 'public' folder doesn't exist yet.
          // The CMS will create it when an image is first uploaded.
          errorOnExist: false 
        }
      ]
    })
  ],
})
