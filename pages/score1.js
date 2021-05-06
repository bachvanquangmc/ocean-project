import React, { useState } from 'react'
import Header from '../comps/Header'
import S3text from '../comps/S3textUI'
import InputBtn from '../comps/InputBtn'
import QizAnswer from '../comps/QizAnswers'
import {quiz1} from '../data/quiztext'
import SimBtn from '../comps/SimBtn'
import QuizIndeUI from '../comps/QuizIndeUI'
import {S3WraperS, S3Content, S3top} from '../styles/style'

export default function S3page({
    score1 = 0
}) {
    if(process.browser)
    {
        score1 = parseInt(sessionStorage.getItem('quiz1') / sessionStorage.getItem('sum1') * 100) 

        if(process.browser)
        {
            sessionStorage.setItem('score1', score1)
        }
    }

    const [answer, setAnswer] = useState(false)

    const answerHandle =()=>
    {
        setAnswer(!answer)
    }

    return<S3WraperS>
            <Header />
            <S3top>
                <QuizIndeUI displayColor = {1} />
                <QuizIndeUI text='Quiz2' />
                <QuizIndeUI text='Quiz3' />
            </S3top>
            <S3Content>
                <S3text titleColor='yellow' textTitle='Score for this Quiz' textBody={score1 + ' / 100'}></S3text>
            </S3Content>
            <S3Content onClick={answerHandle}>
                <SimBtn text={ answer? 'Close Answer' : 'Check Answers' } bgColor='#98A633' />
            </S3Content>
            { answer? <S3Content>
                {quiz1.map((v,i)=>{
                    return <QizAnswer 
                        key = {i} 
                        qizIndex = {v.qizIndex}
                        isTrue = { v.isTrue}
                        qizTitle = {v.qizTitle}
                        qizText = {v.qizText}
                        imgSrc = {v.imgSrc}
                        callBack ={process}
                    />
                })}
            </S3Content> : <div/>}
            <S3Content>
                <InputBtn IptRouter={'/quiz2'} text='Next Quiz'/>
                <InputBtn IptRouter={'/quiz1'} text='Redo This Quiz'/>
            </S3Content>
        </S3WraperS>
}