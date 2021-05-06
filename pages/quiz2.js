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

    const process =(value)=>
    {
        quiz2Right = quiz2Right + parseInt(value)
        

        if(process.browser)
        {
            sessionStorage.setItem('quiz2', quiz2Right)
        }  

    }
    
    var sum = 0
    var newarry = quiz2.map((v,i)=>{ return v.qizIndex})
    newarry.forEach((s)=>{
        sum += s
        if(process.browser)
        {
            sessionStorage.setItem('sum2', sum)
        }
    })

    return<S3Wraper>
            <Header />
            <S3top>
                <QuizIndeUI  />
                <QuizIndeUI text='Quiz2' displayColor = {1}/>
                <QuizIndeUI text='Quiz3' />
            </S3top>
            <S3Content>
                <S3text titleColor='yellow' textTitle='Quiz One: What can I do to help prevent climate change?' textBody='Please click on the ways you think it will work'></S3text>
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
                    />
                })}
                
                <InputBtn IptRouter={'/score2'}/>
            </S3Content>

        </S3Wraper>
}