import React, { useState } from 'react'
import * as MdIcons from 'react-icons/md'

import {
  SectionContainer,
  SectionTitle,
  SubsectionTitle,
} from '../../components'
import * as S from './Projects.styles'

export const Projects: React.FC = () => {
  const tabOptions = ['Desenvolvedor', 'Designer']
  const [activeTab, setActiveTab] = useState(tabOptions[0])

  return (
    <SectionContainer
      variant="primary"
      leftPadding
      rightPadding
      topPadding
      bottomPadding
    >
      <S.Container>
        <SectionTitle text="Projetos" />
        <S.ProjectsInfo>
          <S.ProjectsCarroussel>
            <S.TabButtonsContainer>
              {tabOptions.map(option => (
                <S.TabButton
                  key={option}
                  onClick={() => setActiveTab(option)}
                  isActive={activeTab === option}
                >
                  {option}
                </S.TabButton>
              ))}
            </S.TabButtonsContainer>
            <S.ProjectImage>
              <button>
                <MdIcons.MdKeyboardArrowLeft />
              </button>
              <img
                src="images/izi-bus-thumbnail-developer.png"
                alt="imagem de projeto realizado"
              />
              <button>
                <MdIcons.MdKeyboardArrowRight />
              </button>
            </S.ProjectImage>
          </S.ProjectsCarroussel>
          <S.ToolsAndLanguagesContainer>
            <SubsectionTitle text="Ferramentas e Linguagens" />
          </S.ToolsAndLanguagesContainer>
        </S.ProjectsInfo>
      </S.Container>
    </SectionContainer>
  )
}
