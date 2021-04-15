import styled from 'styled-components'
import HiddenMenu from '../comps/HiddenMenu'
import Category from '../comps/CategoryUI'

const s3_wrapper = styled.div`
    max-width: 500px;
    heigh: 100vh;
    display: flex;
    flex-direction: column;
    background-color: #333;
    background-image: url()
`

export default function S3_intro() {
  return<s3_wrapper>
            <HiddenMenu></HiddenMenu>
    </s3_wrapper>
}
