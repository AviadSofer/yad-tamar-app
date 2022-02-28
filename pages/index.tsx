import type { NextPage } from 'next'
import Link from 'next/link'
import Header from '../components/Header'
import GlobalStyles from '../styles/Global'
import { StyledHome } from '../styles/Home.styled'

const Home: NextPage = () => {
  return (
    <>
    <GlobalStyles/>
    <StyledHome>
      <Header/>
      <Link href={'/welcome'}>
        <a>Welcome</a>
      </Link>
    </StyledHome>
    </>
  )
}

export default Home
