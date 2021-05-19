import React from 'react';
import styled from 'styled-components';
import InputBtn from '../InputBtn'

const CatDiv = styled.div`

    width: 90%;
    margin:10px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    color:#FFF;
    background: rgba(11, 78, 138, 0.95);
    border-radius: 10px;
`;

const CatH1 = styled.h1`
    font-size:28px;
    text-shadow: 0px 2px 2px rgba(0, 0, 0, 0.8);
    border-bottom: solid 1px;
    margin-block-end: 0;
    padding-bottom: 0.5em;
`;

const CatP = styled.p`
    padding: 0 20px;
    line-height: 1.5em;
`;

const Category = ({
    text = "Put text here",
    CatName = "Category name",
    CatRouter = '/',
    BtnColor = '#20BEAD',
    BtnText='More Detail'
}) => {
    return <CatDiv>
        <CatH1>{CatName}</CatH1>
        <CatP>{text}</CatP>
        <InputBtn text={BtnText} IptRouter={CatRouter} bgColor={BtnColor}/>
    </CatDiv>

}

export default Category;