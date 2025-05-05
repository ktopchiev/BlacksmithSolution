import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: '../Server/Blacksmith.UI/wwwroot'
  },
  server: {
    port: 3000,
  },
});
