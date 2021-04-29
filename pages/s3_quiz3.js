import React from 'react'
import HiddenMenu from '../comps/HiddenMenu'
import S3text from '../comps/S3textUI'
import QizUI from '../comps/QizUI'
import QizUIr from '../comps/QizUIr'
import InputBtn from '../comps/InputBtn'
import {S3Wraper, S3Content} from '../styles/style'
import {quiz3} from '../data/quiztext'
import QuizIndeUI from '../comps/QuizIndeUI'

export default function S3page({
    Quiz3Score = 0
}) {

    var score = 0
    const process =(value, i)=>
    {
        if(value === false )
        {
            score = score + parseInt(i)
        }
        else if(value === true )
        {
            score = score - parseInt(i)
        }

        if( score < 0)
        {
            Quiz3Score = 0
        }
        else
        {
            Quiz3Score = score
        }

        if(process.browser)
        {
            sessionStorage.setItem('quiz3', Quiz3Score)
        }
        
    }

    return<S3Wraper>
            <HiddenMenu />
            <QuizIndeUI  />
            <S3Content>
                <S3text titleColor='yellow' textTitle='Quiz Three: What are Canadian sustainable seafoods' textBody='Please click on the ways you think it will work'></S3text>
            </S3Content>
            <S3Content>
                {quiz3.map((v,i)=>{
                    return <QizUI 
                        key = {i} 
                        qizIndex = {v.qizIndex}
                        qizTitle = {v.qizTitle}
                        qizText = {v.qizText}
                        imgSrc = {v.imgSrc}
                        callBack ={process}
                    />
                })}

                <InputBtn IptRouter={'/score3'}/>
            </S3Content>

        </S3Wraper>
}