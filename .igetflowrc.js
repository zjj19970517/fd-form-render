const path = require('path');

module.exports = {
  plugins: ['rollup-bundler'],
  configs: {
    rollupBundler: {
      bundlerScene: 'vue_component_bundler',
      bundlerOption: {
        projectDir: path.resolve(__dirname, '.'),
        inputFiles: 'packages/{projectName}/src/index.ts',
        outputDirs: 'packages/{projectName}/dist',
        outputFormats: ['esm', 'commonjs'],
        vueVersion: '2',
        vue2: {
          jsx: true,
          compositionAPI: false
        },
        babel: {
          include: ['**/packages/**']
        },
        postcss: {
          modules: true,
        }
      }
    },
  },
};
