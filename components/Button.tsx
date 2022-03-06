import {Border, Container, StyledButton} from '../styles/Button.styled';

const Button: React.FC = ({children}) => {
  return (
    <Container>
      <StyledButton>
        {children}
      </StyledButton>
      <Border/>
    </Container>
  );
};

export default Button;
