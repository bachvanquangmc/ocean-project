import React from 'react';
import styled from 'styled-components';

const 

const CatDiv = styled.div`
    background:rgba(0, 128, 255, 0.2);
    height:90px;
    width: 100vw;
    margin-top:10px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    color:#FFF;
    position:relative;
    animationName:${props=>props.direction};
    animationDuration:1s;
    animationFillMode:forward;

`;

const CatLink = styled.a`

`;

const CatH1 = styled.h1`
    font-size:28px;
    textShadow:0px 2px 2px rgba(0, 0, 0, 0.25);
`;

const CatP = styled.p`
    margin-bottom:23px;
`;

const NewCategory = ({
    text = "Put text here",
    CatName = "Category name",
    direction = "left",
}) => {
    return <CatDiv direction={direction}>
        <CatLink>
            <CatH1>{CatName}</CatH1>
        </CatLink>
        <CatP>{text}</CatP>
    </CatDiv>

}

export default NewCategory;