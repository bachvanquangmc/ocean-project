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
                <S3text titleColor='yellow' textTitle='Quiz Two: What can I do to reduce plastic?' textBody='What a wonderful app'></S3text>
            </S3Content>
            <S3Content>
                <QizUI qizIndex='1'  qizTitle='Right' callBack={process}/>
                <QizUIr qizIndex='-1' qizTitle='Wrong' callBack={process} />
                <InputBtn IptRouter={'/score2'}/>
            </S3Content>

        </S3Wraper>
}