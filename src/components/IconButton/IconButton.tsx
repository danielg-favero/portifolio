import React from 'react'
import { IconBaseProps } from 'react-icons'

import * as S from './IconButton.styles'

interface IconButtonProps {
  icon: React.ComponentType<IconBaseProps>
  onClick: () => void
}

/**
 *  Exibir elementos de texto com background em formato de pílula
 *  @param {string} text texto a ser exibido no badge
 *  @example <Bagde text="Lorem Ipsum" />
 */
export const IconButton: React.FC<IconButtonProps> = ({
  icon: Icon,
  onClick,
}) => {
  return (
    <S.IconButtonContainer onClick={onClick}>
      <Icon />
    </S.IconButtonContainer>
  )
}
