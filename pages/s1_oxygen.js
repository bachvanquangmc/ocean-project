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
    background: linear-gradient(180deg, rgba(170,215,255,1) 24%, rgba(25,149,201,1) 25%, rgba(11,78,138,1) 100%);
`

export default function S1_oxygen() {
  return<Body>
            <PageLayout FTitle="Oxygen" STitle="Phytoplankton" FDiscription="Over 50% of the oxygen we breathe comes from the ocean." SDiscription="are the main contributer of ocean produced oxygen." BackgroundImg="" ImgSource="/phytoplankton.svg"></PageLayout>
    </Body>
}