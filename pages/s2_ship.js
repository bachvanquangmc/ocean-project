import styled from 'styled-components'
import PageLayout from '../comps/PageLayout'
import HiddenMenu from '../comps/HiddenMenu'
import {useRouter} from 'next/router'

const Body = styled.div`
    min-height: 300px;
    width:100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

`

export default function S1_food() {
    const router = useRouter();
  return<Body onClick={()=>router.push('/s2_mpa')}>
                <PageLayout FTitle="" STitle="Waste Pollution from Ships" FDiscription="" SDiscription="Apart from other pollutants such as oil and gas, the waste and garbage generated on board ships poses a significant threat to the marine ecosystem" BackgroundImg="ocean_threats.jpg" ImgSource="/fishing_boat1.svg"></PageLayout>
    </Body>
}