import React from 'react';
import styled from 'styled-components';

const ThreatCont = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    padding-top: 300px;
    padding-bottom: 300px;
    background-image: url(ocean_background.svg);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
`;


const Title1 = styled.h1`
    color:#ffffff;   
    text-align: center;
    text-shadow: 0px 2px 2px black;
    margin:10px;
`;


const Para1 = styled.p`
    color:#ffffff;   
    text-align: center;
    margin:10px;
    text-shadow: 1px 1px 1px black;
`;

const Threatintro = ({
    Title = "Threats",
    Body = "The threats to the ocean.",
}) => {
 
    return <ThreatCont> 
                <Title1>{Title}</Title1>
                <Para1>{Body}</Para1>
            </ThreatCont>
}

export default Threatintro;
