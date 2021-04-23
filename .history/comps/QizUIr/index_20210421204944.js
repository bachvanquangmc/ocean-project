import React, {useState} from 'react'
import styled from 'styled-components'

import {QizImg, QizInfo, QizTitle, QizText, QWrapper} from '../../pages/style/style'


const QizWrapper = styled.div `${QWrapper}`

const QizUIr = ({
    imgSrc = 'car.svg',
    qizTitle = 'Question 1',
    qizText = 'This is first question',
    borderSize = '0', 
    callBack =()=>{}
}) =>
{
    const [border, setBorder] = useState(false)
    
    const borderHandle = () =>
    {
        setBorder(!border)
        
        callBack(border)
    }
    
    
    return <QizWrapper onClick={borderHandle} borderSize={border ? '2' : '0'} >
        <QizInfo>
            <QizTitle>{qizTitle}</QizTitle>
            <QizText>{qizText}</QizText>
        </QizInfo>
        <QizImg src={imgSrc} />
    </QizWrapper>
}

export default QizUIr