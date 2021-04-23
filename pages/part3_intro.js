import IntroTitleUI from '../comps/IntroTitleUI';
import IntroTextUI from '../comps/IntroTextUI';
import styled from 'styled-components';
import HiddenMenu from '../comps/HiddenMenu'
import {useRouter} from 'next/router';

const TextCont = styled.div`
    display:flex;
    flex-direction: column; 
    position:relative;
    padding-top: 300px;
    padding-bottom: 300px;
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

export default function Protect () {

    const router = useRouter();
    return <ImpCont >
    <HiddenMenu ></HiddenMenu> 
        <TextCont onClick={()=>router.push('/s3_quiz1')}>
        <IntroTitleUI
            Title = "Protection"
        />
        <IntroTextUI
            Body = "Things we can do to save the ocean."
        /> 
        </TextCont>

    </ImpCont>
}