import React, {useState} from 'react'
import styled from 'styled-components'

const QizWrapper = styled.div `
    height: 150px;
    width: 90vw;
    margin-top: 15px;
    background: rgba(255, 255, 255, 0.2);
    border: rgba(255, 255, 255, 0.5) ${props=> props.borderSize}px solid;
    border-radius: 15px;
    display: inline-flex;
    align-items: center;
    color: #FFF;
`


const QizImg = styled.img `
    height:100px;
    width: 100px;
    margin: 10px 10px 10px 20px;
`

const QizInfo = styled.div `
    height: 100px;
    width: 60%;
    display: flex;
    flex-direction: column;
    margin-left: 10px;
`

const QizTitle = styled.h3 `
    color: yellow;
    margin: 10px 0 0 10px;
`

const QizText = styled.p `
    margin: 10px; 0 0 0;

`

const QizUI = ({
    imgSrc = 'car.svg',
    qizTitle = 'Question 1',
    qizText = 'This is first question',
    borderSize = '0',
    onClick
}) =>
{
    
    
    return <QizWrapper onClick={borderHandle} borderSize={border ? '2' : '0'} >
        <QizImg src={imgSrc} />
        <QizInfo>
            <QizTitle>{qizTitle}</QizTitle>
            <QizText>{qizText}</QizText>
        </QizInfo>
    </QizWrapper>
}

export default QizUI