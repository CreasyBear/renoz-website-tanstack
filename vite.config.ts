import { defineConfig } from 'vite'
import { devtools } from '@tanstack/devtools-vite'
import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import viteReact from '@vitejs/plugin-react'
import viteTsConfigPaths from 'vite-tsconfig-paths'
import tailwindcss from '@tailwindcss/vite'
import { nitro } from 'nitro/vite'

export default defineConfig({
  plugins: [
    devtools(),
    viteTsConfigPaths({ projects: ['./tsconfig.json'] }),
    tailwindcss(),
    tanstackStart(),
    nitro(),
    viteReact(),
  ],
  nitro: {
    preset: 'vercel',
    externals: {
      inline: [/^@tanstack\/.*/],
    },
  },
  ssr: {
    noExternal: true,
  },
  server: {
    fs: {
      allow: ['../../'],
    },
  },
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'react/jsx-runtime',
      '@tanstack/react-router',
      'framer-motion',
      'lucide-react',
    ],
    exclude: ['@tanstack/react-start'],
  },
})