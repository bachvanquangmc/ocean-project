import styled from 'styled-components'
import Header from '../comps/Header'
import {useRouter} from 'next/router'
import IntroTitleUI from '../comps/IntroTitleUI';
import IntroTextUI from '../comps/IntroTextUI';

const TextCont = styled.div`
`;

const ImpCont = styled.div`
    min-width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: #333;
    background-image: url(ocean_background.svg);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
`;

export default function Threat () {
    const router = useRouter();
    return <ImpCont >
                <Header></Header>
                <ImpCont onClick={()=>router.push('/s2_climate')}>  
                        <TextCont  >
                            <IntroTitleUI Title = "Threats"/>
                            <IntroTextUI Body = "To the ocean." />
                        </TextCont>
                </ImpCont>
            </ImpCont>
}