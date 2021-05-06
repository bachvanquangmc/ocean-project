import styled from 'styled-components'
import PageLayout from '../comps/PageLayout'
import {useRouter} from 'next/router'
import Header from '../comps/Header'
import NextButton from '../comps/NextButton'

const Body = styled.div`
width: 100vw;
min-height: 100vh;
height: 100%;
display: flex;
align-items: center;
flex-direction: column;
background: rgb(170,215,255);
background: url(/ocean_threats.jpg) no-repeat center center fixed;
background-size: cover;

`

export default function S1_food() {
    const router = useRouter();
  return <Body>
      <Header></Header>
        
            <PageLayout FTitle="1 Cruise Ship = 1,000,000 Cars" STitle="Waste Pollution from Ships" FDiscription="Cruise ships, generate copious waste — including sewage, hazardous chemical waste, garbage, CO2 and oil; most of which is discharged into the oceans." SDiscription="Apart from other pollutants such as oil and gas, the waste and garbage generated on board ships poses a significant threat to the marine ecosystem" BackgroundImg="" ImgSource="/fishing_boat1.svg"></PageLayout>
            <div onClick={()=>router.push('/s2_mpa')}>
              <NextButton></NextButton>
            </div>
            </Body>
}