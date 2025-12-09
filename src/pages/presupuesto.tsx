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
  IonCardContent,
  IonList,
  IonItem,
  IonLabel,
  IonText
} from '@ionic/react';

const Presupuesto: React.FC = () => {
  const total = 120000; // ejemplo

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Presupuesto estimado</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Presupuesto para mantenimiento completo</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <IonList>
              <IonItem>
                <IonLabel>Cambio de aceite</IonLabel>
                <IonText slot="end">$25.000</IonText>
              </IonItem>
              <IonItem>
                <IonLabel>Filtro de aire</IonLabel>
                <IonText slot="end">$15.000</IonText>
              </IonItem>
              <IonItem>
                <IonLabel>Revisión de frenos</IonLabel>
                <IonText slot="end">$40.000</IonText>
              </IonItem>
              <IonItem>
                <IonLabel>Scanner y diagnóstico</IonLabel>
                <IonText slot="end">$40.000</IonText>
              </IonItem>
            </IonList>

            <IonText className="ion-margin-top">
              <h2>Total aproximado: ${total.toLocaleString('es-CL')}</h2>
            </IonText>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Presupuesto;