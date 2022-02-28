import styled from "styled-components";
import Image from "next/image";

export const StyledWelcome = styled.div`
height: 100vh;
display: flex;
justify-content: center;
background-image: url('/Vector29.svg');
background-repeat: no-repeat;
background-position: center bottom;
background-size: 100vw;
`

export const StyledWrap = styled.div`
display: flex;
flex-direction: column;
align-items: center;
flex-basis: 80%;
justify-content: space-between;
`

export const Logo = styled(Image)`
`

export const WelcomeTitle = styled.h1`
font-size: 2rem;
font-family: 'Nunito', sans-serif;
margin: 0;
`

export const GreenTitle = styled.span`
color: green;
`

export const Explain = styled.h2`
font-size: 1rem;
font-family: 'Open Sans', sans-serif;
`

export const Girl = styled(Image)`
`
