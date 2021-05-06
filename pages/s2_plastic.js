import styled from 'styled-components'
import PageLayout from '../comps/PageLayout'
import HiddenMenu from '../comps/HiddenMenu'
import {useRouter} from 'next/router'
import Header from '../comps/Header'
import NextButton from '../comps/NextButton'

const Body = styled.div`
    // min-height: 300px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-image: url(/plastic-01.svg);
`

export default function S2_plastic() {
    const router = useRouter();
  return <Body >
            <Header></Header>
                <PageLayout FTitle="More than 5 Trillion" STitle="Marine Organisms" FDiscription="Pieces of plastic pollution are afloat in the oceans" SDiscription="10 KM deep had ingested plastic fragments" BackgroundImg="" ImgSource=""></PageLayout>
                <div onClick={()=>router.push('/s2_overfishing')}>
                    <NextButton></NextButton>
                </div>
    </Body>
}