import '@/assets/fonts/loader.css'
import { systemFontStack } from '@/utils/mixins'
import { css } from '@emotion/core'

export default css`
  html {
    font-family: ${`"Futura"`}, ${systemFontStack.join(', ')};
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
