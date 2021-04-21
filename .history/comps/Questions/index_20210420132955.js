import React from 'react'
import styled from 'styled-components'

const QizWrapper = styled.div `
    height: 100px;
    width: 100vw;
    background: rgba(255, 255, 255, 0.2);
    margin: 0 0 5px 0;
    display: inline-flex;
    color: #FFF;
`

const QizImg = styled.img `
    height:100px;
    width: 100px;
`

const QizInfo = styled.div `
    height: 100px;
    display: flex;
    flex-direction: column;
`

const QizTitle = styled.h3 `
    color: yellow;

`

const QizText = styled.p `

`

export const Questions = ({
    
}) =>
{
    return <QizWrapper>
        <QizImg />
        <QizInfo>
            <QizTitle></QizTitle>
            <QizText></QizText>
        </QizInfo>
    </QizWrapper>
}