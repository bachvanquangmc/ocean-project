import React from 'react'
import styled from 'styled-components'


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
        <h1>Edu</h1>
    </LogoWraper>
}

export default LogoUI