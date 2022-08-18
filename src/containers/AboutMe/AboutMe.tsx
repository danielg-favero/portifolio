import React from 'react'
import * as FaIcons from 'react-icons/fa'
import * as GiIcons from 'react-icons/gi'
import * as MdIcons from 'react-icons/md'

import { Button, SectionContainer, SectionTitle } from '../../components'
import * as S from './AboutMe.styles'

export const AboutMe: React.FC = () => {
  return (
    <SectionContainer
      variant="secondary"
      leftPadding
      rightPadding
      topPadding
      bottomPadding
    >
      <S.Container>
        <SectionTitle text="Sobre Mim" />
        <S.GraduationInfo>
          <S.GraduationInfoCard>
            <span>
              <GiIcons.GiGraduateCap />
            </span>
            Engenharia de Computação
          </S.GraduationInfoCard>
          <S.GraduationInfoCard>
            <span>
              <FaIcons.FaUniversity />
            </span>
            UTFPR - Pato Branco
          </S.GraduationInfoCard>
          <S.GraduationInfoCard>
            <span>
              <MdIcons.MdLocationPin />
            </span>
            Pato Branco - PR
          </S.GraduationInfoCard>
        </S.GraduationInfo>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non
          tortor quis augue mollis luctus. Integer pharetra, enim et placerat
          convallis, diam purus rhoncus magna, vitae ullamcorper sem magna eget
          nibh. Mauris at finibus mauris. Maecenas eu tellus vel diam fringilla
          feugiat ut sed metus.
        </p>
        <Button icon={MdIcons.MdDownload} text="Currículo" onClick={() => {}} />
      </S.Container>
    </SectionContainer>
  )
}
