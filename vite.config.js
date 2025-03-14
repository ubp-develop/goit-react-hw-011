import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/goit-react-hw-011/', // Вказуємо базовий шлях для GitHub Pages
});
