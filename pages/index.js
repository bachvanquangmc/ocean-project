import React from 'react'
import styled from 'styled-components'
import HiddenMenu from '../comps/HiddenMenu'
import {useRouter} from 'next/router'


const Home = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    background-color: #333;
    background-image: url(ocean_background_home.svg);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    z-index: -1;
`

export default function HomeBody() {

  const routerTemp = useRouter()

  return<Home>
            <HiddenMenu />
            
    </Home>
}