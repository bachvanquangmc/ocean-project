import styled from 'styled-components'
import PageLayout from '../comps/PageLayout'
import HiddenMenu from '../comps/HiddenMenu'
import {useRouter} from 'next/router'
import Header from '../comps/Header'
import NextButton from '../comps/NextButton'

const Body = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-image: url(/overfishing-01.jpg);

`

export default function S1_food() {
    const router = useRouter();
  return <Body>
      <Header></Header>
        
            <PageLayout FTitle="Overfishing" STitle="1/3" FDiscription="" SDiscription="of global fish stocks are overfished" BackgroundImg="" ImgSource="" BackgroundImg=""></PageLayout>
            <div onClick={()=>router.push('/s2_ship')}>
              <NextButton></NextButton>
           </div>
            </Body>
}