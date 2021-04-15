import styled from 'styled-components'
import HiddenMenu from '../comps/HiddenMenu'
import Category from '../comps/CategoryUI'

const s3_protect = styled.div`
    max-width: 500px;
    heigh: 100vh;
    display: flex;
    flex-direction: column;
    background-color: #333;
`

export default function S3_protect() {
  return<s3_protect>
            <HiddenMenu></HiddenMenu>
    </s3_protect>
}