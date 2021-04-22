import styled from 'styled-components'

export const S3Wraper = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    background: linear-gradient(180deg, rgba(25, 149, 201, 0.79) 0%, #1995C9 41.15%, #116DA5 100%);
    z-index: -1;
`

export const S3Content = styled.div `
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const QizImg = styled.img `
    height:100px;
    width: 100px;
    margin: 10px 10px 10px 20px;
`

export const QizInfo = styled.div `
    height: 100px;
    width: 60%;
    display: flex;
    flex-direction: column;
    margin-left: 10px;
`

const QizTitle = styled.h3 `
    color: yellow;
    margin: 10px 0 0 10px;
`

const QizText = styled.p `
    margin: 10px; 0 0 0;
`