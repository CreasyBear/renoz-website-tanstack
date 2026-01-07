import { defineConfig } from 'vite'
import { devtools } from '@tanstack/devtools-vite'
import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import viteReact from '@vitejs/plugin-react'
import viteTsConfigPaths from 'vite-tsconfig-paths'
import tailwindcss from '@tailwindcss/vite'
import { nitro } from 'nitro/vite'

const config = defineConfig({
  plugins: [
    devtools(),
    nitro({
      output: {
        dir: 'dist'
      },
      compressPublicAssets: true,
    }),
    // this is the plugin that enables path aliases
    viteTsConfigPaths({
      projects: ['./tsconfig.json'],
    }),
    tailwindcss(),
    tanstackStart(),
    viteReact(),
  ],
  // Optimize dev server
  server: {
    fs: {
      // Allow serving files from one level up to the project root
      allow: ['../../']
    }
  },
  // Enable gzip compression
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'react/jsx-runtime',
      '@tanstack/react-router',
      'framer-motion',
      'lucide-react'
    ],
    exclude: [
      '@tanstack/react-start' // Let TanStack handle this
    ]
  },
  build: {
    outDir: 'dist'
  }
})

export default config
