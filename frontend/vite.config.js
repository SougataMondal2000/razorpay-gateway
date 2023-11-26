import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  fonts: {
    google: {
      families: {
        Mulish: {
          weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
        },
      },
    },
  },
  // build: {
  //   manifest: true,
  //   rollupOptions: {
  //   input: './src/main.jsx',
  //   },
  //   },
  //   server: {
  //   proxy: {
  //   '/api': {
  //   target: 'http://localhost:3001',
  //   changeOrigin: true,
  //   },
  //   },
  //   },
})

