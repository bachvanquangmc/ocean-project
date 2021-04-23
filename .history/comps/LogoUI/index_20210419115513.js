import React from 'react'
import styled from 'styled-components'
import AppName from '../AppNameUI'

const LogoWraper = styled.div`
    height: 100vh;
    display: flex;
    // align-items: center;
    justify-content: center;
`
const LogoImg = styled.div`
    margin: 150px 0 50px 0;
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