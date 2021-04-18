import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
`;

const TextContainer = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    text-align: center;
    color: white;
    font-family: sans-serif;

    max-width: 330px;
`;

const Names = styled.div`
    margin-bottom: 40px;   
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
    font-size: 36px;
    letter-spacing: 2px;
    height: 80px;
    width: 300px;
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
}) =>{
    return <Container>
        <TextContainer>
            <Names>
            <h2>Developed By:</h2>
            <p>Warren</p>
            <p>Maharlika</p>
            <p>Blen</p>
            <p>Quang</p>
            </Names>
            <h2>Edu-Ocean's Purpose</h2>
            <p>This web app will teach you about the importance of the ocean, and to help you understand what kind of threats it is facing. While also providing information on what needs to be done for things to improve.</p>
        </TextContainer>
        <ButtonContainer>        
            <BtnLink href="https://www.figma.com/proto/FFMRAIgHnmdMigcNRi4h1g/sustainability-web-app?node-id=230%3A478&scaling=min-zoom" target="_blank">
                <Button btncolor={startbtn}>Start</Button>
            </BtnLink>
        </ButtonContainer>
    </Container>
    
}

export default AboutUI;