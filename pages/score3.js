import React, {useState} from 'react'
import Header from '../comps/Header'
import S3text from '../comps/S3textUI'
import InputBtn from '../comps/InputBtn'
import QizAnswer from '../comps/QizAnswers'
import {quiz3} from '../data/quiztext'
import SimBtn from '../comps/SimBtn'
import QuizIndeUI from '../comps/QuizIndeUI'
import {S3WraperS, S3Content, S3top} from '../styles/style'

export default function S3page({
    score1 = 0,
    score2 = 0,
    score3 = 0,
    finalScore = 0
}) {

    if(process.browser)
    {
        score3 = parseInt(sessionStorage.getItem('quiz3') / sessionStorage.getItem('sum3') * 100)
        
        if(process.browser)
        {
            sessionStorage.setItem('score3', score3)

            score1 =parseInt(sessionStorage.getItem('score1')) 

            score2 =parseInt(sessionStorage.getItem('score2')) 
        }
    
        finalScore = parseInt((score1 + score2 + score3) / 3 ) 

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
                <QuizIndeUI text='Quiz2' />
                <QuizIndeUI text='Quiz3' displayColor = {1}/>
            </S3top>
            <S3Content>
                <S3text titleColor='yellow' textTitle='Your Final Score ' textBody={finalScore + ' / 100'}></S3text>
                <S3text titleColor='yellow' textTitle='Score for this Quiz' textBody={score3 + ' / 100'}></S3text>
            </S3Content>
            <S3Content onClick={answerHandle}>
                <SimBtn text={ answer? 'Close Answer' : 'Check Answers' } bgColor='#98A633' />
            </S3Content>
            { answer? <S3Content>
                {quiz3.map((v,i)=>{
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
                <InputBtn IptRouter={'/quiz1'} text='Redo All Quiz'/>
                <InputBtn IptRouter={'/quiz3'} text='Redo This Quiz'/>
                <InputBtn IptRouter={'/s3_info'} text='Read Again' bgColor='#98A633'/>
                <InputBtn IptRouter={'/categories'} text='Home Page' bgColor='#034C8C'/>
            </S3Content>

        </S3WraperS>
}