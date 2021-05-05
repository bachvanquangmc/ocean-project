import styled from 'styled-components'

export const MainCardWrap = styled.div `
    width: 80%;
    margin: 10px 0 10px 0;
    background: #20BEAD;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
`

export const ImgWrap = styled.div `
    height: 200px;
    background: grey;
    background-image: url(/243.jpg);
    background-postion: center;
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 5px 5px 0px 0px;
`

export const CardTitleWrap = styled.div `
    height: 50px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
`

export const CardBodyWrap = styled.div `
    height: ${props=>props.cardHeight};
    overflow: ${props=>props.bodyOverFlow};
`

export const CardTextPara = styled.p `
    padding: 10px 30px 10px 30px;
    border-top: solid 1px white;
    line-height: 22px;
    margin: 0;
`
export const LeftDiv = styled.div `
    width: 70%;
`

export const RightDiv = styled.div `
    width: 30%;
    p{
        color: #FFF;
    }
`

export const CardTitleH3 = styled.h3 `
    color: #000;
    padding-left: 30px;
` 