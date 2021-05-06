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
    background: rgb(4,191,173);
    background: linear-gradient(180deg, rgba(4,191,173,1) 0%, rgba(25,149,201,1) 60%, rgba(11,78,138,1) 100%);
`

export default function S1_economy() {
    const router = useRouter();
  return<Body>
            <Header></Header>
            <PageLayout FTitle="Growing Economy" STitle="How does the ocean contribute?" FDiscription="Over 3 billion people depend on marine and coastal biodiversity to sustain their livelihoods." SDiscription="There are many things relating to the ocean that affects our economy. The most obvious natural recource is the fishery, in that it provides us with seafood. The ocean also contributes with energy generation, raw minerals through subsea mining, pearl production, medicinal material from marine animals and plants, transportation of supplies, travel routes and recreation/tourism, and much more." BackgroundImg="" ImgSource="/shipyard.svg"></PageLayout>
            <div onClick={()=>router.push('/part2_intro')}>
                <NextButton></NextButton>
            </div>
    </Body>
}