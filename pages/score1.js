import React from 'react'
import Header from '../comps/Header'
import S3text from '../comps/S3textUI'
import InputBtn from '../comps/InputBtn'
import {S3WraperS, S3Content} from '../styles/style'

export default function S3page({
    score1 = 0
}) {

    if(process.browser)
    {
        score1 = parseInt(sessionStorage.getItem('quiz1') / sessionStorage.getItem('sum1') * 100) 

        if(process.browser)
        {
            sessionStorage.setItem('score1', score1)

        }
    
    }

    return<S3WraperS>
                <Header />
            <S3Content>
                <S3text titleColor='yellow' textTitle='Score for this Quiz' textBody={score1 + ' / 100'}></S3text>
            </S3Content>
            <S3Content>
                <InputBtn IptRouter={'/quiz2'} text='Next Quiz'/>
                <InputBtn IptRouter={'/quiz1'} text='Redo This Quiz'/>
            </S3Content>

        </S3WraperS>
}