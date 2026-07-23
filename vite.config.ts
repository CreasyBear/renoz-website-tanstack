import { defineConfig } from 'vite'
import { devtools } from '@tanstack/devtools-vite'
import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import viteReact from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { nitro } from 'nitro/vite'

export default defineConfig({
  plugins: [
    devtools({ eventBusConfig: { enabled: false } }),
    tailwindcss(),
    tanstackStart(),
    nitro(),
    viteReact(),
  ],
  nitro: {
    preset: 'vercel',
    noExternals: [/^@tanstack\/.*/],
  },
  ssr: {
    external: [
      'react',
      'react-dom',
      'react/jsx-runtime',
      'react/jsx-dev-runtime',
    ],
    noExternal: [/^@tanstack\//],
  },
  server: {
    fs: {
      allow: ['../../'],
    },
  },
  resolve: {
    tsconfigPaths: true,
  },
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      '@tanstack/react-router',
      'framer-motion',
      'lucide-react',
    ],
    exclude: ['@tanstack/react-start'],
  },
})
