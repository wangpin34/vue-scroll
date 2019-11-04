import fs from 'fs'
import path from 'path'
import buble from 'rollup-plugin-buble'
import sizes from 'rollup-plugin-sizes'
import flow from 'rollup-plugin-flow-no-whitespace'
import cjs from 'rollup-plugin-commonjs'
import node from 'rollup-plugin-node-resolve'
import replace from 'rollup-plugin-replace'
import cleanup from 'rollup-plugin-cleanup'
import strip from 'rollup-plugin-strip'

const resolve = _path => path.resolve(__dirname, '../', _path)

const pkg = fs.readFileSync(resolve('package.json'))

const version = process.env.VERSION || pkg.version
const banner =
`/**
  * vue-scroll v${version}
  * (c) ${new Date().getFullYear()} Wang Pin
  * @license MIT
  */`



module.exports = [
  // browser dev
  {
    file: resolve('dist/vue-scroll.js'),
    format: 'umd',
    env: 'development'
  },
  {
    file: resolve('dist/vue-scroll.min.js'),
    format: 'umd',
    env: 'production'
  },
  {
    file: resolve('dist/vue-scroll.common.js'),
    format: 'cjs'
  },
  {
    file: resolve('dist/vue-scroll.esm.js'),
    format: 'es'
  }
].map(genConfig)

function genConfig (opts) {
  const config = {
    input: {
      input: resolve('src/index.js'),
      plugins: [
        flow(), // Remove flow type
        node(),
        cjs(),
        replace({
          __VERSION__: version
        }),
        buble(),
        sizes(),
        cleanup(),
        strip({
          // set this to `false` if you don't want to
          // remove debugger statements
          debugger: true,

          // defaults to `[ 'console.*', 'assert.*' ]`
          functions: [ 'console.log', 'assert.*', 'debug', 'alert' ],

          // set this to `false` if you're not using sourcemaps –
          // defaults to `true`
          sourceMap: true
        })
      ]
    },
    output: {
      file: opts.file,
      format: opts.format,
      banner,
      name: 'VueScroll'
    }
  }

  if (opts.env) {
    config.input.plugins.unshift(replace({
      'process.env.NODE_ENV': JSON.stringify(opts.env)
    }))
  }

  return config
}
