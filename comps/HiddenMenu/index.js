import React from 'react'
import styled from 'styled-components'
import MenuBar from '../MenuBar'
import BackBtn from '../BackBtn'
import {useState} from 'react'
import {Wrapper, MenuWraper, MenuTop, MenuIconDiv} from './style'

const HiddenMenu = ({
    display = 'none'
}) => {
    const [menu, setMenu] = useState(false)

    const menuHandle = () =>
    {
        setMenu(!menu)
    }

    return <Wrapper>
        <MenuTop>
            <MenuIconDiv onClick={menuHandle}>
                <img src='menubar.png' width='40px' height='40px' />
            </MenuIconDiv>
            <BackBtn />
        </MenuTop>
        <MenuWraper display={menu ? 'block' : 'none'} >
            <MenuBar mRouter='/categories' barText='Home'/>
            <MenuBar mRouter='/part1_intro' barText='Importance' />
            <MenuBar mRouter='/part2_intro' barText='Threats' />
            <MenuBar mRouter='/part3_intro' barText='Protection'/>
            <MenuBar mRouter='/quiz1' barText='Quiz'/>
            <MenuBar mRouter='/about' barText='About' />
        </MenuWraper>
    </Wrapper>
} 

export default HiddenMenu