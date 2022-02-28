import { StyledButton } from '../styles/Button.styled';
import { Explain, Girl, GreenTitle, Logo, StyledWelcome, StyledWrap, WelcomeTitle } from '../styles/Welcome.styled';

const Welcome: React.FC = () => {
  return (
    <StyledWelcome>
      <StyledWrap>
        <Logo src={'/logo.svg'} height={104} width={104}/>
        <WelcomeTitle>Welcome to Tamar, <GreenTitle>Jack</GreenTitle>!</WelcomeTitle>
        <Explain>To begin communication, you should create a new family.</Explain>
        <StyledButton>Create a new family</StyledButton>
        <Girl src={'/girl.svg'} height={600} width={600}/>
      </StyledWrap>
    </StyledWelcome>
  )
}

export default Welcome;
