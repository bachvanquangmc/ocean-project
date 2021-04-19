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
    flex-direction: column;
    background-image: url(ocean_background.svg);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    overflow-y: scroll;
`;

export default function Imp () {
 
    return <ImpCont>
    <HiddenMenu ></HiddenMenu> 

        <TextCont>
        <IntroTitleUI
            Title = "Importance"
        />
        <IntroTextUI
            Body = "the ocean is so important to us."
        /> 
        </TextCont>

    </ImpCont>
}
