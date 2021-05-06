import React from 'react'
import styled from 'styled-components'
import { TextWrap, Title, Body } from './style'

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