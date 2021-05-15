import React from 'react'
import Header from '../comps/Header'
import S3text from '../comps/S3textUI'
import QizUI from '../comps/QizUI'
import InputBtn from '../comps/InputBtn'
import {S3Wraper, S3Content, S3top} from '../styles/style'
import {quiz3} from '../data/quiztext'
import QuizIndeUI from '../comps/QuizIndeUI'

export default function S3page({
    quiz3Right = 0
}) {
    const process =(x, value)=>
    {
        if(value == quiz3[x].isTrue)
        {
            quiz3Right = quiz3Right + 1
        }
        else
        {
            quiz3Right = quiz3Right - 1
        }

        if(process.browser)
        {
            if(quiz3Right < 0 )
            {
                quiz3Right = 0
                sessionStorage.setItem('quiz3', quiz3Right)
            }
            else
            {
                sessionStorage.setItem('quiz3', quiz3Right)
            }
        }  
    }
    
    var sum = 0
    var newarry = quiz3.map((v,i)=>{ 
        return v.isTrue
    })

    sum = newarry.length
    
    if(process.browser)
    {   
        sessionStorage.setItem('quiz3', 0)
        sessionStorage.setItem('score3', 0)   
        sessionStorage.setItem('sum3', sum)
    }

    return<S3Wraper>
            <Header />
            <S3top>
                <QuizIndeUI  />
                <QuizIndeUI text='Quiz2' />
                <QuizIndeUI text='Quiz3' displayColor = {1}/>
            </S3top>
            <S3Content>
                <S3text titleColor='yellow' textTitle='Quiz One: What can I do to help prevent climate change?' textBody='Please click on the ways you think it will work'></S3text>
            </S3Content>
            <S3Content>
                {quiz3.map((v,i)=>{
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
                <InputBtn IptRouter={'/score3'}/>
            </S3Content>
        </S3Wraper>
}