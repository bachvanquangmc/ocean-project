import styled from 'styled-components'
import Category from '../comps/CategoryUI'
// import your comps here

const Home = styled.div`
    width: 100vw;
    display: flex;
    flex-direction: column;
`

export default function HomeBody() {
  return<Home>
    <Category CatName="Importance" text="Ocean is so important to us" direction="right"/>
    <Category CatName="Threats" text="To the ocean" direction="left"/>
    <Category CatName="Protection" text="Things we can do to save the ocean" direction="right" />
          {/* comps go here */}

    </Home>
}