import fs from 'fs'
import path from 'path'
import zlib from 'zlib'
import uglify from 'uglify-js'
import * as rollup from 'rollup'
import configs from './configs'

async function build (builds) {
  try {
    for (let i = 0; i < builds.length; i ++) {
      await buildEntry(builds[i])
    }
  } catch (err) {
    console.error(`err occurs: ${err}`)
  }
}

async function buildEntry ({ input: inputOptions, output: outputOptions }) {
  try {
    const isProd = /min\.js$/.test(outputOptions.file)
    const bundle = await rollup.rollup(inputOptions)
    const { output } = await bundle.generate(outputOptions)
    for (const chunkOrAsset of output) {
      if (chunkOrAsset.type === 'chunk') {
        const code = chunkOrAsset.code
        if (isProd) {
          var minified = uglify.minify(code, {
            output: {
              preamble: outputOptions.banner,
              /* eslint-disable camelcase */
              ascii_only: true
              /* eslint-enable camelcase */
            }
          }).code
          return write(outputOptions.file, minified, true)
        } else {
          return write(outputOptions.file, code)
        }
      }
    }
  } catch (err) {
    throw err
  }
}

function write (dest, code, zip) {
  return new Promise((resolve, reject) => {
    function report (extra) {
      console.log(blue(path.relative(process.cwd(), dest)) + ' ' + getSize(code) + (extra || ''))
      resolve()
    }

    fs.writeFile(dest, code, err => {
      if (err) return reject(err)
      if (zip) {
        zlib.gzip(code, (err, zipped) => {
          if (err) return reject(err)
          report(' (gzipped: ' + getSize(zipped) + ')')
        })
      } else {
        report()
      }
    })
  })
}

function getSize (code) {
  return (code.length / 1024).toFixed(2) + 'kb'
}

function logError (e) {
  console.log(e)
}

function blue (str) {
  return '\x1b[1m\x1b[34m' + str + '\x1b[39m\x1b[22m'
}

if (!fs.existsSync('dist')) {
  fs.mkdirSync('dist')
}

(async () => {
  try {
    await build(Object.keys(configs).map(key => configs[key]))
  } catch (err) {
    console.error(err)
  }
})()

