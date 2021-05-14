import styled from 'styled-components'
import PageLayout from '../comps/PageLayout'
import HiddenMenu from '../comps/HiddenMenu'
import Header from '../comps/Header'
import {useRouter} from 'next/router'
import NextButton from '../comps/NextButton'


const Body = styled.div`
    min-height: 100vh;
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    background: rgb(170,215,255);
    background: url(/ocean_background_2.svg) no-repeat center center fixed;
    background-size: cover;
`

export default function S1_oxygen() {
    const router = useRouter();
  return<Body>
            <Header></Header>
            
            <PageLayout FTitle="Oxygen Production" STitle="Where does it come from?" FDiscription="Over 50% of the oxygen we breathe is generated from the ocean." SDiscription="The main contributer of oxygen produced within the ocean are phytoplankton, which are microscopic plants floating around ocean. Similar to land plants, they photosynthesize. During which, they absorb carbon dioxide and release oxygen." BackgroundImg="" ImgSource="/phytoplankton_zoom.svg"></PageLayout>
            <div onClick={()=>router.push('/s1_habitat')}>
            <NextButton></NextButton>
            </div>
    </Body>
}