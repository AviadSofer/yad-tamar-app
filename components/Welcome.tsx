import { useState } from 'react';
import { Button, Explain, Girl, GreenTitle, Logo, StyledWelcome, StyledWrap, WelcomeTitle } from '../styles/Welcome.styled';

const Welcome: React.FC = () => {
  return (
    <StyledWelcome>
      <StyledWrap>
        <Logo src={'/logo.svg'} height={104} width={104}/>
        <WelcomeTitle>Welcome to Tamar, <GreenTitle>Jack</GreenTitle>!</WelcomeTitle>
        <Explain>To begin communication, you should create a new family.</Explain>
        <Button>Create a new family</Button>
        <Girl src={'/girl.svg'} height={622} width={622}/>
      </StyledWrap>
    </StyledWelcome>
  )
}

export default Welcome;
