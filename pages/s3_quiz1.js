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
                <QizUI qizIndex={quiz1.Q1.qizIndex}  qizTitle={quiz1.Q1.qizTitle} qizText={quiz1.Q1.qizText} imgSrc={quiz1.Q1.imgSrc} callBack={process}/>
                <QizUIr qizIndex={quiz1.Q2.qizIndex}  qizTitle={quiz1.Q2.qizTitle} qizText={quiz1.Q2.qizText} imgSrc={quiz1.Q2.imgSrc} callBack={process}/>
                <QizUI qizIndex={quiz1.Q3.qizIndex}  qizTitle={quiz1.Q3.qizTitle} qizText={quiz1.Q3.qizText} imgSrc={quiz1.Q3.imgSrc} callBack={process}/>
                <QizUIr qizIndex={quiz1.Q4.qizIndex}  qizTitle={quiz1.Q4.qizTitle} qizText={quiz1.Q4.qizText} imgSrc={quiz1.Q4.imgSrc} callBack={process}/>
                <QizUI qizIndex={quiz1.Q5.qizIndex}  qizTitle={quiz1.Q5.qizTitle} qizText={quiz1.Q5.qizText} imgSrc={quiz1.Q5.imgSrc} callBack={process}/>
                <QizUIr qizIndex={quiz1.Q6.qizIndex}  qizTitle={quiz1.Q6.qizTitle} qizText={quiz1.Q6.qizText} imgSrc={quiz1.Q6.imgSrc} callBack={process}/>
                
                <InputBtn IptRouter={'/score1'}/>
            </S3Content>

        </S3Wraper>
}