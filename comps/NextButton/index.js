import styled from 'styled-components'

const ButtonCont = styled.div`
    display: flex;
    flex-direction: column;
    align-items:center;
    position:relative;
    bottom:150px;
`
const ButtonImg = styled.img`
    width: 300px;
`
const Text = styled.h4`
    color:#FFFFFF;
`;
const NextButton = (

) =>{

    return<ButtonCont>
        <Text>Click here to proceed</Text>
        <ButtonImg src='down.svg' ></ButtonImg>
    </ButtonCont>
}

export default NextButton