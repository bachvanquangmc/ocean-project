import React from 'react';
import styled from 'styled-components';

const AppNameH1 = styled.h1`
color: #FFF;
width: 100vw;
text-align: center;
font-size: 30px;
text-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);

`;

const AppName = ({
    text="App Name",
    animateName="",
    duration="1s",
}) => {
    return <AppNameH1>{text}</AppNameH1>
}

export default AppName;