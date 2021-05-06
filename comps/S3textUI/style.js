import styled, {css}from 'styled-components'

export const TextWrap = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px;
`

export const Title = styled.h1`
    color: ${props => props.titleColor};
    text-align: center;
    font-size: 1.5em;
    text-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
    position: relative;
`

export const Body = styled.p`
    color: #FFF;
    position: relative;
    margin: 15px;
    font-size: 1.1em;
    padding: 0 10px 0 10px;
`