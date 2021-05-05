import react, {useState} from 'react'
import styled from 'styled-components'
import SubTitle from '../../comps/SubTitle'
import { MainCardWrap, ImgWrap, CardTitleWrap, CardBodyWrap, CardTextPara, LeftDiv, RightDiv, CardTitleH3 } from './style'

const MainCard =({
    CardTitle = 'Title Here',
    CardPara = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
})=>
{
    const [overFlow, setOverFlow] = useState(false)

    const overFlowHandle =()=>
    {
        setOverFlow(!overFlow)
    }

    return <MainCardWrap>
        <ImgWrap />
        <CardTitleWrap >
            <LeftDiv>
                <CardTitleH3>{CardTitle}</CardTitleH3>
            </LeftDiv>
            <RightDiv onClick={overFlowHandle}>
                <p>{overFlow ? 'Less <<' : '>> More'}</p>
            </RightDiv>
        </CardTitleWrap>
        <CardBodyWrap bodyOverFlow={ overFlow ? 'visible' : 'hidden'} cardHeight={ overFlow ? 'auto' : '120px'}>
            <CardTextPara>{CardPara}</CardTextPara>
            <SubTitle/>
            <SubTitle/>
            <SubTitle/>
        </CardBodyWrap>
    </MainCardWrap>
}

export default MainCard