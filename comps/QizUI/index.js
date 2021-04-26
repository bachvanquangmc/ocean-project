import React, {useState} from 'react'
import styled from 'styled-components'
import {QizImg, QizInfo, QizTitle, QizText, QWrapper, QizImgW} from '../../styles/style'

const QizWrapper = styled.div `${QWrapper}`

const QizUI = ({
    imgSrc = 'car.svg',
    qizTitle = 'Question 1',
    qizText = 'This is first question',
    qizIndex = '1',
    borderSize = '0', 
    callBack =()=>{}
}) =>
{
    const [border, setBorder] = useState(false)
    
    const borderHandle = () =>
    {
        setBorder(!border)
        {qizIndex}
        callBack(border, qizIndex)
    }
    
    
    return <QizWrapper onClick={borderHandle} borderSize={border ? '2' : '0'} >
        <QizImgW>
            <QizImg src={imgSrc} />
        </QizImgW>
        <QizInfo>
            <QizTitle>{qizTitle}</QizTitle>
            <QizText>{qizText}</QizText>
        </QizInfo>
    </QizWrapper>
}

export default QizUI