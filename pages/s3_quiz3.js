import React from 'react'
import HiddenMenu from '../comps/HiddenMenu'
import S3text from '../comps/S3textUI'
import QizUI from '../comps/QizUI'
import QizUIr from '../comps/QizUIr'
import InputBtn from '../comps/InputBtn'
import {S3Wraper, S3Content} from './style/style'
import {quiz3} from '../data/quiztext'

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
            <S3Content>
                <S3text titleColor='yellow' textTitle='Quiz Three: What are Canadian sustainable seafoods' textBody='Please click on the ways you think it will work'></S3text>
            </S3Content>
            <S3Content>
                <QizUI qizIndex={quiz3.Q1.qizIndex}  qizTitle={quiz3.Q1.qizTitle} qizText={quiz3.Q1.qizText} imgSrc={quiz3.Q1.imgSrc} callBack={process}/>
                <QizUIr qizIndex={quiz3.Q2.qizIndex}  qizTitle={quiz3.Q2.qizTitle} qizText={quiz3.Q2.qizText} imgSrc={quiz3.Q2.imgSrc} callBack={process}/>
                <QizUI qizIndex={quiz3.Q3.qizIndex}  qizTitle={quiz3.Q3.qizTitle} qizText={quiz3.Q3.qizText} imgSrc={quiz3.Q3.imgSrc} callBack={process}/>
                <QizUIr qizIndex={quiz3.Q4.qizIndex}  qizTitle={quiz3.Q4.qizTitle} qizText={quiz3.Q4.qizText} imgSrc={quiz3.Q4.imgSrc} callBack={process}/>
                <QizUI qizIndex={quiz3.Q5.qizIndex}  qizTitle={quiz3.Q5.qizTitle} qizText={quiz3.Q5.qizText} imgSrc={quiz3.Q5.imgSrc} callBack={process}/>
                <QizUIr qizIndex={quiz3.Q6.qizIndex}  qizTitle={quiz3.Q6.qizTitle} qizText={quiz3.Q6.qizText} imgSrc={quiz3.Q6.imgSrc} callBack={process}/>
                <QizUI qizIndex={quiz3.Q7.qizIndex}  qizTitle={quiz3.Q7.qizTitle} qizText={quiz3.Q7.qizText} imgSrc={quiz3.Q7.imgSrc} callBack={process}/>

                <InputBtn IptRouter={'/score3'}/>
            </S3Content>

        </S3Wraper>
}