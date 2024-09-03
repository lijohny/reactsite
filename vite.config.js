import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.png', '**/*.PNG'],
  resolve: {
    alias: {
      '@assets': resolve(__dirname, 'src/assets'), // Alias for the assets folder
      '@components': resolve(__dirname, 'src/Component'), // Alias for the components folder
    },
  },
});
