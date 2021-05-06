import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import AppName from '../AppNameUI'


const LogoWraper = styled.div`
    max-width: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 50px;
`
const LogoImg = styled.div`
    width: 175px;
    transform: rotate(${props => props.rotate}deg);
    transition: transform 2s;
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