import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import AppName from '../AppNameUI'


const LogoWraper = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const LogoImg = styled.div`
    margin: 150px 0 50px 0;
    width: 150px;
    height: 150px;
    transform: rotate(${props => props.rotate}deg);
    transition: transform 1s;
`
const LogoUI = (
    rotate = '0'
) =>
{
    const [rotateState, setRotate] = useState(false)

    useEffect(()=>{
        setRotate(true)
    })

    return<LogoWraper>
        <LogoImg rotate={ rotateState ? 360 : 0 } >
            <img src='logo_white.svg' />
        </LogoImg>
        <AppName text="Edu-Ocean"></AppName>
    </LogoWraper>
}

export default LogoUI