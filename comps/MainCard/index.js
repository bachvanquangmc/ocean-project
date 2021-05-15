import react, {useState} from 'react'
import styled from 'styled-components'
import SubTitle from '../../comps/SubTitle'
import { MainCardWrap, ImgWrap, CardTitleWrap, CardBodyWrap, CardTextPara, LeftDiv, RightDiv, CardTitleH3 } from './style'

const MainCard =({
    CardTitle = 'Title Here',
    CardPara = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    CardImg = '/thinkgreen.jpg',
    CardSubTitle1 = 'Sub Title One',
    CardSubText1 = 'Sub Text One',
    CardSubTitle2 = 'Sub Title One',
    CardSubText2 = 'Sub Text One',
    CardSubTitle3 = 'Sub Title One',
    CardSubText3 = 'Sub Text One',
    CardSubTitle4 = 'Sub Title One',
    CardSubText4 = 'Sub Text One',
    CardSubTitle5 = 'Sub Title One',
    CardSubText5 = 'Sub Text One'
})=>
{
    const [overFlow, setOverFlow] = useState(false)

    const overFlowHandle =()=>
    {
        setOverFlow(!overFlow)
    }

    return <MainCardWrap>
        <ImgWrap CardImg={CardImg}/>
        <CardTitleWrap >
            <LeftDiv>
                <CardTitleH3>{CardTitle}</CardTitleH3>
            </LeftDiv>
            <RightDiv onClick={overFlowHandle}>
                <p>{overFlow ? 'Less <<' : '>> More'}</p>
            </RightDiv>
        </CardTitleWrap>
        <CardBodyWrap bodyOverFlow={ overFlow ? 'visible' : 'hidden'} cardHeight={ overFlow ? 'auto' : '58px'}>
            <CardTextPara>{CardPara}</CardTextPara>
            <SubTitle subTitle={CardSubTitle1} smallText={CardSubText1} />
            <SubTitle subTitle={CardSubTitle2} smallText={CardSubText2} />
            <SubTitle subTitle={CardSubTitle3} smallText={CardSubText3} />
            <SubTitle subTitle={CardSubTitle4} smallText={CardSubText4} />
            <SubTitle subTitle={CardSubTitle5} smallText={CardSubText5} />
            
        </CardBodyWrap>
    </MainCardWrap>
}

export default MainCard
