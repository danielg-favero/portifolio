import styled from 'styled-components'

import { ColorStyles } from '../../shared'

export const IconButtonContainer = styled.div``

export const IconButtonHexagonShape = styled.button`
  background-color: ${ColorStyles.primary['50']};
  padding: 1.5rem;
  line-height: 0;

  svg {
    color: ${ColorStyles.neutral['100']};
    font-size: 1.5rem;
  }
`
