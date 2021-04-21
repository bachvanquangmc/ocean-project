import React, {useState} from 'react'
import styled from 'styled-components'


const IpBtnWrap = styled.input `
    height: 70px;
    width: 90vw;
    margin-top: 15px;
    background: rgba(255, 255, 255, 0.2);
    border: none;
    text-decoration: none;
    border-radius: 10px;
    color: yellow;
    font-size: 1.2em;
`


const InputBtn = ({
    value = 'none'
}) =>
{
    console.log
    return<IpBtnWrap type='submit' value='Submit' />

}

export default InputBtn