import { IonPage, IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonItem, IonLabel, IonButton } from '@ionic/react';

const Agendar: React.FC = () => (
  <IonPage>
    <IonHeader><IonToolbar><IonTitle>Agendar Cita</IonTitle></IonToolbar></IonHeader>
    <IonContent className="ion-padding">
      <IonList>
        <IonItem><IonLabel>Mantención</IonLabel></IonItem>
        <IonItem><IonLabel>Revisión</IonLabel></IonItem>
        <IonItem><IonLabel>Reparación</IonLabel></IonItem>
      </IonList>
      <IonButton expand="block">Confirmar reserva</IonButton>
    </IonContent>
  </IonPage>
);
export default Agendar;
