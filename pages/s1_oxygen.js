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
    background: linear-gradient(180deg, rgba(135,206,250,1) 15%, rgba(180, 230, 230,1) 23%, rgba(25,149,201,1) 24%, rgba(5,58,138,1) 100%);
`

export default function S1_oxygen() {
    const router = useRouter();
  return<Body>
            <Header></Header>
            
            <PageLayout FTitle="Oxygen Production" STitle="Where does it come from?" FDiscription="Over 50% of the oxygen we breathe is generated from the ocean." SDiscription="The main contributer of oxygen produced within the ocean are phytoplankton, which are microscopic plants floating around ocean. Similar to land plants, they photosynthesize. During which, they absorb carbon dioxide and release oxygen." BackgroundImg="" ImgSource="/phytoplankton.svg"></PageLayout>
            <div onClick={()=>router.push('/s1_habitat')}>
            <NextButton></NextButton>
            </div>
    </Body>
}