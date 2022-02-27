import type { NextPage } from 'next'
import Image from 'next/image'
import Header from '../components/Header'
import Welcome from '../components/Welcome'
import { StyledHome } from '../styles/Home.styled'

const Home: NextPage = () => {
  return (
    <StyledHome>
      <Header/>
      <Welcome/>
    </StyledHome>
  )
}

export default Home
