import React from 'react'
import {S3Wraper, S3Content} from '../styles/style'
import MainCard from '../comps/MainCard'
import Header from '../comps/Header'
import InputBtn from '../comps/InputBtn'


export default function S3_Test()
{
    return<S3Wraper>
            <Header />
            <S3Content>
                <MainCard />
                <MainCard />
                <MainCard />
                <InputBtn text='Do Some Quiz' IptRouter={'/quiz1'} bgColor='#034C8C'/>
            </S3Content>
        </S3Wraper>
}