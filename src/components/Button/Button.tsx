import React from 'react'
import { IconBaseProps } from 'react-icons'

import * as S from './Button.styles'

interface ButtonProps {
  icon: React.ComponentType<IconBaseProps>
  text: string
  onClick: () => void
}

/**
 *  Botã que possui um ícone há esquerda
 *  @param {React.ComponentType<IconBaseProps>} icon ícone em formato SVG ou componente React que é exibido no botão
 * @param {string} text texto a ser exibido pelo botão
 *  @param {function} onClick método associado a ação de click do botão
 *  @example <Button icon={FaInstagram} text="Lorem Ipsum" onClick={handleClick} />
 */
export const Button: React.FC<ButtonProps> = ({
  icon: Icon,
  onClick,
  text,
}) => {
  return (
    <S.ButtonContainer onClick={onClick}>
      <Icon />
      {text}
    </S.ButtonContainer>
  )
}
