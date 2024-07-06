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
            rename: { prefix: `${deviceType}-`, suffix: `@${density}x` },
            width: ({ width }) => Math.ceil(width * density / RAW_DENSITY),
            jpegOptions: { progressive: true },
          }
        )
      }
    }

    return { formats }
  }

  const contentPath = `${raws}images/content/*.{png,jpg,jpeg}`;
  const decorsPath = `${raws}images/decors/*.{png,jpg,jpeg}`;

  const streams = DEVICE_TYPES.map(deviceType => {
    const folderName = (() => {
      switch (deviceType) {
        case 'mobile':
          return 'mobile';
        case 'tablet':
          return 'tablet';
        case 'desktop':
          return 'desktop';
        default:
          throw new Error(`Invalid device type: ${deviceType}`);
      }
    })();

    return src(contentPath)
      .pipe(sharp(createOptionsFormat(deviceType)))
      .pipe(dest(`${source}images/content/${folderName}`))
      .pipe(src(decorsPath))
      .pipe(sharp(createOptionsFormat(deviceType)))
      .pipe(dest(`${source}images/decors/${folderName}`))
  });

  return streams;
}
