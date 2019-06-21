import { css } from '@emotion/core'
import { hexToRGB, numberFormat } from './helpers'

export const fontSmoothing = css`
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`

export const truncate = css`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`

export const srOnly = css`
  border: 0;
  clip: rect(0 0 0 0);
  -webkit-clip-path: inset(50%);
  clip-path: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
  white-space: nowrap;
`

export const systemFontStack = [
  'system-ui',
  '-apple-system' /* macOS 10.11-10.12 */,
  '"Segoe UI"' /* Windows 6+ */,
  '"Roboto"' /* Android 4+ */,
  '"Ubuntu"' /* Ubuntu 10.10+ */,
  '"Cantarell"' /* Gnome 3+ */,
  '"Noto Sans"' /* KDE Plasma 5+ */,
  'sans-serif' /* fallback */,
  '"Apple Color Emoji"' /* macOS emoji */,
  '"Segoe UI Emoji"' /* Windows emoji */,
  '"Segoe UI Symbol"' /* Windows emoji */,
  '"Noto Color Emoji"' /* Linux emoji */,
]

export const systemMono = [
  '"Menlo"' /* macOS 10.10+ */,
  '"Consolas"' /* Windows 6+ */,
  '"Roboto Mono"' /* Android 4+ */,
  '"Ubuntu Monospace"' /* Ubuntu 10.10+ */,
  '"Noto Mono"' /* KDE Plasma 5+ */,
  '"Oxygen Mono"' /* KDE Plasma 4+ */,
  '"Liberation Mono"' /* Linux/OpenOffice fallback */,
  'monospace' /* fallback */,
  '"Apple Color Emoji"' /* macOS emoji */,
  '"Segoe UI Emoji"' /* Windows emoji */,
  '"Segoe UI Symbol"' /* Windows emoji */,
  '"Noto Color Emoji"' /* Linux emoji */,
]

const scrimStops = [
  [1, 0],
  [0.738, 19],
  [0.541, 34],
  [0.382, 47],
  [0.278, 56.5],
  [0.194, 65],
  [0.126, 73],
  [0.075, 80.2],
  [0.042, 86.1],
  [0.021, 91],
  [0.008, 95.2],
  [0.002, 98.2],
  [0, 100],
].map(stop => ({
  alpha: stop[0],
  stopPositionInPercent: stop[1],
}))

export function scrimGradient({
  color,
  direction,
  startAlpha = 1,
}: {
  color: string
  direction: string
  startAlpha?: number
}) {
  const stopsWithRecomputedAlphas = scrimStops.map(
    ({ alpha, stopPositionInPercent }) => ({
      alpha: numberFormat(alpha * startAlpha, 3),
      stopPositionInPercent,
    }),
  )

  return css`
    background-image: linear-gradient(
      ${direction},
      ${stopsWithRecomputedAlphas
        .map(
          ({ alpha, stopPositionInPercent }) =>
            `${hexToRGB(color, alpha)} ${stopPositionInPercent}%`,
        )
        .join(',')}
    );
  `
}
