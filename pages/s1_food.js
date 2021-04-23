import styled from 'styled-components'
import PageLayout from '../comps/PageLayout'
import HiddenMenu from '../comps/HiddenMenu'
import Header from '../comps/Header'
import {useRouter} from 'next/router'

const Body = styled.div`
    width: 100vw; 
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background: rgb(11,78,138);
    background: linear-gradient(180deg, rgba(11,78,138,1) 0%, rgba(25,149,201,1) 50%, rgba(2,191,173,1) 100%);
`

export default function S1_food() {
    const router = useRouter();
  return<Body>
            <Header></Header>
            <Body onClick={()=>router.push('/s1_economy')}>
            <PageLayout FTitle="Food" STitle="16%" FDiscription="" SDiscription="of all animal protein consumed globally is from the ocean." BackgroundImg="" ImgSource="/sushi.svg"></PageLayout>
            </Body>
    </Body>
}