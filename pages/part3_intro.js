import IntroTitleUI from '../comps/IntroTitleUI';
import IntroTextUI from '../comps/IntroTextUI';
import styled from 'styled-components';
import HiddenMenu from '../comps/HiddenMenu'

const ImpCont = styled.div`
    display: flex;
    height:100vh;
    flex-direction: column;
    background-image: url(ocean_background.svg);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    overflow-y: scroll;
`;

const TextCont = styled.div`
    position:relative;
    margin:5px;
    bottom:250px;

`;

export default function Protect () {

   
    return <ImpCont>
    <HiddenMenu ></HiddenMenu> 

        <TextCont>
        <IntroTitleUI
            Title = "Protection"
        />
        <IntroTextUI
            Body = "Things we can do to save the ocean."
        /> 
        </TextCont>

    </ImpCont>
}