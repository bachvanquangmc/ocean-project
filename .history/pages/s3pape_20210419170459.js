import React from 'react'
import styled from 'styled-components'
import HiddenMenu from '../comps/HiddenMenu'

const S3Wraper = styled.div`
    width: 100vw;
    heigh: 100vh;
    display: flex;
    flex-direction: column;
    background: linear-gradient(180deg, rgba(25, 149, 201, 0.79) 0%, #1995C9 41.15%, #116DA5 100%);
    z-index: -1;
`

export default function HomeBody() {
  return<S3Wraper>
            <HiddenMenu></HiddenMenu>
            <h1>Hello!</h1>

    </S3Wraper>
}