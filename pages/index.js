import styled from 'styled-components'
import LandingBtns from '../comps/LandingBtns'
import Logo from '../comps/StartLogo'
import IntroTitleUI from '../comps/IntroTitleUI';

const LandingPage = styled.div`
    max-width: 500px;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background: rgb(101,210,255);
    background: linear-gradient(180deg, rgba(101,210,255,1) 0%, rgba(25,149,201,1) 37%, rgba(11,78,138,1) 100%);
`
export default function HomeBody() {
  return<LandingPage>
          <Logo></Logo>
          <LandingBtns/>
      </LandingPage>
}