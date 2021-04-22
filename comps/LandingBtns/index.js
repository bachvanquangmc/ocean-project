import React from 'react';
import styled from 'styled-components';
import {useRouter} from 'next/router';


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
    }
`;

const BtnLink = styled.a`
    text-decoration none;
`;

const LandingBtns = ({
    startbtn="#20BEAD",
    aboutbtn="#1995C9",
}) =>{
    const router = useRouter();
    return <ButtonContainer>        
        <BtnLink onClick={()=>router.push("/categories")}>
            <Button btncolor={startbtn}>Start</Button>
        </BtnLink>
        <BtnLink onClick={()=>router.push("/about")}>
            <Button btncolor={aboutbtn}>About</Button>
        </BtnLink>
    </ButtonContainer>
    
}

export default LandingBtns;
