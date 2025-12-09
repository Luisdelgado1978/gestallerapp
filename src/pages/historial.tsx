import React from 'react';
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonLabel,
  IonBadge
} from '@ionic/react';

const Historial: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Historial de trabajos</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
        <IonList>
          <IonItem>
            <IonLabel>
              <h2>Cambio de aceite</h2>
              <p>Cliente: Juan Pérez - 10/11/2025</p>
            </IonLabel>
            <IonBadge color="success">Entregado</IonBadge>
          </IonItem>

          <IonItem>
            <IonLabel>
              <h2>Revisión sistema de frenos</h2>
              <p>Cliente: Ana Rodríguez - 08/11/2025</p>
            </IonLabel>
            <IonBadge color="warning">En seguimiento</IonBadge>
          </IonItem>

          <IonItem>
            <IonLabel>
              <h2>Alineación y balanceo</h2>
              <p>Cliente: Carlos Soto - 05/11/2025</p>
            </IonLabel>
            <IonBadge color="success">Entregado</IonBadge>
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Historial;