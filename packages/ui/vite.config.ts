import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'path'

export default defineConfig(({ command }) => {
  const isDev = command === 'serve'
  
  return {
    plugins: [
      react(),
      tailwindcss(),
      !isDev && dts({
        insertTypesEntry: true,
      }),
    ].filter(Boolean),
    css: {
      devSourcemap: true,
    },
    resolve: {
      alias: {
        '@': resolve(__dirname, './src'),
      },
    },
    build: isDev ? undefined : {
      lib: {
        entry: resolve(__dirname, 'src/index.ts'),
        name: 'ValoroUI',
        formats: ['es', 'cjs'],
        fileName: (format) => `index.${format}.js`,
      },
      rollupOptions: {
        external: ['react', 'react-dom'],
        output: {
          globals: {
            react: 'React',
            'react-dom': 'ReactDOM',
          },
        },
      },
    },
    server: isDev ? {
      port: 3001,
      open: true,
    } : undefined,
  }
})
