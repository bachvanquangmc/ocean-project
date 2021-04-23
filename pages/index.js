import React from 'react'
import styled from 'styled-components'
import HiddenMenu from '../comps/HiddenMenu'
import {useRouter} from 'next/router'

const Home = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    background-color: #333;
    background-image: url(ocean_background_home.svg);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    z-index: -1;
`

export default function HomeBody() {

  const routerTemp = useRouter()

  return<Home>
            <HiddenMenu />

            <AppName text="Edu-Ocean"></AppName>
            <Category CatName="Importance" text="Ocean is so important to us" direction="right"/>
            <Category CatName="Threats" text="To the ocean" direction="left"/>
            <Category CatName="Protection" text="Things we can do to save the ocean" direction="right" />

            <LandingBtns/>
            <About/>

            <ImpIntro/>

            <S3text></S3text>
            <S3image></S3image>

            <ThreatIntro/>

            <PageLayout FTitle="Threats" FDiscription="to the Ocean" BackgroundImg="/ocean_background.svg"></PageLayout>
            <PageLayout FTitle="Hi" STitle="Hello" FDiscription="asds" SDiscription="asdasd" BackgroundImg="/marinelife.svg"></PageLayout>
            <PageLayout FTitle="Climate Change" STitle="Warmer and Acidity" FDiscription="impacts ocean temperature and acidity" SDiscription="Higher temperature and acidity make marine life harder" BackgroundImg="" ImgSource="/phytoplankton_less.svg"></PageLayout>
            <PageLayout FTitle="Five Trillion" STitle="Plastic" FDiscription="pieces of plastic pollution are afloat in the oceans" SDiscription="has been found in the ocean as deep as 11km" BackgroundImg="plastic-01.svg"></PageLayout>
            <PageLayout FTitle="Overfishing" STitle="1/3" SDiscription="of global fish stocks are overfished" BackgroundImg="overfishing-01.svg"></PageLayout>
            <PageLayout STitle="Waste Pollution from Ships" SDiscription="Apart from other pollutants such as oil and gas, the waste and garbage generated on board ships poses a significant threat to the marine ecosystem" BackgroundImg="ocean_threats.jpg" ImgSource="fishing_boat1.svg"></PageLayout>
 
            <ProIntro/>
    </Home>
}