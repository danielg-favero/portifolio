import styled, { css } from 'styled-components'

import { ColorStyles } from '../../shared'

export const Container = styled.main``

export const ProjectsInfo = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
`

export const ProjectsCarroussel = styled.div``

export const TabButton = styled.button<{ isActive: boolean }>`
  background-color: ${ColorStyles.primary['70']};
  color: ${ColorStyles.neutral['100']};

  font-size: 0/75rem;
  font-weight: 500;
  line-height: 25.5px;

  padding: 0.75rem 2rem;

  transition: background 80ms ease-in-out;

  cursor: pointer;

  &:hover {
    background-color: ${({ isActive }) =>
      !isActive &&
      css`
        ${ColorStyles.primary['80']};
      `};
  }

  ${({ isActive }) =>
    isActive &&
    css`
      background-color: ${ColorStyles.primary['50']};
    `}
`

export const ProjectImage = styled.div`
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  button {
    line-height: 0;
    position: absolute;
    height: 100%;
    transform-origin: center;

    transition: all 150ms ease-in-out;

    cursor: pointer;

    svg {
      transition: transform 150ms ease-in-out;
      color: '#f7f7f7';
      font-size: 1.5rem;
    }
  }

  button:first-of-type {
    left: 0;
  }

  button:last-of-type {
    right: 0;
  }

  button:first-of-type:hover {
    background: rgb(98, 25, 255);
    background: linear-gradient(
      90deg,
      rgba(98, 25, 255, 0.13489145658263302) 0%,
      rgba(98, 25, 255, 0) 100%
    );
    svg {
      transform: translateX(3px);
    }
  }

  button:last-of-type:hover {
    background: rgb(98, 25, 255);
    background: linear-gradient(
      270deg,
      rgba(98, 25, 255, 0.13489145658263302) 0%,
      rgba(98, 25, 255, 0) 100%
    );
    svg {
      transform: translateX(-3px);
    }
  }

  button:active {
    transform: scale(0.8);
  }
`

export const TabButtonsContainer = styled.div`
  display: flex;
`

export const ToolsAndLanguagesContainer = styled.section``
