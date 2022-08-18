import type { NextPage } from 'next'

import { Hero, AboutMe } from '../containers'

const Home: NextPage = () => {
  return (
    <>
      <Hero />
      <AboutMe />
    </>
  )
}

export default Home
