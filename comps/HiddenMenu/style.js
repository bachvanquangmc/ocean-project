import styled, {css}from 'styled-components'

export const Wrapper = styled.div `
    width: 100vw;
`

export const MenuWraper = styled.div `
    display: flex;
    flex-direction: column;
    top: 0px;
    width: 100vw;
    height: 100vh;
    padding: 80px 0 80px 0;
    background-color: #0B4E8A;
    opacity: 0.98;
    display: ${props => props.display};
    position: absolute;
    z-index: 9999;
`

export const MenuTop = styled.div `
    width: 100vw;
    height: 46px;
    display: inline-flex;
`

export const MenuIconDiv = styled.div`
    width: 40px;
    height: 40px;
    top: 8px;
    right: 5px;
    margin: 3px;
    position: absolute;
    z-index: 10000;
`