import React from 'react';
import styled from 'styled-components';

const LayoutDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-image: url(${props=>props.BackgroundImg});
    color:#FFF;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    max-width: 600px;
`;

const LayoutContent = styled.div`
    padding: 200px 0 50px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const ImgSrc = styled.img`
    margin: 0 10px 20px 10px;
    width: 80%;
    margin: 30px 0;
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
    margin-bottom: 30px;
    padding: 10px; 
`;

const TextContainer = styled.div`
    width: 90%;
    background: rgba(0, 20, 30, .4);
    margin: 10px
    border: none;
    border-radius: 10px;
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
        <LayoutContent>
          <TextContainer>
          <BigText>{FTitle}</BigText>
          <SmallText>{FDiscription}</SmallText>
          </TextContainer>
          <ImgSrc src={ImgSource}></ImgSrc>
          <TextContainer>
          <BigText>{STitle}</BigText>
          <SmallText>{SDiscription}</SmallText>
          </TextContainer>
        </LayoutContent>
    </LayoutDiv>
}

export default PageLayout;