import type { NextPage } from 'next'

import { Hero, AboutMe, Projects } from '../containers'

const Home: NextPage = () => {
  return (
    <>
      <Hero />
      <AboutMe />
      <Projects />
    </>
  )
}

export default Home
