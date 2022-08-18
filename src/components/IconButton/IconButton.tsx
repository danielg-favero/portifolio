import React from 'react'
import { IconBaseProps } from 'react-icons'

import * as S from './IconButton.styles'

interface IconButtonProps {
  icon: React.ComponentType<IconBaseProps>
  onClick: () => void
}

/**
 *  Botão em formato de hexágono que possui um ícone no centro
 *  @param {React.ComponentType<IconBaseProps>} icon ícone em formato SVG ou componente React que é exibido no botão
 *  @param {function} onClick método associado a ação de click do botão
 *  @example <IconButton icon={FaInstagram} onClick={handleClick} />
 */
export const IconButton: React.FC<IconButtonProps> = ({
  icon: Icon,
  onClick,
}) => {
  return (
    <S.IconButtonContainer>
      <S.IconButtonHexagonShape onClick={onClick}>
        <Icon />
      </S.IconButtonHexagonShape>
    </S.IconButtonContainer>
  )
}
