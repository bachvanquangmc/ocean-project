import React, {useState} from 'react'
import styled from 'styled-components'
import {useRouter} from 'next/router'


const IpBtnWrap = styled.button `
    height: 50px;
    width: 50vw;
    margin: 15px 0 15px 0;
    background: ${props=>props.bgColor};
    border: none;
    border-radius: 30px;
    color: #FFF;
    font-size: 1em;
`

const InputBtn = ({
    value = 'Submit',
    IptRouter = '/', 
    text = 'Submit',
    bgColor = '#20BEAD'
}) =>
{
    const iptRoute = useRouter()
    
    const submitHandle = () =>
    {
        iptRoute.push(IptRouter)
    }

    return<IpBtnWrap onClick={submitHandle} value={value} bgColor={bgColor}>
        {text}
    </IpBtnWrap>

}

export default InputBtn