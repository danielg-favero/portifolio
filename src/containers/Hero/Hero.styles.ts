import styled from 'styled-components'

import { ColorStyles } from '../../shared'

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  justify-self: flex-start;
  text-align: center;
  gap: 3.5rem;
`

export const MainImage = styled.img`
  width: 100%;
  height: 100%;
`

export const HeroInfo = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3.5rem;

  h6 {
    font-weight: 100;
    font-size: 0.875rem;
    line-height: 30px;
  }
`

export const HeroGreetings = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 1.5rem;

  h1 {
    font-size: 1.83rem;
    line-height: 30px;
    font-weight: 700;
    text-transform: uppercase;
    color: ${ColorStyles.primary['50']};
  }
`

export const ButtonsWrapper = styled.div`
  display: flex;
  gap: 1rem;
`
