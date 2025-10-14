import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from 'tailwindcss'
import tailwindcssAnimate from 'tailwindcss-animate'

export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {
      plugins: [
        tailwindcss,
        tailwindcssAnimate,
      ],
    },
  },
})
