import styled from 'styled-components'
import Category from '../comps/CategoryUI'
import Header from '../comps/Header'
import {useRouter} from 'next/router'
import {CategoryBar} from '../data/category'

const Home = styled.div`
    width: 100vw;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: #333;
    background-image: url(ocean_background_home.svg);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    padding-top: 80px;
    padding-bottom: 40px;
`

export default function HomeBody() {
    const router = useRouter();
  return<Home >
        <Header/>
            {CategoryBar.map((d,k)=>{
                return <Category
                key={k}
                CatName ={d.CatName}
                text ={d.text}
                CatRouter={d.CatRouter}
                BtnColor={d.BtnColor}
                BtnText={d.BtnText}
                />
            })}   
    </Home>
}