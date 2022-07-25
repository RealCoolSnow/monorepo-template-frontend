import { join } from 'path'
import Vue from '@vitejs/plugin-vue'
import type { UserConfig } from 'vite'
import ViteComponents from 'vite-plugin-components'
import { viteMockServe } from 'vite-plugin-mock'

const resolve = (dir: string) => join(__dirname, dir)

// https://vitejs.dev/config/

const config: UserConfig = {
  resolve: {
    alias: {
      '@': resolve('src'),
    },
  },
  build: {
    target: 'es2015',
    // vite3 use already made esbuild the default minifier for both JS and CSS
    // https://vitejs.dev/blog/announcing-vite3.html#bundle-size-reduction
    /*
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true, // 所有console
        // pure_funcs: ['console.log'], // 单独指定
        drop_debugger: true,
      },
    }, */
    /* 如需分包时开启 */
    /*
    rollupOptions: {
      output: {
        // 方式-1:所有依赖都分包
        // manualChunks(id) {
        //   if (id.includes('node_modules'))
        //     return id.toString().split('node_modules/')[1].split('/')[0].toString()
        // },
        // 方式-2:只对大的依赖分包
        manualChunks: {
          abc: ['abc'], // 要分包的依赖
        },
      },
    }, */
  },
  plugins: [
    Vue(),
    ViteComponents(),
    viteMockServe({
      mockPath: './src/mock',
      watchFiles: true,
      localEnabled: process.env.NODE_ENV === 'development',
    }),
  ],
  server: {
    port: 8888,
    proxy: {
      '/api/': {
        target: 'https://url.devserver/',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, ''),
      },
    },
  },
}

export default config
