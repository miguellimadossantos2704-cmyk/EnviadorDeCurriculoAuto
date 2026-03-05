import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Adicionando a base para o GitHub Pages reconhecer a pasta do repositório
  base: '/EnviadorDeCurriculoAuto/',
})
