import React from 'react'
import styled from 'styled-components'
import MenuBar from '../MenuBar'
import BackBtn from '../BackBtn'
import {useState} from 'react'
import {Wrapper, MenuWraper, MenuTop, MenuIconDiv} from './style'
import {MenuData} from '../../data/hiddenMenu'

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
            {MenuData.map((v,i)=>{
                return <MenuBar
                key={i}
                mRouter={v.mRouter}
                barText={v.barText}
                />
            })}
        </MenuWraper>
    </Wrapper>
} 

export default HiddenMenu