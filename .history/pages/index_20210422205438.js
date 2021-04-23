import styled from 'styled-components'
import LandingBtns from '../comps/LandingBtns'
import Logo from '../comps/LogoUI'
import IntroTitleUI from '../comps/IntroTitleUI';

const LandingPage = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    background-color: #333;
    background-image: url(ocean_background_home.svg);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    // overflow-y: scroll;
=======
    background: rgb(101,210,255);
    background: linear-gradient(180deg, rgba(101,210,255,1) 0%, rgba(25,149,201,1) 37%, rgba(11,78,138,1) 100%);
>>>>>>> main
`
export default function HomeBody() {
<<<<<<< HEAD

  const routerTemp = useRouter()

  return<Home>
            <HiddenMenu />
            
    </Home>
=======
  return<LandingPage>
          <Logo></Logo>
          <LandingBtns/>
      </LandingPage>
>>>>>>> main
}