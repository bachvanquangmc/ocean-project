import React from 'react'
import styled from 'styled-components'
import {useRouter} from 'next/router'

const MenuBarWraper = styled.div`
    height: 80px;
    width: 100vw;
    background: rgba(255, 255, 255, 0.2);
    margin: 0px 0 5px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #FFF;
`

const MenuText = styled.h1`
    font-size: 24px;
    text-shadow: 0px 2px 2px rgba(0, 0, 0, 0.2);
`

const MenuBar = ({
    barText = 'Home'

}) => {

    

    return <MenuBarWraper>
            <MenuText>{barText}</MenuText>
        </MenuBarWraper>
} 

export default MenuBar