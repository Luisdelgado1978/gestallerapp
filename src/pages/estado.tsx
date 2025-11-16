import { IonPage, IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonButton } from '@ionic/react';

const Estado: React.FC = () => (
  <IonPage>
    <IonHeader><IonToolbar><IonTitle>Estado del Vehículo</IonTitle></IonToolbar></IonHeader>
    <IonContent className="ion-padding">
      <IonCard>
        <IonCardHeader><IonCardTitle>Entrega Estimada: Viernes 18:30</IonCardTitle></IonCardHeader>
        <IonCardContent>Notas del mecánico / Cambios / Fotos (placeholder)</IonCardContent>
      </IonCard>
      <IonButton expand="block" routerLink="/presupuesto">Ver Presupuesto</IonButton>
    </IonContent>
  </IonPage>
);
export default Estado;
