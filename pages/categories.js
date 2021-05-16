import styled from 'styled-components'
import HiddenMenu from '../comps/HiddenMenu'
import Category from '../comps/CategoryUI'
import AppName from '../comps/AppNameUI'
import Header from '../comps/Header'
import {useRouter} from 'next/router'

const Home = styled.div`
    width: 100vw;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: #333;
    background-image: url(ocean_background_home.svg);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    padding-top: 80px;
    padding-bottom: 40px;
`

export default function HomeBody() {
    const router = useRouter();
  return<Home >
            <Header></Header>
            <Category CatName="Importance" text="Ocean is so important to us. We can't imaging how life is without ocean." CatRouter='/part1_intro'/>
            <Category CatName="Threats" text="The major threat to ocean is ourself. Lean human influences on marine ecosystems." CatRouter='/part2_intro' BtnColor='#D7671E'/>
            <Category CatName="Protection" text="Things we can do to save the ocean. Don't wait untill too late." CatRouter='/part3_intro' BtnColor='#98A633'/>
            <Category CatName="Quiz" text="Let's do some quiz to learn more. We include three quizs in this section." CatRouter='/quiz1' BtnText='Do Quiz'/>
    </Home>
}