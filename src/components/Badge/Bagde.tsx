import React from 'react'

import * as S from './Badge.styles'

interface BadgeProps {
  text: string
}

/**
 *  Exibir elementos de texto com background em formato de pílula
 *  @param {string} text texto a ser exibido no badge
 *  @example <Bagde text="Lorem Ipsum" />
 */
export const Bagde: React.FC<BadgeProps> = ({ text }) => {
  return <S.BadgeContainer>{text}</S.BadgeContainer>
}
