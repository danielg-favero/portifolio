import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

import { SectionContainer, SectionTitle } from '../../components'
import * as S from './ProfessionalExperiences.styles'

interface IExperiences {
  id: string
  companyLogo: string
  jobTitle: string
  startDate: string
  endDate?: string
  jobDescription: string
}

export const ProfessionalExperiences: React.FC = () => {
  const experiences: IExperiences[] = [
    {
      id: '1',
      companyLogo: '/images/logo-nostra-casa.png',
      jobTitle: 'Menor Aprendiz',
      startDate: 'fev. 2018',
      endDate: 'dez. 2018',
      jobDescription:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non tortor quis augue mollis luctus. Integer pharetra. ',
    },
    {
      id: '2',
      companyLogo: '/images/logo-nostra-casa.png',
      jobTitle: 'Menor Aprendiz',
      startDate: 'fev. 2017',
      jobDescription:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non tortor quis augue mollis luctus. Integer pharetra. ',
    },
    {
      id: '3',
      companyLogo: '/images/logo-nostra-casa.png',
      jobTitle: 'Menor Aprendiz',
      startDate: 'fev. 2017',
      jobDescription:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non tortor quis augue mollis luctus. Integer pharetra. ',
    },
  ]

  return (
    <SectionContainer
      variant="secondary"
      leftPadding
      rightPadding
      topPadding
      bottomPadding
    >
      <S.Container>
        <SectionTitle text="Experiências Profissionais" />
        <Swiper spaceBetween={64} slidesPerView="auto" grabCursor>
          {experiences.map(experience => (
            <SwiperSlide key={experience.id} style={{ width: 'auto' }}>
              <S.ProfessionalExperienceCard>
                <img
                  src={experience.companyLogo}
                  alt="Logo da empresa que Daniel já trabalhou"
                />
                <h5>Menor Aprendiz</h5>
                <h6>
                  {experience.startDate} -{' '}
                  {experience.endDate ? experience.endDate : 'Até o momento'}
                </h6>
                <p>{experience.jobDescription}</p>
              </S.ProfessionalExperienceCard>
            </SwiperSlide>
          ))}
        </Swiper>
      </S.Container>
    </SectionContainer>
  )
}
