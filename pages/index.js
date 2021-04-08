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
          {/* comps go here */}

    </Home>
}