import styled from 'styled-components'
import HiddenMenu from '../comps/HiddenMenu'
import Category from '../comps/CategoryUI'

const S3Wraper = styled.div`
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
  return<S3Wraper>
            <HiddenMenu></HiddenMenu>
            <LogoUI />
             
    </S3Wraper>
}