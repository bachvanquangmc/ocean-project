import styled from 'styled-components'
import PageLayout from '../comps/PageLayout'
import HiddenMenu from '../comps/HiddenMenu'
import Header from '../comps/Header'
import {useRouter} from 'next/router'
import NextButton from '../comps/NextButton'

const Body = styled.div`
    width: 100vw; 
    min-height: 100vh;
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    background: rgb(170,215,255);
    background: url(/ocean_background_2.svg) no-repeat center center fixed;
    background-size: cover;
`

export default function S1_food() {
    const router = useRouter();
  return<Body>
            <Header></Header>
            <PageLayout FTitle="A Source of Food" STitle="What are we eating?" FDiscription="Much of the food that people eat comes from the ocean, with around 40% of the global population being reliant on fish as a food source." SDiscription="Of all the animal protein consumed globally, 16% is collected from the ocean. Though the majority of fishery is fish, it also includes organisms such as shrimp, crab, clam, oyster, octopus, squid, etc." BackgroundImg="" ImgSource="/sushi.svg"></PageLayout>
            <div onClick={()=>router.push('/s1_economy')}>
                <NextButton></NextButton>
            </div>
    </Body>
}