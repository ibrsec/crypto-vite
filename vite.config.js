import {defineConfig} from 'vite';

export default defineConfig({
    base: '/crypto-vite/',
    css: {
        preprocessorOptions: {
          scss: {
            additionalData: `@import "./scss/style.scss";` // global SCSS dosyalarınızı burada ekleyin
          }
        }
      }
})