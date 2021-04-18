import React from 'react'
import styled from 'styled-components'

const ImageWrap = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

`

const Image = styled.img`
    max-width: 0px;

`

const S3image = ({
    ImageSrc = 'fishing_net.svg'
}) => {
    return <ImageWrap>
        <Image src={ImageSrc}></Image>
    </ImageWrap>
}

export default S3image