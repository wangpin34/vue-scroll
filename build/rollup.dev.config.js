// rollup.config.js
import path from 'path';

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/vue-scroll.dev.js',
    format: 'cjs'
  },
  external: [
    'lodash/isObject',
    'lodash/isFunction',
    'lodash/isInteger',
    'lodash/isFinite',
    'lodash/debounce',
    'lodash/throttle',
  ]
}
