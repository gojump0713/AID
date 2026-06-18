import { defineConfig } from 'vite'
import { resolve } from 'node:path'

// 보고용 정적 사이트 — 멀티페이지(메인 보고 + AID 사업소개), 상대 경로 배포
export default defineConfig({
  root: '.',
  base: './',
  server: {
    port: 5173,
    open: true,
    host: true,
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    assetsInlineLimit: 0,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        regions: resolve(__dirname, 'regions.html'),
        media: resolve(__dirname, 'media.html'),
      },
    },
  },
})
