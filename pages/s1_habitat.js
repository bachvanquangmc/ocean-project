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

export default function S1_habitat() {
    const router = useRouter();
  return<Body>
            <Header></Header>
            <PageLayout FTitle="Marine Habitats" STitle="What else is there to find?" FDiscription="The ocean is home to an abundance of sealife. With around 230,000 species recorded so far." SDiscription="There are many things we've yet to discover about the ocean. For example, 91% of species within it are still awaiting classification." BackgroundImg="" ImgSource="/species_pie_chart.svg"></PageLayout>
            <div onClick={()=>router.push('/s1_food')}>
                <NextButton></NextButton>
            </div>
    </Body>
}