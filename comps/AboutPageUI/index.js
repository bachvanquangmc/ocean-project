import React from 'react';
import styled from 'styled-components';
import {useRouter} from 'next/router';

const Container = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    max-width: 500px;
`;

const Image = styled.img`
    height: 15%;
    margin-bottom: 25px;
`

const TextContainer = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    text-align: center;
    color: white;
    font-family: sans-serif;

    max-width: 90%;
    margin-bottom: 20px;
`;

const Names = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
text-align: center;
color: white;
font-family: sans-serif;
line-height: 0;

margin: 10px;
`;

const Title = styled.h1 `
    display:flex;
    flex-direction:column;
    justify-content:center;
    text-align: center;
    color: white;
    font-family: sans-serif;
    font-size: 36px;
    font-weight: normal;
    line-height: 0;

    max-width: 330px;
`;


const ButtonContainer = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    margin: 20px;
`;

const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    letter-spacing: 2px;
    height: 50px;
    width: 200px;
    margin: 20px;
    border-radius: 40px;
    border: solid 1px white;
    color: white;
    background: ${props=>props.btncolor};
    cursor: pointer;
`;

const BtnLink = styled.a`
    text-decoration: none;
`;


const AboutUI = ({
    startbtn="#20BEAD",
    ImageSrc = '/logo_white.svg',
}) =>{
    const router = useRouter();
    return <Container>
        <Image src={ImageSrc}></Image>
        <Title>Our Purpose</Title>
        <TextContainer>
            <p>This web app will teach you about the importance of the ocean, and to help you understand what kind of threats it is facing. While also providing information on what needs to be done for things to improve.</p>
        </TextContainer>
        <Title>Developed By:</Title>
        <Names>
            <p>Warren</p>
            <p>Maharlika</p>
            <p>Blen</p>
            <p>Quang</p>
        </Names>
        <ButtonContainer>        
        <BtnLink onClick={()=>router.push("/categories")}>
                <Button btncolor={startbtn}>Start</Button>
            </BtnLink>
        </ButtonContainer>
    </Container>
}

export default AboutUI;