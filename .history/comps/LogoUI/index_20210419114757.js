import React from 'react'
import styled from 'styled-components'

const LogoWraper = styled.div`
    height: 100vh;
    display: flex;
    // align-items: center;
    justify-content: center;
`
const LogoImg = styled.div`
    margin-top: 100px;
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