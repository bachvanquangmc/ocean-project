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
    background: rgb(11,78,138);
    background: linear-gradient(180deg, rgba(11,78,138,1) 0%, rgba(25,149,201,1) 50%, rgba(2,191,173,1) 100%);
`

export default function S1_food() {
    const router = useRouter();
  return<Body>
            <Header></Header>
            <PageLayout FTitle="Source of Food" STitle="What are we eating?" FDiscription="Much of the food that people eat comes from the ocean, with around 40% of the global population being reliant on fish as a food source." SDiscription="Of all the animal protein consumed globally, 16% is collected from the ocean. Though the majority of fishery is fish, it also includes organisms such as shrimp, crab, clam, oyster, octopus, squid, etc." BackgroundImg="" ImgSource="/sushi.svg"></PageLayout>
            <div onClick={()=>router.push('/s1_economy')}>
                <NextButton></NextButton>
            </div>
    </Body>
}