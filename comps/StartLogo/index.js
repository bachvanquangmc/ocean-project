import React from 'react'
import styled from 'styled-components'

const Wrap = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 75%;
    margin-bottom: 30px;
    max-width: 400px;

`

const Image = styled.img`
    width: 100%;
`

const Title1 = styled.h1`
    color:#ffffff;
    text-align: center;
    font-size: 3em;
`;

const StartLogo = ({
    ImageSrc = '/logo_white.svg',
    Title = 'Edu-Ocean'
}) => {
    return <Wrap>
        <Image src={ImageSrc}></Image>
        <Title1>{Title}</Title1>
    </Wrap>
}

export default StartLogo
