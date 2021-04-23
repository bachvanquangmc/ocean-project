import React from 'react'
import styled from 'styled-components'

const QizWrapper = styled.div `
    height: 150px;
    width: 100vw;
    background: rgba(255, 255, 255, 0.2);
    margin: 0 0 5px 0;
    display: inline-flex;
    align-items: center;
    color: #FFF;
`

const QizImg = styled.img `
    height:100px;
    width: 100px;
    margin: 10px;
`

const QizInfo = styled.div `
    height: 100px;
    display: flex;
    flex-direction: column;
    margin-left: 10px;
`

const QizTitle = styled.h3 `
    color: yellow;
    margin: 10px

`

const QizText = styled.p `

`

const QizUI = ({
    imgSrc = 'logo.svg',
    qizTitle = 'Question 1',
    qizText = 'This is first question'
}) =>
{
    return <QizWrapper>
        <QizImg src={imgSrc} />
        <QizInfo>
            <QizTitle>{qizTitle}</QizTitle>
            <QizText>{qizText}</QizText>
        </QizInfo>
    </QizWrapper>
}

export default QizUI