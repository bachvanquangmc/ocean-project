import React from 'react'
import HiddenMenu from '../comps/HiddenMenu'
import S3text from '../comps/S3textUI'
import QizUI from '../comps/QizUI'
import QizUIr from '../comps/QizUIr'
import InputBtn from '../comps/InputBtn'
import {S3Wraper, S3Content} from '../styles/style'
import {quiz2} from '../data/quiztext'

export default function S3page({
    Quiz2Score = 0
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
            Quiz2Score = 0
        }
        else
        {
            Quiz2Score = score
        }

        if(process.browser)
        {
            sessionStorage.setItem('quiz2', Quiz2Score)
            sessionStorage.setItem('quiz3', 0)
        }
        
    }

    return<S3Wraper>
                <HiddenMenu />
            <S3Content>
                <S3text titleColor='yellow' textTitle='Quiz Two: What can I do to reduce plastic waste?' textBody='Please click on the ways you think it will work'></S3text>
            </S3Content>
            <S3Content>
                {quiz2.map((v,i)=>{
                    return <QizUI 
                        key = {i} 
                        quizIndex = {v.qizIndex}
                        quizTitle = {v.qizTitle}
                        quizText = {v.qizText}
                        imgSrc = {v.imgSrc}
                        callBack ={process}
                    />
                })}

                <InputBtn IptRouter={'/score2'}/>
            </S3Content>

        </S3Wraper>
}