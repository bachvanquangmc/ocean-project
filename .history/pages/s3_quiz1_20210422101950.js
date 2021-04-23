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

        localStorage.setItem('quiz1', Quiz1Score)
        localStorage.setItem('quiz2', 0)
        localStorage.setItem('quiz3', 0)
        
    }

    return<S3Wraper>
                <HiddenMenu />
            <S3Content>
                <S3text titleColor='yellow' textTitle='Quiz One: What can I do to help prevent climate change?' textBody='Please click on the ways you think it will work'></S3text>
            </S3Content>
            <S3Content>
                <QizUI qizIndex='1' qizTitle='Right' qizTitle='Conserve Water' qizText='Watch your water usage by turning off faucets when not in use. tak' callBack={process}/>
                <QizUIr qizIndex='1' qizTitle='Reduce Your Waste' qizText='Recycling eliminates the need for new raw materials to make new products.' callBack={process}/>
                <QizUI qizIndex='1' qizTitle='Generate Clean Green Energy' qizText='Generating your own renewable enery for your heating, lighting.' callBack={process}/>
                <QizUIr qizIndex='1' qizTitle='Walk and Travel Green' qizText='Walking to the local stores or taking publick transport could reduce you carbon footprint. Getting an electric car and reduce emissions' callBack={process}/>
                <QizUI qizIndex='1' qizTitle='Stand Up and Get Involved' qizText='Speaking up is one of the most powerful things you can do.' callBack={process}/>
                <InputBtn IptRouter={'/score1'}/>
            </S3Content>

        </S3Wraper>
}