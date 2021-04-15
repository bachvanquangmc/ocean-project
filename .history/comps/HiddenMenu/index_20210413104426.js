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
    background-color: rgba(11, 78, 138, 0.5);
`

const MenuIconDiv = styled.div`
    width:

`

const HiddenMenu = () => {

    return <MenuWraper>
        <MenuBar barText='Home'></MenuBar>
        <MenuBar barText='Importance'></MenuBar>
        <MenuBar barText='Threats'></MenuBar>
        <MenuBar barText='Protection'></MenuBar>
    </MenuWraper>
} 

export default HiddenMenu