import React, {useState} from 'react'
import styled from 'styled-components'

const QizWrapperR = styled.div `
    height: 150px;
    width: 100vw;
    margin-top: 15px;
    background: rgba(255, 255, 255, 0.2);
    border: rgba(255, 255, 255, 0.5) ${props=> props.borderSize}px solid;
    display: inline-flex;
    align-items: center;
    color: #FFF;
`

const QizImgR = styled.img `
    height:100px;
    width: 100px;
    margin: 10px 10px 10px 20px;
`

const QizInfoR = styled.div `
    height: 100px;
    display: flex;
    flex-direction: column;
    margin-left: 10px;
`

const QizTitleR = styled.h3 `
    color: yellow;
    margin: 10px 0 0 10px;
`

const QizTextR = styled.p `
    margin: 10px; 0 0 0;

`

const QizUIr = ({
    imgSrcR = 'car.svg',
    qizTitleR = 'Question 1',
    qizText = 'This is first question',
    borderSize = '0'
}) =>
{
    const [border, setBorder] = useState()

    const borderHandle = () =>
    {
        setBorder(!border)
    }

    return <QizWrapper onClick={borderHandle} borderSize={border ? '2' : '0'}>
        <QizImg src={imgSrc} />
        <QizInfo>
            <QizTitle>{qizTitle}</QizTitle>
            <QizText>{qizText}</QizText>
        </QizInfo>
    </QizWrapper>
}

export default QizUI