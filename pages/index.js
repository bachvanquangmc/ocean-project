import styled from 'styled-components'
import LandingBtns from '../comps/LandingBtns'
import Logo from '../comps/LogoUI'
import IntroTitleUI from '../comps/IntroTitleUI';

<<<<<<< HEAD

const Home = styled.div`
    width: 100vw;
=======
const LandingPage = styled.div`
>>>>>>> main
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
<<<<<<< HEAD
    background-color: #333;
    background-image: url(ocean_background_home.svg);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
<<<<<<< HEAD
    z-index: -1;
=======
    // overflow-y: scroll;
=======
    background: rgb(101,210,255);
    background: linear-gradient(180deg, rgba(101,210,255,1) 0%, rgba(25,149,201,1) 37%, rgba(11,78,138,1) 100%);
>>>>>>> 0789f87e84154acf530dc5fdb3271ebe38fdda85
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