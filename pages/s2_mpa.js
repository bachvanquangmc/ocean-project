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
    background: #04ADBC;
`

export default function S2_mpa() {
    const router = useRouter();
  return<Body onClick={()=>router.push('/part3_intro')}>
                <Header></Header>
                <PageLayout FTitle="Only 2%" STitle="MPA" FDiscription="of global oceans are included in strongly protected marine parks" SDiscription="Marine Protected Areas(MPA) are areas of ocean set aside for long-term conservation aims" BackgroundImg="" ImgSource="/mpa.svg"></PageLayout>
    </Body>
}