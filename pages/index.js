import styled from 'styled-components'
// import your comps here
import HiddenMenu from '../comps/HiddenMenu'
import MenuBar from '../comps/MenuBar'
import Category from '../comps/CategoryUI'
import AppName from '../comps/AppNameUI'
import LandingBtns from '../comps/LandingBtns'
import About from '../comps/AboutPageUI'

const Home = styled.div`
    width: 100vw;
    heigh: 100vh;
    display: flex;
    flex-direction: column;
    background-color: #333;
`

export default function HomeBody() {
  return<Home>
          {/* comps go here */}
            <HiddenMenu></HiddenMenu>
            <MenuBar></MenuBar>
            <MenuBar barText='Importance'></MenuBar>
            <MenuBar barText='Threats'></MenuBar>
            <MenuBar barText='Protection'></MenuBar>
            <HiddenMenu></HiddenMenu>
  
            <AppName text="Edu-Ocean"></AppName>
            <Category CatName="Importance" text="Ocean is so important to us" direction="right"/>
            <Category CatName="Threats" text="To the ocean" direction="left"/>
            <Category CatName="Protection" text="Things we can do to save the ocean" direction="right" />

            <LandingBtns/>
            <About/>

    </Home>
}