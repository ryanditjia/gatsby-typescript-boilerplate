import '@/assets/fonts/loader.css'
import '@/assets/my-sanitize.css'
import { appendSystemFonts } from '@/utils/mixins'
import { css } from '@emotion/core'

export default css`
  html {
    font-family: ${appendSystemFonts('Futura')};
  }
`
