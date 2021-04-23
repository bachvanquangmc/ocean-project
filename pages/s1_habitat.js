import styled from 'styled-components'
import PageLayout from '../comps/PageLayout'
import HiddenMenu from '../comps/HiddenMenu'
import Header from '../comps/Header'

const Body = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background: rgb(170,215,255);
    background-image: url(/ocean_background_2.svg);
    background-repeat: no-repeat;
    background-size: cover;
`

export default function S1_habitat() {
  return<Body>
            <Header></Header>
            <PageLayout FTitle="Home" STitle="91%" FDiscription="Is what the ocean is to an abundance of sealife. With around 230,000 species recorded so far." SDiscription="Of species within the ocean are still awaiting classification." BackgroundImg="" ImgSource=""></PageLayout>
    </Body>
}