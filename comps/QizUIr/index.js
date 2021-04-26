import React, {useState} from 'react'
import styled from 'styled-components'
import {QizImg, QizInfo, QizTitle, QizText, QWrapper, QizImgW} from '../../styles/style'

const QizWrapper = styled.div `${QWrapper}`

const QizUIr = ({
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
        <QizInfo>
            <QizTitle>{qizTitle}</QizTitle>
            <QizText>{qizText}</QizText>
        </QizInfo>
        <QizImgW>
            <QizImg src={imgSrc} />
        </QizImgW>
    </QizWrapper>
}

export default QizUIr