import React, { useState } from 'react';
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
  IonText,
  IonButton,
  IonToast
} from '@ionic/react';

const Estado: React.FC = () => {
  const [showToast, setShowToast] = useState(false);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Estado del vehículo</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">

        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Estado actual</IonCardTitle>
          </IonCardHeader>

          <IonCardContent>
            <IonText>
              <p><strong>Vehículo:</strong> En taller</p>
              <p><strong>Estado:</strong> En mantención</p>
              <p><strong>Última actualización:</strong> Hoy</p>
            </IonText>

            <IonButton
              expand="block"
              color="primary"
              className="ion-margin-top"
              onClick={() => setShowToast(true)}
            >
              Ver actualización
            </IonButton>
          </IonCardContent>
        </IonCard>

        {/* TOAST CENTRADO ABAJO */}
        <IonToast
          isOpen={showToast}
          message="🛠️ El vehículo está siendo revisado por el taller."
          duration={2500}
          position="bottom"
          color="success"
          onDidDismiss={() => setShowToast(false)}
        />

      </IonContent>
    </IonPage>
  );
};

export default Estado;