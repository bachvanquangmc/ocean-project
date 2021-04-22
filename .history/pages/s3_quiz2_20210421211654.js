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
    Quiz2Score = 0
}) {

    var score = 0
    const process =(value, i)=>
    {
        if(value === false )
        {
            score = score + parseInt(i)
        }
        else if(value === true && score == 0)
        {
            score = 0
        }
        else if(value === true && score != 0)
        {
            score = score - 1
        }
        Quiz2Score = score

        localStorage.setItem('quiz2', score)
        localStorage.setItem('quiz3', 0)
        
    }

    return<S3Wraper>
                <HiddenMenu />
            <S3Content>
                <S3text titleColor='yellow' textTitle='Hello' textBody='What a wonderful app'></S3text>
            </S3Content>
            <S3Content>
                <QizUI callBack={process}/>
                <QizUIr callBack={process} />
                <InputBtn IptRouter={'/score2'}/>
            </S3Content>

        </S3Wraper>
}