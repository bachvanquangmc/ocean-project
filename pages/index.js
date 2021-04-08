import styled from 'styled-components'
// import your comps here
import HiddenMenu from '../comps/HiddenMenu'
import MenuBar from '../comps/MenuBar'
import Category from '../comps/CategoryUI'

const Home = styled.div`
    width: 100vw;
    display: flex;
    flex-direction: column;
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
  
            <Category CatName="Importance" text="Ocean is so important to us" direction="right"/>
            <Category CatName="Threats" text="To the ocean" direction="left"/>
            <Category CatName="Protection" text="Things we can do to save the ocean" direction="right" />

    </Home>
}