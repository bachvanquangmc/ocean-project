import React from 'react'
import styled from 'styled-components'
import {QizImg, QizInfo, QizTitle, QizText, QWrapper, QizImgW, QizState} from '../../styles/style'

const QizWrapper = styled.div `${QWrapper}`

const QizAnswer = ({
    imgSrc = 'car.svg',
    qizTitle = 'Question 1',
    qizText = 'This is first question',
    isTrue = ''
}) =>
{

    return <QizWrapper>
        <QizImgW>
            <QizImg src={imgSrc} />
        </QizImgW>
        <QizInfo>
            <QizTitle>{qizTitle}</QizTitle>
            <QizText>{qizText}</QizText>
        </QizInfo>
        <QizState>{isTrue.toString().toUpperCase()}</QizState>
    </QizWrapper>
}

export default QizAnswer