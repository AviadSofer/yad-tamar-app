import styled from "styled-components";
import Image from "next/image";

export const StyledWelcome = styled.div`
height: 100vh;
display: flex;
justify-content: center;
`

export const StyledWrap = styled.div`
display: flex;
flex-direction: column;
flex-basis: 80%;
align-items: center;
`

export const Logo = styled(Image)`
`

export const WelcomeTitle = styled.h1`
font-size: 1.6rem;
font-family: 'Nunito', sans-serif;
`

export const GreenTitle = styled.span`
color: green;
`

export const Explain = styled.h2`
font-size: 0.8rem;
font-family: 'Open Sans', sans-serif;
`

export const Button = styled.button`
font-family: 'Nunito', sans-serif;
`

export const Girl = styled(Image)`
`
