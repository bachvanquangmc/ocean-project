import React, {useState} from 'react'
import styled from 'styled-components'


const IpBtnWrap = styled.button `
    height: 70px;
    width: 90vw;
    margin-top: 15px;
    background: rgba(255, 255, 255, 0.2);
    border: none;
    border-radius: 10px;
    color: yellow;
    font-size: 1.2em;
`


const InputBtn = ({
    value = 'Submit',
    IptRouter = '/score'
}) =>
{
    const iptRoute = useRouter()
    
    const submitHandle = () =>
    {
        console.log(value)

    }

    return<IpBtnWrap onClick={submitHandle} value={value}>
        Submit
    </IpBtnWrap>

}

export default InputBtn