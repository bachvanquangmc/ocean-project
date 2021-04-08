import styled from 'styled-components'

const Home = styled.div`
    width: 100vw;
    display: flex;
    flex-direction: column;
`

export default function HomeBody() {
  return<Home>
          <WarrenCard tiltle='Warren' spanText='This is a good card' buttonText='Dont Click' />
          <Course bgcolor="#F8B9B9" />
          <Comp1/>
    </Home>
}