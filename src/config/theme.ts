// Importing with @/ causes error because this file is imported by gatsby-config
import { hexToRGB } from '../utils/helpers'

type SingleColorIndex = 'brand' | 'line' | 'shadow'
export type StatusColorIndex = 'success' | 'error'

const grays = [
  '#ffffff',
  '#f8fafc',
  '#f1f5f8',
  '#dae1e7',
  '#b8c2cc',
  '#8795a1',
  '#606f7b',
  '#3d4852',
  '#22292f',
]

type Colors = { [key in SingleColorIndex | StatusColorIndex]: string } & {
  grays: string[]
}

const colors: Colors = {
  brand: '#6cb348',
  grays,
  success: '#6cb348',
  error: '#b34848',
  line: grays[2],
  shadow: grays[8],
}

const theme = {
  colors,
  maxWidth: '64rem',
  vwImageCapWidth: 1138, // 64rem = 1024px. 1024px / 0.9 = 1138
  fontSizes: [12, 14, 16, 18, 20, 24, 30, 36, 48, 60, 72].map(
    s => s / 16 + 'rem',
  ),
  elevations: [
    `0 1px 2px ${hexToRGB(colors.shadow, 0.24)},` +
      `0 1px 3px ${hexToRGB(colors.shadow, 0.12)}`,
    `0 2px 4px ${hexToRGB(colors.shadow, 0.12)},` +
      `0 3px 6px ${hexToRGB(colors.shadow, 0.15)}`,
    `0 3px 6px ${hexToRGB(colors.shadow, 0.1)},` +
      `0 5px 10px ${hexToRGB(colors.shadow, 0.15)}`,
    `0 5px 10px ${hexToRGB(colors.shadow, 0.05)},` +
      `0 10px 20px ${hexToRGB(colors.shadow, 0.15)}`,
    `0 20px 40px ${hexToRGB(colors.shadow, 0.2)}`,
  ],
  textShadow: `0 2px 4px ${hexToRGB(colors.shadow, 0.32)}`,
  easings: {
    // taken from easings.net
    easeInBack: 'cubic-bezier(0.6, -0.28, 0.735, 0.045)',
    easeOutBack: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
    easeInOut: 'cubic-bezier(0.77, 0.2, 0.05, 1)',
    // taken from http://tobiasahlin.com/blog/how-to-animate-box-shadow/
    easeOut: 'cubic-bezier(0.165, 0.84, 0.44, 1)',
  },
  radii: {
    photo: '0.125rem',
  },
}

export default theme
