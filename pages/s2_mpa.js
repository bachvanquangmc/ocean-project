import styled from 'styled-components'
import PageLayout from '../comps/PageLayout'
import {useRouter} from 'next/router'
import Header from '../comps/Header'
import NextButton from '../comps/NextButton'

const Body = styled.div`
    min-height: 100vh;
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    background: #04ADBC;
`

export default function S2_mpa() {
    const router = useRouter();
  return<Body>
            <Header></Header>
            <PageLayout FTitle="Only 2%" STitle="MPA" FDiscription="of global oceans are included in strongly protected marine parks" SDiscription="Marine Protected Areas(MPA) are areas of ocean set aside for long-term conservation aims" BackgroundImg="" ImgSource="/mpa.svg"></PageLayout>
            <div onClick={()=>router.push('/part3_intro')}>
                <NextButton></NextButton>
            </div>
    </Body>
}