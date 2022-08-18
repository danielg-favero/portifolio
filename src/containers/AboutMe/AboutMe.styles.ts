import styled from 'styled-components'

import { ColorStyles } from '../../shared'

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  gap: 1.125rem;

  p {
    font-weight: 300;
    font-size: 1.125rem;
  }
`

export const GraduationInfo = styled.section`
  display: flex;
  flex-direction: column;
`

export const GraduationInfoCard = styled.p`
  background-color: ${ColorStyles.primary['80']};
  color: ${ColorStyles.neutral['100']};
  border-radius: 0.25rem;
  padding: 1rem;

  display: flex;
  align-items: center;
  gap: 1rem;

  font-size: 0.875rem;
  line-height: 20px;

  svg {
    font-size: 1.5rem;
  }

  & + & {
    margin-top: 1.125rem;
  }
`
