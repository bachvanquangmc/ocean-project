import React, {useState} from 'react'
import styled from 'styled-components'
import HiddenMenu from '../comps/HiddenMenu'
import S3text from '../comps/S3textUI'
import S3image from '../comps/S3image'
import QizUI from '../comps/QizUI'
import QizUIr from '../comps/QizUIr'
import InputBtn from '../comps/InputBtn'

const S3Wraper = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    background: linear-gradient(180deg, rgba(25, 149, 201, 0.79) 0%, #1995C9 41.15%, #116DA5 100%);
    z-index: -1;
`

const S3Conten = styled.div `
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export default function S3page() {

    const [border, setBorder] = useState(false)
    
    const borderHandle = () =>
    {
        setBorder(!border)
    }
    
    var value 
    if(border === true)
    {
        value = 1
    }
    else
    {
        value = -1
    }
    console.log(value)

  return<S3Wraper>
            <HiddenMenu />
        <S3Conten>
            <S3text titleColor='yellow' textTitle='Hello' textBody='What a wonderful app'></S3text>
        </S3Conten>
        <S3Conten>
            <QizUI
             onClick={borderHandle} 
             borderSize={border ? 2 : 0} 
             qizTitle='Hello'
             qizText='A good question'
             />
            <InputBtn />
        </S3Conten>

    </S3Wraper>

}