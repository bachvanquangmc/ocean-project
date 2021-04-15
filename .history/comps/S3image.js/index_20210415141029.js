import React from 'react'
import styled from 'styled-components'

const ImageWrap = styled.div`
    display: flex;
    flex-direction: column;
    justify-contents: center;
     

`

const Image = styled.img`


`

const S3image = () => {
    return <ImageWrap>
        <Image></Image>
    </ImageWrap>
}