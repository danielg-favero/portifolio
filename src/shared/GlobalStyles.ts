import { createGlobalStyle } from 'styled-components'

import { BreakPoints } from './BreakPoints'
import { ColorStyles } from './ColorStyles'

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: none;
    border: none;
    overflow: hidden;
    font-family: 'Poppins', sans-serif;
  }

  body {
    padding: 0 1rem;
    background-color: ${ColorStyles.primary['100']};

    @media only screen and (min-width: ${BreakPoints.md}px){
      padding: 0 6rem;
    }
  }
`
