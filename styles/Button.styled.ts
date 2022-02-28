import styled from "styled-components";
import Button from '@mui/material/Button';

export const StyledButton = styled(Button)`
&& {
    background-color: ${({ theme }) => theme.blueColor};
    color: white;
    border-radius: 36px;
    padding: 15px;
    border: 1px solid #263238;
    text-align: center;
    font-family: 'Nunito';
    font-size: 0.9rem;
    font-weight: bold;
}
&&:hover {
    background-color: ${({ theme }) => theme.blueColor};
}
`
