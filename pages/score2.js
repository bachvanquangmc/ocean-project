import React from 'react'
import HiddenMenu from '../comps/HiddenMenu'
import S3text from '../comps/S3textUI'
import InputBtn from '../comps/InputBtn'
import {S3WraperS, S3Content} from '../styles/style'

export default function S3page({
    score = 0,
    score2 = 0,
    score3 = 0,
    finalScore = 0
}) {

    if(process.browser)
    {
        score = sessionStorage.getItem('quiz1') * 100
    
        score2 = sessionStorage.getItem('quiz2') * 100
    
        score3 = sessionStorage.getItem('quiz3') * 100
    
        finalScore = score + score2 + score3
    }


    return<S3WraperS>
                <HiddenMenu />
            <S3Content>
                <S3text titleColor='yellow' textTitle='Score for this Quiz' textBody={score2 +' / 600'}></S3text>
            </S3Content>
            <S3Content>
                <S3text titleColor='yellow' textTitle='Your Final Score ' textBody={finalScore + ' / 1900'}></S3text>
            </S3Content>
            <S3Content>
                <InputBtn IptRouter={'/s3_quiz3'} text='Next Quiz'/>
                <InputBtn IptRouter={'/s3_quiz2'} text='Redo This Quiz'/>
            </S3Content>

        </S3WraperS>
}