import React, {useState} from 'react'
import styled from 'styled-components'
import {useRouter} from 'next/router'


const IpBtnWrap = styled.button `
    height: 70px;
    width: 90vw;
    margin: 15px 0 15px 0;
    background: rgba(255, 255, 255, 0.2);
    border: none;
    border-radius: 10px;
    color: yellow;
    font-size: 1.2em;
`


const InputBtn = ({
    value = 'Submit',
    IptRouter = '/', 
    text = 'Submit'
}) =>
{
    const iptRoute = useRouter()
    
    const submitHandle = () =>
    {
        iptRoute.push(IptRouter)
    }

    return<IpBtnWrap onClick={submitHandle} value={value}>
        {text}
    </IpBtnWrap>

}

export default InputBtn