import styled from 'styled-components'
import HiddenMenu from '../comps/HiddenMenu'
import Category from '../comps/CategoryUI'
import AppName from '../comps/AppNameUI'

const Home = styled.div`
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: #333;
    background-image: url(ocean_background_home.svg);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    overflow-y: scroll;
`

export default function HomeBody() {
  return<Home>
            <AppName text="Edu-Ocean"></AppName>
            
            <Category CatName="Importance" text="Ocean is so important to us" direction="right"/>
            <Category CatName="Threats" text="To the ocean" direction="left"/>
            <Category CatName="Protection" text="Things we can do to save the ocean" direction="right" />
    </Home>
}