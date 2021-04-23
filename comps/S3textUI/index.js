import React from 'react'
import styled from 'styled-components'

const TextWrap = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px;
`

const Title = styled.h1`
    color: ${props => props.titleColor};
    text-align: center;
    font-size: 36px;
    text-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
    position: relative;
`

const Body = styled.p`
    color: #FFF;
    position: relative;
    margin: 15px;
    padding: 0 10px 0 10px;
`

const S3text = ({
    textTitle = 'Title',
    textBody = 'Paragraph',
    titleColor = '#FFF'
}) => {
    return <TextWrap>
        <Title titleColor={titleColor}>{textTitle}</Title>
        <Body>{textBody}</Body>
    </TextWrap>
}

export default S3text