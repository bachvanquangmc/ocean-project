import styled from 'styled-components'
// import your comps here
import HiddenMenu from '../comps/HiddenMenu'
import Category from '../comps/CategoryUI'
import AppName from '../comps/AppNameUI'
import LandingBtns from '../comps/LandingBtns'
import About from '../comps/AboutPageUI'
import PageLayout from '../comps/PageLayout'

import S3text from '../comps/S3textUI'
import S3image from '../comps/S3image'




const Home = styled.div`
    width: 100vw;
    heigh: 100vh;
    display: flex;
    flex-direction: column;
    background-color: #333;
    background-image: url(ocean_background_home.svg);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
`

export default function HomeBody() {
  return<Home>
            <HiddenMenu></HiddenMenu>

            <AppName text="Edu-Ocean"></AppName>
            <Category CatName="Importance" text="Ocean is so important to us" direction="right"/>
            <Category CatName="Threats" text="To the ocean" direction="left"/>
            <Category CatName="Protection" text="Things we can do to save the ocean" direction="right" />


    </Home>
}