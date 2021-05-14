import React from 'react';
import styled from 'styled-components';


const ButtonContainer = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
`;

const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    letter-spacing: 2px;
    height: 25px;
    width: 200px;
    margin: 20px;
    border-radius: 40px;
    border: solid 1px white;
    color: white;
    background: ${props=>props.btncolor};
    cursor: pointer;
    }
`;

const BtnLink = styled.a`
    text-decoration none;
`;

const ButtonUI = ({
    btnColor="#20BEAD",
    btnText="Text",
}) =>{
    return <ButtonContainer>        
        <BtnLink>
            <Button btncolor={btnColor}>{btnText}</Button>
        </BtnLink>
    </ButtonContainer>
    
}

export default ButtonUI;
