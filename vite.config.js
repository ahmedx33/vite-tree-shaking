import { defineConfig } from 'vite';
import { visualizer } from 'rollup-plugin-visualizer';

export default defineConfig({
  build: {
    minify: true, // ensure the build is minified for tree shaking
    rollupOptions: {
      output: {
        manualChunks: undefined, // let Rollup decide code splitting
      },
    },
  },
  optimizeDeps: {
    esbuildOptions: {
      treeShaking: true, // explicitly enable tree shaking in esbuild
    },
  },
  plugins: [
    visualizer({
      filename: 'bundle-analysis.html', // output file for the analysis
      open: true, // opens the analysis report after building
    }),
  ],
});
