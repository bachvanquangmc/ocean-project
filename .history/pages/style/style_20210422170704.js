import styled, {css} from 'styled-components'

export const S3Wraper = styled.div`
    width: 100vw;
    height: 100%;
    display: flex;
    flex-direction: column;
    background: linear-gradient(180deg, rgba(25, 149, 201, 0.79) 0%, #1995C9 41.15%, #116DA5 100%);
    z-index: -1;
`

export const S3WraperS = styled.div`
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
    justify-content: center;
`

export const QWrapper = css `
    min-height: 150px;
    width: 90vw;
    margin-top: 15px;
    padding: 0 10px;
    background: rgba(255, 255, 255, 0.2);
    border: rgba(255, 255, 255, 0.5) ${props=> props.borderSize}px solid;
    border-radius: 10px;
    display: inline-flex;
    align-items: center;
    color: #FFF;
`
export const QizImgW = styled.div `
    width: 40%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:center;
    margin: 0 10px;
`

export const QizImg = styled.img `
    // height:100px;
    width: 100px;
    display: flex;
    align-items: center;
    justify-content:center;
    margin: 10px;
`

export const QizInfo = styled.div `
    width: 60%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:center;
    margin: 0 10px 0 10px;
`

export const QizTitle = styled.h3 `
    width: 100%;
    color: yellow;
    margin: 10px;
`

export const QizText = styled.p `
    width: 100%;
    margin: 10px;
`