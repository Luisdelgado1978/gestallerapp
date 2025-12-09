import React from 'react';
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent
} from '@ionic/react';

const Estado: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Estado del taller</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Trabajos para hoy</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            3 vehículos agendados para mantenimiento preventivo.
          </IonCardContent>
        </IonCard>

        <IonCard>
          <IonCardHeader>
            <IonCardTitle>En ejecución</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            2 reparaciones de motor y 1 cambio de frenos en proceso.
          </IonCardContent>
        </IonCard>

        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Entregados</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            5 vehículos entregados en las últimas 24 horas.
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Estado;