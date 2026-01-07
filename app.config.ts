import { defineConfig } from '@tanstack/react-start/config'
import viteConfig from './vite.config'

export default defineConfig({
  vite: viteConfig,
  routers: {
    client: {
      entry: './src/router.tsx',
    },
    ssr: {
      entry: './src/router.tsx',
    },
  },
})