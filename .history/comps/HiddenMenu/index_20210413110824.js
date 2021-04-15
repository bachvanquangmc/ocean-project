import React from 'react'
import styled from 'styled-components'
import MenuBar from '../MenuBar'
import {useState} from 'react'

const MenuWraper = styled.div`
    display: flex;
    flex-direction: column;
    top: 0px;
    width: 280px;
    height: 500px;
    padding: 80px 0 80px 0;
    background-color: rgba(11, 78, 138);
    position:absolute;
`

const MenuIconDiv = styled.div`
    width: 40px;
    height: 40px;
    margin: 3px;
    position: absolute;

`

const HiddenMenu = () => {

    return <div>
        <MenuIconDiv>
            <img src='menubar.png' width='40px' height='40px' />
        </MenuIconDiv>
        <MenuWraper>
            <MenuBar barText='Home'></MenuBar>
            <MenuBar barText='Importance'></MenuBar>
            <MenuBar barText='Threats'></MenuBar>
            <MenuBar barText='Protection'></MenuBar>
        </MenuWraper>
    </div>
        

} 

export default HiddenMenu