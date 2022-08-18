import styled from 'styled-components'

import { BreakPoints } from '../../shared'

export const SectionContainer = styled.div`
  padding: 0 1rem;

  @media only screen and (min-width: ${BreakPoints.md}px) {
    padding: 0 6rem;
  }
`
