import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server:{
    proxy:{
      '/info': 'http://localhost:4518/',
      '/age': 'http://localhost:4518/',
    },
  },
  plugins: [react()],
})
