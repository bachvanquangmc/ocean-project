import React, {useState} from 'react'
import styled from 'styled-components'
import {QizImg, QizInfo, QizTitle, QizText, QWrapper, QizImgW} from '../../styles/style'

const QizWrapper = styled.div `${QWrapper}`

const QizUI = ({
    imgSrc = 'car.svg',
    qizTitle = 'Question 1',
    qizText = 'This is first question',
    isTrue = null,
    selectScore = 0,
    borderSize = '0', 
    callBack =()=>{}
}) =>
{
    const [border, setBorder] = useState(false)
    
    const borderHandle = () =>
    {
        setBorder(!border)
        if(border === false && isTrue === true)
        {
            selectScore = 1
        }
        else if (border === true && isTrue === true )
        {
            selectScore = -1
        }
        
        callBack(selectScore)
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