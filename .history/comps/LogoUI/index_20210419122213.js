import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'


const LogoWraper = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;

`
const LogoImg = styled.div`
    margin: 150px 0 50px 0;
    width: 200px;
    height: 200px;
    trasition-property: rotation;
    
`
const LogoUI = () =>
{
    return<LogoWraper>
        <LogoImg>
            <img src='logo_white.svg' />
        </LogoImg>
    </LogoWraper>
}

export default LogoUI