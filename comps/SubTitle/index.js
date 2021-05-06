import react, {useState} from 'react'
import styled from 'styled-components'
import { SmallCardWrap, SubTitleWrap, SubTextWrap,  LeftDiv, RightDiv, SubTitleH4, Para } from './style'

const SubTitle =({
    textDisplay = 'none',
    subTile = 'Subtile',
    smallText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'
})=>
{
    const [displayText, setDisplaytext] = useState(false)

    const displayHandle =()=>
    {
        setDisplaytext(!displayText)
    }

    return <SmallCardWrap>
        <SubTitleWrap>
            <LeftDiv>
                <SubTitleH4>{subTile}</SubTitleH4>
            </LeftDiv>
            <RightDiv onClick={displayHandle}>
                <p>{ displayText ? 'Less <<' : '>> More'}</p>
            </RightDiv>
        </SubTitleWrap>
        <SubTextWrap textDisplay={ displayText ? 'display' : 'none' }>
                <Para>{smallText}</Para>
        </SubTextWrap>
    </SmallCardWrap> 
}

export default SubTitle