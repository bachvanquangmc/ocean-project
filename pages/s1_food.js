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
    background: #04BFAD;
`

export default function S1_food() {
  return<Body>
                <PageLayout FTitle="Food" STitle="16%" FDiscription="" SDiscription="of all animal protein consumed globally is from the ocean." BackgroundImg="" ImgSource="/sushi.svg"></PageLayout>
    </Body>
}