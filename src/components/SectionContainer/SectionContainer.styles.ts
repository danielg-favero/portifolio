import styled, { css } from 'styled-components'

import { BreakPoints, ColorStyles } from '../../shared'

interface SectionContainerProps {
  topPadding?: boolean
  rightPadding?: boolean
  bottomPadding?: boolean
  leftPadding?: boolean
  variant: 'primary' | 'secondary'
}

export const SectionContainer = styled.div<SectionContainerProps>`
  ${props =>
    props.variant === 'primary'
      ? css`
          background-color: ${ColorStyles.primary['100']};
        `
      : css`
          background-color: ${ColorStyles.primary['95']};
        `}

  ${props =>
    props.topPadding &&
    css`
      padding-top: 5rem;
    `}

  ${props =>
    props.rightPadding &&
    css`
      padding-right: 1rem;
    `}

  ${props =>
    props.bottomPadding &&
    css`
      padding-bottom: 5rem;
    `}

  ${props =>
    props.leftPadding &&
    css`
      padding-left: 1rem;
    `}

  @media only screen and (min-width: ${BreakPoints.md}px) {
    ${props =>
      props.topPadding &&
      css`
        padding-top: 7.5rem;
      `}

    ${props =>
      props.rightPadding &&
      css`
        padding-right: 6rem;
      `}

  ${props =>
      props.bottomPadding &&
      css`
        padding-bottom: 7.5rem;
      `}

  ${props =>
      props.leftPadding &&
      css`
        padding-left: 6rem;
      `}
  }
`
