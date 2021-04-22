import React from 'react'
import styled from 'styled-components'
import HiddenMenu from '../comps/HiddenMenu'
import S3text from '../comps/S3textUI'
import S3image from '../comps/S3image'
import QizUI from '../comps/QizUI'
import QizUIr from '../comps/QizUIr'
import InputBtn from '../comps/InputBtn'
import {S3Wraper, S3Content} from './style/style'
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

        localStorage.setItem('quiz2', Quiz2Score)
        localStorage.setItem('quiz3', 0)
        
    }

    return<S3Wraper>
                <HiddenMenu />
            <S3Content>
                <S3text titleColor='yellow' textTitle='Quiz Two: What can I do to reduce plastic waste?' textBody='Please click on the ways you think it will work'></S3text>
            </S3Content>
            <S3Content>
                <QizUI qizIndex={quiz.Q1.qizIndex}  qizTitle={quiz.Q1.qizTitle} qizText={quiz.Q1.qizText} imgSrc={quiz.Q1.imgSrc} callBack={process}/>
                <QizUIr qizIndex={quiz.Q2.qizIndex}  qizTitle={quiz.Q2.qizTitle} qizText={quiz.Q2.qizText} imgSrc={quiz.Q2.imgSrc} callBack={process}/>
                <QizUI qizIndex={quiz.Q3.qizIndex}  qizTitle={quiz.Q3.qizTitle} qizText={quiz.Q3.qizText} imgSrc={quiz.Q3.imgSrc} callBack={process}/>
                <QizUIr qizIndex={quiz.Q4.qizIndex}  qizTitle={quiz.Q4.qizTitle} qizText={quiz.Q4.qizText} imgSrc={quiz.Q4.imgSrc} callBack={process}/>
                <QizUI qizIndex={quiz.Q5.qizIndex}  qizTitle={quiz.Q5.qizTitle} qizText={quiz.Q5.qizText} imgSrc={quiz.Q5.imgSrc} callBack={process}/>
                <QizUIr qizIndex={quiz.Q6.qizIndex}  qizTitle={quiz.Q6.qizTitle} qizText={quiz.Q6.qizText} imgSrc={quiz.Q6.imgSrc} callBack={process}/>

                <InputBtn IptRouter={'/score2'}/>
            </S3Content>

        </S3Wraper>
}