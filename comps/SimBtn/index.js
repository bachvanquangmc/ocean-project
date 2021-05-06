import React from 'react'
import styled from 'styled-components'


const SimBtnWrap = styled.button `
    height: 50px;
    width: 50vw;
    margin: 15px 0 15px 0;
    background: ${props=>props.bgColor};
    border: none;
    border-radius: 30px;
    color: #FFF;
    font-size: 1em;
`

const SimBtn = ({
    value = 'Submit',
    text = 'Submit',
    bgColor = '#20BEAD'
}) =>
{
    return<SimBtnWrap value={value} bgColor={bgColor}>
        {text}
    </SimBtnWrap>
}

export default SimBtn