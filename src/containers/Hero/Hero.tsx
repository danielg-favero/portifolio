import React from 'react'
import * as FaIcons from 'react-icons/fa'

import { Bagde, IconButton, SectionContainer } from '../../components'
import * as S from './Hero.styles'

export const Hero: React.FC = () => {
  return (
    <SectionContainer variant="primary" leftPadding rightPadding>
      <S.Container>
        <S.HeroInfo>
          <div>
            <S.HeroGreetings>
              <Bagde text="Olá, meu chamo" />
              <h1>Daniel Gustavo Favero</h1>
            </S.HeroGreetings>
            <h6>
              Frontend developer
              <span>
                {' '}
                <img
                  src="images/CrossIcon.png"
                  alt="Ícone de cruz customizado"
                />{' '}
              </span>{' '}
              UI / UX Designer
            </h6>
          </div>
          <S.ButtonsWrapper>
            <IconButton icon={FaIcons.FaInstagram} onClick={() => {}} />
            <IconButton icon={FaIcons.FaLinkedin} onClick={() => {}} />
            <IconButton icon={FaIcons.FaGithub} onClick={() => {}} />
          </S.ButtonsWrapper>
        </S.HeroInfo>
        <S.MainImage
          src="images/HeroSectionImage.png"
          alt="Imagem de Daniel Gustavo Favero"
        />
      </S.Container>
    </SectionContainer>
  )
}
