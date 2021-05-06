import React, {useState} from 'react'
import styled from 'styled-components'

const QuizIndeWrap = styled.div `
    width: 200px;
    display: flex;
    flex-direction: column;
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
    background-color: rgba(242, 226, 5, ${props=>props.displayColor}) ;
`

const QuizIndeUI =({
    displayColor = 0,
    text = 'Quiz1'

})=>
{
    return<QuizIndeWrap>
            <IndeUl> {text} </IndeUl>
            <IndeLine displayColor={displayColor}/>
        </QuizIndeWrap>
}

export default QuizIndeUI