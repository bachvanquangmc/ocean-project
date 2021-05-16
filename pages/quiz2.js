import React from 'react'
import Header from '../comps/Header'
import S3text from '../comps/S3textUI'
import QizUI from '../comps/QizUI'
import InputBtn from '../comps/InputBtn'
import {S3Wraper, S3Content, S3top} from '../styles/style'
import {quiz2} from '../data/quiztext'
import QuizIndeUI from '../comps/QuizIndeUI'

export default function S3page({
    quiz2Right = 0
}) {

    const process =(x, value)=>
    {
        if(value == quiz2[x].isTrue)
        {
            quiz2Right = quiz2Right + 1
        }
        else
        {
            quiz2Right = quiz2Right - 1
        }

        if(process.browser)
        {
            if(quiz2Right < 0 )
            {
                quiz2Right = 0
                sessionStorage.setItem('quiz2', quiz2Right)
            }
            else
            {
                sessionStorage.setItem('quiz2', quiz2Right)
            }
        }  
    }
    
    var sum = 0
    var newarry = quiz2.map((v,i)=>{ 
        return v.isTrue
    })

    sum = newarry.length
    
    if(process.browser)
    {      
        sessionStorage.setItem('quiz2', 0)
        sessionStorage.setItem('score2', 0)
        sessionStorage.setItem('sum2', sum)
    }

    return<S3Wraper>
            <Header />
            <S3top>
                <QuizIndeUI  />
                <QuizIndeUI text='Quiz2' displayColor = {1}/>
                <QuizIndeUI text='Quiz3' />
            </S3top>
            <S3Content>
                <S3text titleColor='yellow' textTitle='Quiz Two: What can we do to help prevent plastic pollution?' textBody='Please read the questions carefully and choose the answer.'></S3text>
            </S3Content>
            <S3Content>
                {quiz2.map((v,i)=>{
                    return <QizUI 
                        key = {i} 
                        qizIndex = {v.qizIndex}
                        isTrue = { v.isTrue}
                        qizTitle = {v.qizTitle}
                        qizText = {v.qizText}
                        imgSrc = {v.imgSrc}
                        callBack ={process}
                        qizId = {i}
                    />
                })}
                <InputBtn IptRouter={'/score2'}/>
            </S3Content>
        </S3Wraper>
}