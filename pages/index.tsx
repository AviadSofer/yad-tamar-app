import type { NextPage } from 'next'
import Image from 'next/image'
import { ThemeProvider } from 'styled-components'
import Header from '../components/Header'
import Welcome from '../components/Welcome'
import GlobalStyles from '../styles/Global'
import { StyledHome } from '../styles/Home.styled'

const theme = {
  blueColor: 'rgba(140, 168, 224, 1)'
}

const Home: NextPage = () => {
  return (
    <ThemeProvider theme={theme}>
    <>
    <GlobalStyles/>
    <StyledHome>
      <Header/>
      <Welcome/>
    </StyledHome>
    </>
    </ThemeProvider>
  )
}

export default Home
