import React, {useState} from 'react'
import Header from '../comps/Header'
import S3text from '../comps/S3textUI'
import InputBtn from '../comps/InputBtn'
import QizAnswer from '../comps/QizAnswers'
import {quiz2} from '../data/quiztext'
import SimBtn from '../comps/SimBtn'
import QuizIndeUI from '../comps/QuizIndeUI'
import {S3WraperS, S3Content, S3top} from '../styles/style'

export default function S3page({
    score2 = 0
}) {

    if(process.browser)
    {
        score2 = parseInt(sessionStorage.getItem('quiz2') / sessionStorage.getItem('sum2') * 100) 

        if(process.browser)
        {
            sessionStorage.setItem('score2', score2)
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
                <QuizIndeUI  />
                <QuizIndeUI text='Quiz2' displayColor = {1}/>
                <QuizIndeUI text='Quiz3' />
            </S3top>
            <S3Content>
                <S3text titleColor='yellow' textTitle='Score for this Quiz' textBody={score2 +' / 100'}></S3text>
            </S3Content>
            <S3Content onClick={answerHandle}>
                <SimBtn text={ answer? 'Close Answer' : 'Check Answers' } bgColor='#98A633' />
            </S3Content>
            { answer? <S3Content>
                {quiz2.map((v,i)=>{
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
                <InputBtn IptRouter={'/quiz3'} text='Next Quiz'/>
                <InputBtn IptRouter={'/quiz2'} text='Redo This Quiz'/>
            </S3Content>

        </S3WraperS>
}