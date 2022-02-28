import type { NextPage } from 'next'
import { ThemeProvider } from 'styled-components';
import GlobalStyles from '../styles/Global';
import { Explain, Girl, GreenTitle, Logo, StyledWelcome, StyledWrap, WelcomeTitle } from '../styles/Welcome.styled';
import theme from '../styles/theme';
import Button from '../components/Button';

const Welcome: NextPage = () => {
  return (
    <ThemeProvider theme={theme}>
    <>
    <GlobalStyles/>
    <StyledWelcome>
      <StyledWrap>
        <Logo src={'/logo.svg'} height={104} width={104}/>
        <WelcomeTitle>Welcome to Tamar, <GreenTitle>Jack</GreenTitle>!</WelcomeTitle>
        <Explain>To begin communication, you should create a new family.</Explain>
        <Button>Create a new family</Button>
        <Girl src={'/girl.svg'} height={600} width={600}/>
      </StyledWrap>
    </StyledWelcome>
    </>
    </ThemeProvider>
  )
}

export default Welcome;
