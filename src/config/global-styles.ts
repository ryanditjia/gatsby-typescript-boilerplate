import '@/assets/fonts/loader.css'
import { systemSans } from '@/utils/mixins'
import { css } from '@emotion/core'
import 'sanitize.css'
import 'sanitize.css/forms.css'

export default css`
  html {
    font-family: ${`"Futura"`}, ${systemSans.join(', ')};
    cursor: initial; /* override sanitize.css cursor: default */
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
