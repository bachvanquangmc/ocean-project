import React from 'react'
import HiddenMenu from '../comps/HiddenMenu'
import S3text from '../comps/S3textUI'
import QizUI from '../comps/QizUI'
import QizUIr from '../comps/QizUIr'
import InputBtn from '../comps/InputBtn'
import {S3Wraper, S3Content} from '../styles/style'
import {quiz1} from '../data/quiztext'

export default function S3page({
    Quiz1Score = 0
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
            Quiz1Score = 0
        }
        else
        {
            Quiz1Score = score
        }

        if(process.browser)
        {
            sessionStorage.setItem('quiz1', Quiz1Score)
            sessionStorage.setItem('quiz2', 0)
            sessionStorage.setItem('quiz3', 0)
        }
        
    }


    return<S3Wraper>
                <HiddenMenu />
            <S3Content>
                <S3text titleColor='yellow' textTitle='Quiz One: What can I do to help prevent climate change?' textBody='Please click on the ways you think it will work'></S3text>
            </S3Content>
            <S3Content>
                {quiz1.map((v,i)=>{
                    return <QizUI 
                        key = {i} 
                        quizIndex = {v.qizIndex}
                        quizTitle = {v.qizTitle}
                        quizText = {v.qizText}
                        imgSrc = {v.imgSrc}
                        callBack ={process}
                    />
                })}
                
                <InputBtn IptRouter={'/score1'}/>
            </S3Content>

        </S3Wraper>
}