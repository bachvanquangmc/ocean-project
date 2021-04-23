import React from 'react'
import styled from 'styled-components'

const LogoWraper = styled.div`
    height: 100vh;
    display: flex;
    align-items: center;
    justify
`
const LogoImg = styled.div`
    width: 200px;
    height: 200px;

`
const LogoUI = () =>
{
    return<LogoWraper>
        <LogoImg src='logo.svg' />
    </LogoWraper>
}

export default LogoUI