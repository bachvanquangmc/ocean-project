import styled from 'styled-components'
import PageLayout from '../comps/PageLayout'
import HiddenMenu from '../comps/HiddenMenu'
import {useRouter} from 'next/router'
import Header from '../comps/Header'

const Body = styled.div`
    min-height: 300px;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background: linear-gradient(180deg, rgba(40,19,17,1) 0%, rgba(25,149,201,1) 60%, rgba(11,78,138,1) 100%);
`

export default function S2_climate() {
    const router = useRouter();
  return<Body>
                <Header></Header>
                <Body onClick={()=>router.push('/s2_plastic')}>
                <PageLayout FTitle="Climate Change" STitle="Warmer and Acidity" FDiscription="impacts ocean temperature and acidity" SDiscription="Higher temperature and acidity make marine life harder" BackgroundImg="" ImgSource="phytoplankton_less.svg"></PageLayout>
                </Body>
    </Body>
}