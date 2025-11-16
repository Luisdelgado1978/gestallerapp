import { IonPage, IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonItem, IonLabel } from '@ionic/react';

const Historial: React.FC = () => (
  <IonPage>
    <IonHeader><IonToolbar><IonTitle>Historial</IonTitle></IonToolbar></IonHeader>
    <IonContent className="ion-padding">
      <IonList>
        <IonItem><IonLabel>Cambio de aceite / Frenos / Revisión — $xx.xxx</IonLabel></IonItem>
        <IonItem><IonLabel>Cambio de pastillas — $xx.xxx</IonLabel></IonItem>
      </IonList>
    </IonContent>
  </IonPage>
);
export default Historial;
