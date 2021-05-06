import styled from 'styled-components'
import PageLayout from '../comps/PageLayout'
import HiddenMenu from '../comps/HiddenMenu'
import {useRouter} from 'next/router'
import Header from '../comps/Header'
import NextButton from '../comps/NextButton'

const Body = styled.div`
    min-height: 100vh;
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    background: linear-gradient(180deg, rgba(40,19,17,1) 0%, rgba(25,149,201,1) 60%, rgba(11,78,138,1) 100%);
`

export default function S2_climate() {
    const router = useRouter();
  return<Body>
            <Header></Header>       
            <PageLayout FTitle="Climate Change" STitle="Warmer and Acidity" FDiscription="impacts ocean temperature and acidity" SDiscription="Higher temperature and acidity make marine life harder" BackgroundImg="" ImgSource="phytoplankton_less.svg"></PageLayout>
            <div onClick={()=>router.push('/s2_plastic')}>
            <NextButton></NextButton>
            </div>
    </Body>
}