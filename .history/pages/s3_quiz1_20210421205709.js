import React from 'react'
import styled from 'styled-components'
import HiddenMenu from '../comps/HiddenMenu'
import S3text from '../comps/S3textUI'
import S3image from '../comps/S3image'
import QizUI from '../comps/QizUI'
import QizUIr from '../comps/QizUIr'
import InputBtn from '../comps/InputBtn'
import {S3Wraper, S3Content} from './style/style'

export default function S3page({
    Quiz1Score = 0
}) {

    var score = 0
    const process =(value)=>
    {
        if(value === false)
        {
            score = score + 1
        }
        else if(value === true && score == 0)
        {
            score = 0
        }
        else if(value === true && score != 0 )
        {
            score = score - 1
        }
        Quiz1Score = score

        localStorage.setItem('quiz1', score)
        localStorage.setItem('quiz2', 0)
        localStorage.setItem('quiz3', 0)
        
    }

    return<S3Wraper>
                <HiddenMenu />
            <S3Content>
                <S3text titleColor='yellow' textTitle='Hello' textBody='What a wonderful app'></S3text>
            </S3Content>
            <S3Content>
                <QizUI in qizTitle='Right' qizText='Test Right' callBack={process}/>
                <QizUI qizTitle='Wrong' qizText='Test Wrong' callBack={process}/>
                <InputBtn IptRouter={'/score1'}/>
            </S3Content>

        </S3Wraper>
}