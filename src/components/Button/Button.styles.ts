import styled from 'styled-components'

import { ColorStyles } from '../../shared'

export const ButtonContainer = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  background-color: ${ColorStyles.primary['50']};
  color: ${ColorStyles.neutral['100']};
  padding: 0.75rem;
  width: 100%;
  border-radius: 0.25rem;

  font-size: 1rem;
  letter-spacing: 2px;
  font-weight: 300;
  text-transform: uppercase;

  transition: all 150ms ease-in-out;

  svg {
    font-size: 1.5rem;
  }

  &:hover {
    transform: scale(1.05);
    background-color: ${ColorStyles.primary['45']};
  }

  &:active {
    transform: scale(0.95);
    background-color: ${ColorStyles.primary['60']};
  }

  &:focus {
    background-color: ${ColorStyles.primary['45']};
  }
`
