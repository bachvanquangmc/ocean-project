import React from 'react'
import styled from 'styled-components'

const LogoWraper = styled.div`
    
`
const LogoImg = styled.div`
    width: 200px;
    height: 200px;

`
const LogoUI = () =>
{
    return<LogoWraper>
        <LogoImg src='logo_white.svg' />
    </LogoWraper>
}
