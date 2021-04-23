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

        Quiz3Score = score

        localStorage.setItem('quiz3', score)
        
    }

    return<S3Wraper>
                <HiddenMenu />
            <S3Content>
                <S3text titleColor='yellow' textTitle='Hello' textBody='What a wonderful app'></S3text>
            </S3Content>
            <S3Content>
                <QizUI callBack={process}/>
                <QizUIr qizIndex='1'  qizTitle='Right' callBack={process} />
                <InputBtn IptRouter={'/score3'}/>
            </S3Content>

        </S3Wraper>
}