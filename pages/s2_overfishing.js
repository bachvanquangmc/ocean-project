import styled from 'styled-components'
import PageLayout from '../comps/PageLayout'
import HiddenMenu from '../comps/HiddenMenu'
import {useRouter} from 'next/router'

const Body = styled.div`
    min-height: 300px;
    height: 100vh;
    display: flex;
    flex-direction: column;

`

export default function S1_food() {
    const router = useRouter();
  return<Body onClick={()=>router.push('/s2_ship')}>
                <PageLayout FTitle="Overfishing" STitle="1/3" FDiscription="" SDiscription="of global fish stocks are overfished" BackgroundImg="" ImgSource="" BackgroundImg="/overfishing-01.svg"></PageLayout>
    </Body>
}