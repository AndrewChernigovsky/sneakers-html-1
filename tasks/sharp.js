import { config } from './../gulp-config.js'

const { src, dest } = config.gulp
const { raws, source } = config.paths
const { sharp } = config.tasks

export async function optimizeRaster() {
  const RAW_DENSITY = 2
  const TARGET_FORMATS = [undefined, 'webp']
  const DEVICE_TYPES = ['mobile', 'tablet', 'desktop']
  const DENSITIES = [1, 2]

  function createOptionsFormat(deviceType) {
    const formats = []

    for (const format of TARGET_FORMATS) {
      for (const density of DENSITIES) {
        formats.push(
          {
            format,
            rename: { prefix: `${deviceType}_`, suffix: `@${density}x` },
            width: ({ width }) => Math.ceil(width * density / RAW_DENSITY),
            jpegOptions: { progressive: true },
          }
        )
      }
    }

    return { formats }
  }

  const streams = DEVICE_TYPES.map(deviceType => {
    return src(`${raws}images/**/*.{png,jpg,jpeg}`)
      .pipe(sharp(createOptionsFormat(deviceType)))
      .pipe(dest(`${source}images/${deviceType}`))
  })

  return streams
}
