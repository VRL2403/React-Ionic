import React from 'react';
import { IonPage, IonContent } from '@ionic/react';
import SmallHeader from '../../components/Header/SmallHeader';
import LargeHeader from '../../components/Header/LargeHeader';

const News = () => {
    return (
        <IonPage>
            <SmallHeader title="Newzy" />
            <IonContent fullscreen>
                <LargeHeader title="Newzy" />
            </IonContent>
        </IonPage>
    );
};
export default News;