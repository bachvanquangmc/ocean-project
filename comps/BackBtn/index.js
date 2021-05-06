import react from 'react'
import { useRouter } from 'next/router'
import styled from 'styled-components'

const BackBtnDiv = styled.div`
    width: 40px;
    height: 40px;
    top: 8px;
    left: 5px;
    margin: 3px;
    position: absolute;
    z-index: 9998;
`

const BackBtn =()=>{
    const router = useRouter()

    return <BackBtnDiv onClick={()=> router.back()}>
        <img src='back.png' width='40px' height='40px' />
    </BackBtnDiv>
}

export default BackBtn