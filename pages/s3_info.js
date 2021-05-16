import React from 'react'
import {S3WraperS, S3Content} from '../styles/style'
import MainCard from '../comps/MainCard'
import Header from '../comps/Header'
import InputBtn from '../comps/InputBtn'
import {info} from '../data/info'


export default function S3_Test()
{
    console.log(info[0].ATitle)
    return<S3WraperS>
            <Header />
            <S3Content>
                <MainCard CardImg='/thinkgreen.jpg' CardTitle={info[0].ATitle} CardPara={info[0].AText} CardSubTitle1={info[0].Subtitle1} CardSubText1={info[0].Subtext1} CardSubTitle2={info[0].Subtitle2} CardSubText2={info[0].Subtext2} CardSubTitle3={info[0].Subtitle3} CardSubText3={info[0].Subtext3} CardSubTitle4={info[0].Subtitle4} CardSubText4={info[0].Subtext4} CardSubTitle5={info[0].Subtitle5} CardSubText5={info[0].Subtext5} CardSubTitle6='' CardSubText6=''/>
                <MainCard CardImg='/info2.jpg' CardTitle={info[1].ATitle} CardPara={info[1].AText} CardSubTitle1={info[1].Subtitle1} CardSubText1={info[1].Subtext1} CardSubTitle2={info[1].Subtitle2} CardSubText2={info[1].Subtext2} CardSubTitle3={info[1].Subtitle3} CardSubText3={info[1].Subtext3} CardSubTitle4={info[1].Subtitle4} CardSubText4={info[1].Subtext4} CardSubTitle5={info[1].Subtitle5} CardSubText5={info[1].Subtext5}/>
                <MainCard CardImg='/info3.jpg' CardTitle={info[2].ATitle} CardPara={info[2].AText} CardSubTitle1={info[2].Subtitle1} CardSubText1={info[2].Subtext1} CardSubTitle2={info[2].Subtitle2} CardSubText2={info[2].Subtext2} CardSubTitle3={info[2].Subtitle3} CardSubText3={info[2].Subtext3} CardSubTitle4={info[2].Subtitle4} CardSubText4={info[2].Subtext4} CardSubTitle5={info[2].Subtitle5} CardSubText5={info[2].Subtext5} CardSubTitle6={info[2].Subtitle6} CardSubText6={info[2].Subtext6}/>
                <InputBtn text='Do Some Quiz' IptRouter={'/quiz1'} bgColor='#034C8C'/>
            </S3Content>
        </S3WraperS>
}