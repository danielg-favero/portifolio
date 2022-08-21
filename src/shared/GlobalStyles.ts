import { createGlobalStyle } from 'styled-components'

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

  body {
    padding: 0;
    margin: 0;
    height: 100%;
    width: 100%;
    overflow-y: auto;

    background-color: ${ColorStyles.primary['100']};
    color: ${ColorStyles.neutral['100']};
  }

  button {
    outline: none;
    border: 0;
    padding: 0;
    background-color: transparent;
  }
`
