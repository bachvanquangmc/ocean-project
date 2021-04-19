import React from 'react'
import styled from 'styled-components'


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
    src: 'logo.svg'
`
const LogoUI = () =>
{
    return<LogoWraper>
        <LogoImg />
    </LogoWraper>
}

export default LogoUI