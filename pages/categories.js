import styled from 'styled-components'
import HiddenMenu from '../comps/HiddenMenu'
import Category from '../comps/CategoryUI'
import AppName from '../comps/AppNameUI'
import Header from '../comps/Header'
import {useRouter} from 'next/router'

const Home = styled.div`
    min-width: 100vw;
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
`

export default function HomeBody() {
    const router = useRouter();
  return<Home >
            <Header></Header>
            <Category onClick={()=>router.push('/part1_intro')} CatName="Importance" text="Ocean is so important to us" direction="right"/>
            <Category onClick={()=>router.push('/part2_intro')} CatName="Threats" text="To the ocean" direction="left"/>
            <Category onClick={()=>router.push('/part3_intro')} CatName="Protection" text="Things we can do to save the ocean" direction="right" />
    </Home>
}