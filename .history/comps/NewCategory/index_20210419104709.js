import React from 'react';
import styled from 'styled-components';

const CatWrapper = styled.div`
    display: flex;
    flex-direction: column;
    top: 0px;
    width: 100vw;
    height: 100vh;
    padding: 80px 0 80px 0;


`

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
}) => {
    return<CatWrapper>
        
    </CatWrapper> 
    <CatDiv>
            <CatH1>{CatName}</CatH1>
        <CatP>{text}</CatP>
    </CatDiv>

}

export default NewCategory;