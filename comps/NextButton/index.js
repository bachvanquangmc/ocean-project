import styled from 'styled-components'

const ButtonCont = styled.div`
    display: flex;
    flex-direction: column;
    align-items:center;
    position:relative;


`
const ButtonImg = styled.img`
    width: 300px;
`
const Text = styled.h4`
    color:#FFFFFF;
    margin-top:0px;
    position: relative;
    top: 60px;
`;
const NextButton = (

) =>{

    return<ButtonCont>
        <Text>Next Page</Text>
        <ButtonImg src='down.svg' ></ButtonImg>
    </ButtonCont>
}

export default NextButton