import '@/assets/fonts/loader.css'
import { css } from '@emotion/core'

export default css`
  html {
    /* prettier-ignore */
    font-family:
      system-ui,
      -apple-system /* macOS 10.11-10.12 */,
      'Segoe UI' /* Windows 6+ */,
      'Roboto' /* Android 4+ */,
      'Ubuntu' /* Ubuntu 10.10+ */,
      'Cantarell' /* Gnome 3+ */,
      'Noto Sans' /* KDE Plasma 5+ */,
      sans-serif /* fallback */,
      'Apple Color Emoji' /* macOS emoji */,
      'Segoe UI Emoji' /* Windows emoji */,
      'Segoe UI Symbol' /* Windows emoji */,
      'Noto Color Emoji' /* Linux emoji */;
  }
  abbr[title] {
    cursor: help;
  }

  summary {
    cursor: pointer;
  }

  [type='button']:not(:disabled),
  [type='reset']:not(:disabled),
  [type='submit']:not(:disabled),
  button:not(:disabled) {
    cursor: pointer;
  }
`
