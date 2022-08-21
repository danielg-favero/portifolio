import styled from 'styled-components'

import { ColorStyles } from '../../shared'

export const Container = styled.main`
  width: 100%;

  .swiper-wrapper {
    overflow: visible;
  }
`

export const ProfessionalExperienceCard = styled.div`
  padding: 2.5rem 1.5rem;
  background-color: ${ColorStyles.primary['80']};

  max-width: 536px;
  width: 288px;

  img {
    margin-bottom: 2.5rem;
  }

  h5 {
    font-weight: 500;
    font-size: 0.875rem;
    color: ${ColorStyles.neutral['100']};
  }

  h6 {
    font-weight: 100;
    font-size: 0.75rem;
    color: ${ColorStyles.primary['60']};
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.125rem;
    font-weight: 100;
    color: ${ColorStyles.neutral['100']};
  }
`
