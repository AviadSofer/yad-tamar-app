import styled from "styled-components";
import Button from '@mui/material/Button';

export const Container = styled.div`
display: flex;
flex-direction: column;
`

export const StyledButton = styled(Button)`
&& {
    height: 8vh;
    width: 65vw;
    background-color: ${({ theme }) => theme.blueColor};
    color: white;
    border-radius: 35px;
    text-align: center;
    font-family: 'Nunito';
    font-size: 0.9rem;
    font-weight: bold;
    text-transform: none;
}
&&:hover {
    background-color: ${({ theme }) => theme.blueColor};
}
`

export const Border = styled.div`
height: 8vh;
width: 65vw;
border: 1px solid #263238;
border-radius: 35px;
margin: -8.4vh 0.3vh;
position: relative;
`