import styled from 'styled-components'
import PageLayout from '../comps/PageLayout'
import HiddenMenu from '../comps/HiddenMenu'
import Header from '../comps/Header'
import {useRouter} from 'next/router'


const Body = styled.div`
    width: 100vw; 
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background: rgb(170,215,255);
    background: linear-gradient(180deg, rgba(135,206,250,1) 15%, rgba(180, 230, 230,1) 23%, rgba(25,149,201,1) 24%, rgba(5,58,138,1) 100%);
`

export default function S1_oxygen() {
    const router = useRouter();
  return<Body>
            <Header></Header>
            <Body onClick={()=>router.push('/s1_habitat')}>
            <PageLayout FTitle="Oxygen" STitle="Phytoplankton" FDiscription="Over 50% of the oxygen we breathe is generated from the ocean." SDiscription="are small organisms living in the ocean, and they are the main contributer of oxygen produced within the ocean." BackgroundImg="" ImgSource="/phytoplankton.svg"></PageLayout>
            </Body>
    </Body>
}