import React, {useState} from 'react'
import styled from 'styled-components'

import {QizImg, QizInfo, QizTitle, QizText} from '../../pages/style/style'

// const QizWrapper = styled.div `
//     height: 150px;
//     width: 90vw;
//     margin-top: 15px;
//     background: rgba(255, 255, 255, 0.2);
//     border: rgba(255, 255, 255, 0.5) ${props=> props.borderSize}px solid;
//     border-radius: 10px;
//     display: inline-flex;
//     align-items: center;
//     color: #FFF;
// `

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