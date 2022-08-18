import { createGlobalStyle } from 'styled-components'

import { BreakPoints } from './BreakPoints'
import { ColorStyles } from './ColorStyles'

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: none;
    border: none;
    overflow-x: hidden;
    font-family: 'Poppins', sans-serif;
  }

  html, body {
    padding: 0;
    margin: 0;
    height: 100vh;
    width: 100vw;
    overflow-y: auto;

    background-color: ${ColorStyles.primary['100']};
    color: ${ColorStyles.neutral['100']};

    @media only screen and (min-width: ${BreakPoints.md}px){
      padding: 0 6rem;
    }
  }

  button {
    outline: none;
    border: 0;
    padding: 0;
    background-color: transparent;
  }
`
