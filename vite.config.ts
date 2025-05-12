import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import path from "path"
// import tailwindcss from "@tailwindcss/vite"
import rollupNodePolyFill from "rollup-plugin-polyfill-node"
import { NodeGlobalsPolyfillPlugin } from "@esbuild-plugins/node-globals-polyfill"

export default defineConfig({
  // plugins: [react(), tailwindcss()],
  plugins: [react()],

  resolve: {
    alias: [
      { find: "@", replacement: path.resolve(__dirname, "src") },
      { find: "buffer", replacement: "buffer" }, // 👈 required for Cognito
    ],
  },
  optimizeDeps: {
    esbuildOptions: {
      define: {
        global: "globalThis", // 👈 critical for `amazon-cognito-identity-js`
      },
      plugins: [
        NodeGlobalsPolyfillPlugin({
          buffer: true,
          process: true,
        }),
      ],
    },
  },
  build: {
    rollupOptions: {
      plugins: [rollupNodePolyFill()],
    },
  },
})
