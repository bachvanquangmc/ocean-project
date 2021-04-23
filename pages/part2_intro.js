import IntroTitleUI from '../comps/IntroTitleUI';
import IntroTextUI from '../comps/IntroTextUI';
import styled from 'styled-components';
import HiddenMenu from '../comps/HiddenMenu'

const TextCont = styled.div`
    position:relative;
    margin:5px;
    bottom:250px;
`;

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

export default function Threat () {

    return <ImpCont>
    <HiddenMenu ></HiddenMenu>

        <TextCont>
        <IntroTitleUI
            Title = "Threats"
        />
        <IntroTextUI
            Body = "To the ocean"
        /> 
        </TextCont> 

    </ImpCont>
}