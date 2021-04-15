import React from 'react'
import styled from 'styled-components'

const ImageWrap = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

`

const Image = styled.img`
    max-width: 400px;

`

const S3image = ({
    ImageSrc = 'fishing_net.svg'
}) => {
    return <ImageWrap>
        <Image src></Image>
    </ImageWrap>
}