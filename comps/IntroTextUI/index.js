import React from 'react';
import styled from 'styled-components';

const ParaCont = styled.div`
`;

const Para1 = styled.p`
    color:#ffffff;   
    text-align: center;
    margin:10px;
    text-shadow: 1px 1px 1px black;
`;

const Para = ({
    Body = "Body text",
}) => {

    return <ParaCont>
    <Para1>{Body}</Para1>
    </ParaCont>
}

export default Para;