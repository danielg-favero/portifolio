import React from 'react'
import * as FaIcons from 'react-icons/fa'

import { Bagde } from '../../components'
import * as S from './Hero.styles'

export const Hero: React.FC = () => {
  return (
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
          <button>
            <FaIcons.FaInstagram />
          </button>
          <button>
            <FaIcons.FaLinkedin />
          </button>
          <button>
            <FaIcons.FaGithub />
          </button>
        </S.ButtonsWrapper>
      </S.HeroInfo>
      <img
        src="images/HeroSectionImage.png"
        alt="Imagem de Daniel Gustavo Favero"
      />
    </S.Container>
  )
}
