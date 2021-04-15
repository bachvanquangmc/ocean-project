import styled from 'styled-components'
// import your comps here
import HiddenMenu from '../comps/HiddenMenu'
import MenuBar from '../comps/MenuBar'
import Category from '../comps/CategoryUI'
import AppName from '../comps/AppNameUI'
import LandingBtns from '../comps/LandingBtns'
import About from '../comps/AboutPageUI'
import PageLayout from '../comps/PageLayout'

const Home = styled.div`
  
    display: flex;
    flex-direction: column;
    background-color: #333;
    

    max-width: 500px; 
    height: 100vh;
    overflow-y: scroll;

  
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

            <PageLayout FTitle="Threats" FDiscription="to the Ocean" BackgroundImg="/ocean_background.svg"></PageLayout>
            <PageLayout FTitle="Hi" STitle="Hello" FDiscription="asds" SDiscription="asdasd" BackgroundImg="/marinelife.svg"></PageLayout>
            <PageLayout FTitle="Climate Change" STitle="Warmer and Acidity" FDiscription="impacts ocean temperature and acidity" SDiscription="Higher temperature and acidity make marine life harder" BackgroundImg="" ImgSource="/phytoplankton_less.svg"></PageLayout>
            <PageLayout FTitle="Five Trillion" STitle="Plastic" FDiscription="pieces of plastic pollution are afloat in the oceans" SDiscription="has been found in the ocean as deep as 11km" BackgroundImg="plastic-01.svg"></PageLayout>
            <PageLayout FTitle="Overfishing" STitle="1/3" SDiscription="of global fish stocks are overfished" BackgroundImg="overfishing-01.svg"></PageLayout>
            <PageLayout STitle="Waste Pollution from Ships" SDiscription="Apart from other pollutants such as oil and gas, the waste and garbage generated on board ships poses a significant threat to the marine ecosystem" BackgroundImg="ocean_threats.jpg" ImgSource="fishing_boat1.svg"></PageLayout>




    </Home>
}