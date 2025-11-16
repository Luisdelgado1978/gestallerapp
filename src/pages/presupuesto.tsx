import { IonPage, IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonItem, IonLabel, IonButton } from '@ionic/react';

const Presupuesto: React.FC = () => (
  <IonPage>
    <IonHeader><IonToolbar><IonTitle>Presupuesto</IonTitle></IonToolbar></IonHeader>
    <IonContent className="ion-padding">
      <IonList>
        <IonItem><IonLabel>Repuesto 1 / Mano de obra — $xx.xxx</IonLabel></IonItem>
        <IonItem><IonLabel>Repuesto 2 / Mano de obra — $xx.xxx</IonLabel></IonItem>
      </IonList>
      <IonButton expand="block" color="medium">Solicitar Cambios</IonButton>
      <IonButton expand="block">Aprobar Presupuesto</IonButton>
    </IonContent>
  </IonPage>
);
export default Presupuesto;
