import React, {useState} from 'react'
import styled from 'styled-components'


const IpBtnWrap = styled.input `
    height: 70px;
    width: 90vw;
    margin-top: 15px;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 15px;
    color: #yellow;
    box-sizing: border-box;
`


const InputBtn = () =>
{
    return<IpBtnWrap type='submit' value='submit'>

    </IpBtnWrap>
}

export default InputBtn