import styled from "styled-components";
import Button from '@mui/material/Button';

export const StyledButton = styled(Button)`
&& {
    background-color: ${({ theme }) => theme.blueColor};
    border-radius: 36px;
    color: white;
    padding: 10px;
    border: 1px solid #263238;
    font-family: 'Nunito';
    font-size: 0.8rem;
    font-weight: bold;
}
`
