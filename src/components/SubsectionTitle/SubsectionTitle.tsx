import React from 'react'

import * as S from './SubsectionTitle.styles'

interface SubsectionTitleProps {
  text: string
}

/**
 *  Exibir subtítulos dentro de seções
 *  @param {string} text texto a ser exibido no subtítulo
 *  @example <SubsectionTitle text="Lorem Ipsum" />
 */
export const SubsectionTitle: React.FC<SubsectionTitleProps> = ({ text }) => {
  return <S.SubsectionTitleContainer>{text}</S.SubsectionTitleContainer>
}
