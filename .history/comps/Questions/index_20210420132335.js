import React from 'react'
import styled from 'styled-components'

const QizWrapper = styled.div `
    height: 100px;
    width: 100vw;
    background: rgba(255, 255, 255, 0.2);
    margin: 0 0 5px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #FFF;

`

const QizTitle = styled.h3 `


`

const QizText = styled.p `

`

const Questions = () =>
{
    return <QizWrapper>
        <div></div>
        <div>
            <QizTitle></QizTitle>
            <QizText></QizText>
        </div>
    </QizWrapper>
}