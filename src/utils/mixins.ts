import { css } from '@emotion/core'
import { hexToRGB } from './helpers'

/* Only accepts unitless numbers in px */
export function fluidFontSize(
  minFontSize: number,
  maxFontSize: number,
  minViewportWidth: number,
  maxViewportWidth: number,
) {
  const sizeDelta = maxFontSize - minFontSize
  const viewportWidthDelta = maxViewportWidth - minViewportWidth
  const minFontSizeWithPx = `${minFontSize}px`
  const maxFontSizeWithPx = `${maxFontSize}px`
  const minViewportWidthWithPx = `${minViewportWidth}px`
  const maxViewportWidthWithPx = `${maxViewportWidth}px`

  return css`
    /* Minimum font-size */
    font-size: ${minFontSizeWithPx};

    /* Fluidity starts */
    @media (min-width: ${minViewportWidthWithPx}) {
      font-size: calc(
        ${minFontSizeWithPx} + ${sizeDelta} *
          ((100vw - ${minViewportWidthWithPx}) / ${viewportWidthDelta})
      );
    }

    /* Maximum viewport width reached */
    @media (min-width: ${maxViewportWidthWithPx}) {
      font-size: ${maxFontSizeWithPx};
    }
  `
}

function numberFormat(val: number, decimalPlaces: number) {
  var multiplier = Math.pow(10, decimalPlaces)
  return Number(
    (Math.round(val * multiplier) / multiplier).toFixed(decimalPlaces),
  )
}

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

type ScrimGradient = {
  color: string
  direction: string
  startAlpha?: number
}

export function scrimGradient({
  color,
  direction,
  startAlpha = 1,
}: ScrimGradient) {
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

export const fontSmoothing = css`
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`

const systemFontStack = [
  'system-ui',
  '-apple-system' /* macOS 10.11-10.12 */,
  'Segoe UI' /* Windows 6+ */,
  'Roboto' /* Android 4+ */,
  'Ubuntu' /* Ubuntu 10.10+ */,
  'Cantarell' /* Gnome 3+ */,
  'Noto Sans' /* KDE Plasma 5+ */,
  'sans-serif' /* fallback */,
  'Apple Color Emoji' /* macOS emoji */,
  'Segoe UI Emoji' /* Windows emoji */,
  'Segoe UI Symbol' /* Windows emoji */,
  'Noto Color Emoji' /* Linux emoji */,
]

export function appendSystemFonts(mainFontFamily: string) {
  return [mainFontFamily, ...systemFontStack].join(',')
}
