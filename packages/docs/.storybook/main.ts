import type { StorybookConfig } from '@storybook/react-vite';
import { mergeConfig } from 'vite';
import { dirname } from "path";
import { fileURLToPath } from "url";
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';


function getAbsolutePath(value: string): string {
  return dirname(fileURLToPath(import.meta.resolve(`${value}/package.json`)))
}

const config: StorybookConfig = {
  "stories": [
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": [],
  "framework": {
    "name": getAbsolutePath('@storybook/react-vite'),
    "options": {}
  },
  async viteFinal(config) {
    return mergeConfig(config, {
      mode: 'development',
      plugins: [
        react({
          jsxRuntime: 'automatic',
        }),
        tailwindcss(),
      ],
      define: {
        ...config.define,
        'process.env.NODE_ENV': JSON.stringify('development'),
        __DEV__: true,
      },
      optimizeDeps: {
        include: ['react', 'react-dom'],
        esbuildOptions: {
          define: {
            global: 'globalThis',
          },
        },
      },
      resolve: {
        dedupe: ['react', 'react-dom'],
      },
    });
  },
};

export default config;