import React from 'react';
import styled from 'styled-components';

const LayoutDiv = styled.div`
    padding-top: 20px;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-image: url(${props=>props.BackgroundImg});
    color:#FFF;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
`;

const ImgSrc = styled.img`
    margin: 0 10px 20px 10px;
`;

const BigText = styled.div`
    text-align: center;
    font-size: 36px;
    text-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
    position: relative;
    margin:10px;
`;

const SmallText = styled.div`
    position: relative;
    margin:15px;
    padding: 0 10px 0 10px;
`;
const PageLayout = ({
    FTitle="",
    STitle="",
    FDiscription="",
    SDiscription="",
    ImgSource="",
    BackgroundImg=""

}) => {
    return <LayoutDiv BackgroundImg={BackgroundImg}>
        
        <BigText>{FTitle}</BigText>
        <SmallText>{FDiscription}</SmallText>
        <ImgSrc src={ImgSource}></ImgSrc>
        <BigText>{STitle}</BigText>
        <SmallText>{SDiscription}</SmallText>
    </LayoutDiv>
}

export default PageLayout;