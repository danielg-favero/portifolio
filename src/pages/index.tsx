import type { NextPage } from 'next'

import { Hero, AboutMe, Projects, ProfessionalExperiences } from '../containers'

const Home: NextPage = () => {
  return (
    <>
      <Hero />
      <AboutMe />
      <Projects />
      <ProfessionalExperiences />
    </>
  )
}

export default Home
