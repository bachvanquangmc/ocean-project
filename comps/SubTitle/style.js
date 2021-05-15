import styled from 'styled-components'

export const SmallCardWrap = styled.div `
margin-bottom: 5px;
width: 100%;
`

export const SubTitleWrap = styled.div `
width: 100%;
background: #44D1C2;
display: inline-flex;
justify-content: center;
align-items: center;

`

export const SubTextWrap = styled.div `
width: 100%;
background: #44D1C2;
display: inline-flex;
justify-content: center;
align-items: center;
border-top: solid 1px white;
display: ${props=>props.textDisplay};
`

export const LeftDiv = styled.div `
width: 70%;
`

export const RightDiv = styled.div `
width: 30%;
display: inline-flex;
p{
    color: #FFF;
}
`

export const SubTitleH4 = styled.h4 `
color: #000;
padding: 0 20px;
` 
export const Para = styled.p `
margin: 10px 20px;
line-height: 22px;
`