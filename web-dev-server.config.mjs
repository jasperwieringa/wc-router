import { hmrPlugin, presets } from '@open-wc/dev-server-hmr';
import rollupPostcss from 'rollup-plugin-postcss';
import { fromRollup } from '@web/dev-server-rollup';

const postcss = fromRollup(rollupPostcss);

/** Use Hot Module replacement by adding --hmr to the start command */
const hmr = process.argv.includes('--hmr');

export default /** @type {import('@web/dev-server').DevServerConfig} */ ({
  open: '/',
  watch: !hmr,
  /** Resolve bare module imports */
  nodeResolve: {
    exportConditions: ['browser', 'development'],
  },

  /** Set appIndex to enable SPA routing */
  appIndex: 'index.html',

  mimeTypes: {
    '**/*.css': 'js',
  },
  plugins: [
    postcss({ include: ['**/*.css'], modules: true }),
    hmr && hmrPlugin({ exclude: ['**/*/node_modules/**/*'], presets: [presets.litElement] }),
  ],
});
