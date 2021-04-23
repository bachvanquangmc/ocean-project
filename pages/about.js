import styled from 'styled-components'
import About from '../comps/AboutPageUI'

const AboutPage = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background: rgb(101,210,255);
    background: linear-gradient(180deg, rgba(101,210,255,1) 0%, rgba(25,149,201,1) 37%, rgba(11,78,138,1) 100%);
`

export default function HomeBody() {
  return<AboutPage>
            <About/>
    </AboutPage>
}