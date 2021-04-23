import React from 'react'
import styled from 'styled-components'
import HiddenMenu from '../comps/HiddenMenu'
import S3text from '../comps/S3textUI'
import S3image from '../comps/S3image'
import QizUI from '../comps/QizUI'
import QizUIr from '../comps/QizUIr'
import InputBtn from '../comps/InputBtn'



export default function S3page({
    score = 0,
    score2 = 0,
    score3 = 0,
    finalScore = 0
}) {

    
    score = localStorage.getItem('quiz1') * 100

    score2 = localStorage.getItem('quiz2') * 100

    score3 = localStorage.getItem('quiz3') * 100

    finalScore = score + score2 + score3


    return<S3Wraper>
                <HiddenMenu />
            <S3Content>
                <S3text titleColor='yellow' textTitle='Score for this Quiz' textBody={score}></S3text>
            </S3Content>
            <S3Content>
                <S3text titleColor='yellow' textTitle='Your Final Score ' textBody={finalScore}></S3text>
            </S3Content>
            <S3Content>
                <InputBtn IptRouter={'/'} text='All Done'/>
                <InputBtn IptRouter={'/s3_quiz3'} text='Redo the Quiz'/>
            </S3Content>

        </S3Wraper>
}