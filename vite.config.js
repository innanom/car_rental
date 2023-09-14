import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/car_rental",
  css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "./src/styles/_shared.scss";',
        },
      },
    },
})
