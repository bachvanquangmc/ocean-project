import styled, {css} from 'styled-components'

export const S3Wraper = styled.div`
    width: 100vw;
    min-height: 100%;
    padding-top: 65px;
    display: flex;
    flex-direction: column;
    background: linear-gradient(180deg, rgba(25, 149, 201, 0.79) 0%, #1995C9 41.15%, #116DA5 100%);
    z-index: -1;
`

export const S3WraperS = styled.div`
    width: 100vw;
    min-height: 100vh;
    padding-top: 65px;
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

export const S3top = styled.div `
    width: 100vw;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0 40% 0 40%;
`

export const QWrapper = css `
    // height: 340px;
    width: 90vw;
    margin-top: 15px;
    padding: 0 10px;
    background: rgba(11, 78, 138, 0.7);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #FFF;
`
export const QizImgW = styled.div `
    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:center;
`
export const QizState = styled.div `
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content:center;
    margin: 5%;
`

export const QizSelectT = styled.div`
    width: 40%;
    height: 100%;
    margin: 5%;
    display: flex;
    justify-content: center;
    align-items: center;
    border: rgba(255, 255, 255, 0.5) ${props=> props.borderSizeT}px solid;
    border-radius: 10px;
`

export const QizSelectF = styled.div`
    width: 40%;
    height: 100%;
    margin: 5%;
    display: flex;
    justify-content: center;
    align-items: center;
    border: rgba(255, 255, 255, 0.5) ${props=> props.borderSizeF}px solid;
    border-radius: 10px;
`

export const QizImg = styled.img `
    height:100px;
    width: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 20px;
`

export const QizInfo = styled.div `
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:center;
    margin: 0 10px 10px 10px;
    border-top: solid 1px;
    border-bottom: solid 1px;
`

export const QizTitle = styled.h3 `
    width: 100%;
    text-align: center;
    color: yellow;
    margin: 10px;
`

export const QizText = styled.p `
    width: 100%;
    margin: 10px;
`