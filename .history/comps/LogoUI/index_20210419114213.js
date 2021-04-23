import React from 'react'
import styled from 'styled-components'

const LogoWraper = styled.div`
    height: 100vh;
`
const LogoImg = styled.div`
    width: 200px;
    height: 200px;

`
const LogoUI = () =>
{
    return<LogoWraper>
        <LogoImg src='../public/logo_white.svg' />
    </LogoWraper>
}

export default LogoUI