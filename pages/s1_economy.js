import styled from 'styled-components'
import PageLayout from '../comps/PageLayout'
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

export default function S1_economy() {
    const router = useRouter();
  return<Body>
            <Header></Header>
            <PageLayout FTitle="Growing Economy" STitle="How does the ocean contribute?" FDiscription="Over 3 billion people depend on marine and coastal biodiversity to sustain their livelihoods." SDiscription="There are many things relating to the ocean that affects our economy. The most obvious natural recource is the fishery, in that it provides us with seafood. The ocean also contributes with energy generation, raw minerals through subsea mining, pearl production, medicinal material from marine animals and plants, transportation of supplies, travel routes and recreation/tourism, and much more." BackgroundImg="" ImgSource="/economy_graph.svg"></PageLayout>
            <div onClick={()=>router.push('/part2_intro')}>
                <NextButton></NextButton>
            </div>
    </Body>
}