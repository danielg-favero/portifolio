import React from 'react'

import * as S from './SectionTitle.styles'

interface SectionTitleProps {
  text: string
}

/**
 *  Exibir título de uma seção dentro da página
 *  @param {string} text texto a ser exibido no título
 *  @example <SectionTitle text="Lorem Ipsum" />
 */
export const SectionTitle: React.FC<SectionTitleProps> = ({ text }) => {
  return <S.SectionTitleContainer>{text}</S.SectionTitleContainer>
}
