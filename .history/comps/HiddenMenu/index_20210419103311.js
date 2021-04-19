import React from 'react'
import styled from 'styled-components'
import MenuBar from '../MenuBar'
import {useState} from 'react'
import { loadGetInitialProps } from 'next/dist/next-server/lib/utils'

const MenuWraper = styled.div`
    display: flex;
    flex-direction: column;
    top: 0px;
    width: 100vw;
    height: 100vh;
    padding: 80px 0 80px 0;
    background-color: #0B4E8A;
    opacity: 0.9;
    display: ${props => props.display};
    position: absolute;
    left: ${props => props.left}px;
    transition: 300ms;
    z-index: 9999;
`

const MenuIconDiv = styled.div`
    width: 40px;
    height: 40px;
    margin: 3px;
    position: absolute;
    z-index: 10000;
`

const HiddenMenu = ({
    left='-3000',
    display = 'none'
}) => {
    const [menu, setMenu] = useState(false)

    const menuHandle = () =>
    {
        setMenu(!menu)
    }

    return <div>
        <MenuIconDiv onClick={menuHandle}>
            <img src='menubar.png' width='40px' height='40px' />
        </MenuIconDiv>
        <MenuWraper display={menu ? 'block' : 'none'} >
            <MenuBar barText='Home'></MenuBar>
            <MenuBar barText='Importance'></MenuBar>
            <MenuBar barText='Threats'></MenuBar>
            <MenuBar barText='Protection'></MenuBar>
        </MenuWraper>
    </div>
        

} 

export default HiddenMenu