import styled from 'styled-components'
import PageLayout from '../comps/PageLayout'
import HiddenMenu from '../comps/HiddenMenu'
import {useRouter} from 'next/router'

const Body = styled.div`
    min-height: 300px;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-repeat: no-repeat;
    background-size: cover;
    background-image: url(/plastic.svg);
`

export default function S2_plastic() {
    const router = useRouter();
  return<Body onClick={()=>router.push('/s2_overfishing')}>
                <PageLayout FTitle="Five Trillion" STitle="Plastic" FDiscription="pieces of plastic pollution are afloat in the oceans" SDiscription="has been found in the ocean as deep as 11km" BackgroundImg="" ImgSource=""></PageLayout>
    </Body>
}