import React from 'react'
import styled from 'styled-components'
import HiddenMenu from '../HiddenMenu/index.js'

const HeaderWrapper = styled.div`
    width: 100vw;
    background: rgba(20, 60, 100, 1);
    margin: 0px 0 5px 0;
    color: #FFF;
    position: fixed;
    z-index: 1;
    top: 0;
`
const MenuWrap = styled.div`
    position: fixed;
    z-index: 1;
`

const LogoWrap = styled.div`
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Image = styled.img`
    height: 40px;
    margin-right: 20px;
`

const Text = styled.h1`
    font-size: 24px;
    text-shadow: 0px 2px 2px rgba(0, 0, 0, 0.2);
`

const Header = ({
    barText = 'Edu-Ocean',
    ImageSrc = '/logo_white.svg',
}) => {
    return <HeaderWrapper>
        <MenuWrap>
          <HiddenMenu></HiddenMenu>
        </MenuWrap>
        <LogoWrap>
          <Image src={ImageSrc}></Image>
          <Text>{barText}</Text>
        </LogoWrap>
      </HeaderWrapper>
} 

export default Header