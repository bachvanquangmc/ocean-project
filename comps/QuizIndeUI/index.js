import React, {useState} from 'react'
import styled from 'styled-components'

const IndeWrapper = styled.div `
    width:100vw;
    height:50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
    
`

const QuizIndeWrap = styled.div `
    width: 200px;
    display: inline-flex;
    justify-content: center;
`

const IndeUl = styled.div `
    color: #FFF;
    margin: 5px;
    width: 35px;
    font-size: 0.8em;
`
const IndeLine = styled.div `
    margin: 0 10px 10px 10px;
    width: 25px;
    height: 2px;
    background-color: ${props=>props.displayColor};
`

const QuizIndeUI =(
    displayColor = '#FFF'
)=>
{
    return<IndeWrapper>
        <QuizIndeWrap>
            <IndeUl>Quiz1</IndeUl>
            <IndeUl>Quiz2</IndeUl>
            <IndeUl>Quiz3</IndeUl>   
        </QuizIndeWrap>
        <QuizIndeWrap>
            <IndeLine displayColor='#F2E205'/>
            <IndeLine displayColor='#F2E205'/>
            <IndeLine displayColor='#F2E205'/>
        </QuizIndeWrap>
        </IndeWrapper>
}

export default QuizIndeUI