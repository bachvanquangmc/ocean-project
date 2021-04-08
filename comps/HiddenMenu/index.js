import React from 'react'
import styled from 'styled-components'

const MenuWraper = styled.div`
    background: #0B4E8A;
    display: flex;
    top: 0px;
    width: 280px;
    height: 100px;
    margin-bottom: 3px;
    background-color: rgba(11, 78, 138);
    z-index: 2;
`



const HiddenMenu = () => {
    return <MenuWraper>
    </MenuWraper>
} 

export default HiddenMenu