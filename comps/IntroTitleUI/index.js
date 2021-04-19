import React from 'react';
import styled from 'styled-components';

const Titlecont = styled.div`
`;

const Title1 = styled.h1`
    color:#ffffff;   
    text-align: center;
    text-shadow: 0px 2px 2px black;
    margin:10px;
`;

const H1 = ({
    Title = "Text",
}) => {

    return <Titlecont>
    <Title1>{Title}</Title1>
    </Titlecont>
}

export default H1;