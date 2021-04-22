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
    background: rgb(4,191,173);
    background: linear-gradient(180deg, rgba(4,191,173,1) 0%, rgba(25,149,201,1) 60%, rgba(11,78,138,1) 100%);
`

export default function S1_economy() {
  return<Body>
                <PageLayout FTitle="Economy" STitle="Over 3.0 Billion" FDiscription="" SDiscription=" of people depend on the marine and coastal biodiversity to sustain their livelihoods." BackgroundImg="" ImgSource="/shipyard.svg"></PageLayout>
    </Body>
}