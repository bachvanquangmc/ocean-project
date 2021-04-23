import React from 'react'
import styled from 'styled-components'
import HiddenMenu from '../comps/HiddenMenu'
import {Router, useRouter} from 'next/router'
import HomeBody from '/s3'

const Home = styled.div`
    width: 100vw;
    heigh: 100vh;
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

  const router = useRouter()

  return<Home>
            <HiddenMenu></HiddenMenu>
            <button onClick={()=>{router.push('/s3page')}}>S3</button> 
    </Home>
}