import React from 'react';
import styled from 'styled-components';

const AppNameH1 = styled.h1`
color: #FFF;
width: 100px;
text-align: center;
font-size: 32px;
text-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
animation-name:${props=>props.animateName};
animation-duration:${props=>props.duration};
animation-fill-mode: forwards;
`;

const AppName = ({
    text="App Name",
    animateName="",
    duration="1s",
}) => {
    return <AppNameH1 animateName = {animateName} duration = {duration}>{text}</AppNameH1>
}

export default AppName;