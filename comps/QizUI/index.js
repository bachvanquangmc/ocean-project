import React, {useState} from 'react'
import styled from 'styled-components'
import {QizImg, QizInfo, QizTitle, QizText, QWrapper, QizImgW, QizState, QizSelectT, QizSelectF} from '../../styles/style'

const QizWrapper = styled.div `${QWrapper}`


const QizUI = ({
    imgSrc = 'car.svg',
    qizTitle = 'Question 1',
    qizText = 'This is first question',
    isTrue = null,
    qizIndex = null,
    qizId = null,
    selectScore = null,
    borderSizeT = '0',
    borderSizeF = '0',  
    callBack =()=>{}
}) =>
{
    const [borderT, setBorderT] = useState(false)
    
    const borderHandleT = () =>
    {
        setBorderT(true)
        setBorderF(false)
        selectScore = true        

        if(borderT==false)
        {
            callBack(qizId, selectScore)
        }
    } 
    
    const [borderF, setBorderF] = useState(false)
    
    const borderHandleF = () =>
    {
        setBorderF(true)
        setBorderT(false)
        selectScore = false

        if(borderF==false)
        {
            callBack(qizId, selectScore)
        }
    } 

    return <QizWrapper >
        <QizImgW>
            <QizImg src={imgSrc} />
        </QizImgW>
        <QizInfo>
            <QizTitle>{qizTitle}</QizTitle>
            <QizText>{qizText}</QizText>
        </QizInfo>
        <QizState>
            <QizSelectT onClick={borderHandleT} borderSizeT={borderT ? '2' : '0'}>
                True
            </QizSelectT>
            <QizSelectF onClick={borderHandleF} borderSizeF={borderF ? '2' : '0'}>
                False
            </QizSelectF>
        </QizState>
    </QizWrapper>
}

export default QizUI