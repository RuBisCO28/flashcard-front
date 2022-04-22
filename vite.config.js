import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'

export default ({ mode }) => {
  process.env = {...process.env, ...loadEnv(mode, process.cwd())};

  return defineConfig({
    plugins: [vue()],
    server: {
      proxy: {
        '^/fetch_books': {
          target: `${process.env.VITE_FLASHCARD_API_URL}/books`,
          changeOrigin: true,
          logLevel: "debug",
          rewrite: (path) => path.replace('/fetch_books', '/')
        },
        '^/fetch_sections': {
          target: `${process.env.VITE_FLASHCARD_API_URL}/books`,
          changeOrigin: true,
          logLevel: "debug",
          rewrite: (path) => path.replace('/fetch_sections', '/')
        },
        '^/fetch_section': {
          target: `${process.env.VITE_FLASHCARD_API_URL}/sections`,
          changeOrigin: true,
          logLevel: "debug",
          rewrite: (path) => path.replace('/fetch_section', '/')
        }
      }
    }
  });
}
