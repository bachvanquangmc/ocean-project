import styled from 'styled-components'
import PageLayout from '../comps/PageLayout'
import HiddenMenu from '../comps/HiddenMenu'

const Body = styled.div`
    min-height: 300px;
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
                <PageLayout FTitle="Home" STitle="91%" FDiscription="is what an abundance of sealife call the ocean." SDiscription="of species within the ocean still await identification." BackgroundImg="" ImgSource=""></PageLayout>
    </Body>
}