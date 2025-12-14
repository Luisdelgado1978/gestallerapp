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
  IonList,
  IonItem,
  IonLabel,
  IonText,
  IonButton,
  IonToast
} from '@ionic/react';

const Presupuesto: React.FC = () => {
  const total = 120000;

  const [showToast, setShowToast] = useState(false);
  const [toastMsg, setToastMsg] = useState('');
  const [toastColor, setToastColor] = useState<'success' | 'medium'>('success');

  const aprobarPresupuesto = () => {
    setToastColor('success');
    setToastMsg('Presupuesto aprobado ✅ El taller continuará con el trabajo.');
    setShowToast(true);
  };

  const solicitarCambios = () => {
    setToastColor('medium');
    setToastMsg('Solicitud enviada ✏️ El taller revisará los cambios solicitados.');
    setShowToast(true);
  };

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

            <IonButton
              expand="block"
              color="success"
              className="ion-margin-top"
              onClick={aprobarPresupuesto}
            >
              Aprobar presupuesto
            </IonButton>

            <IonButton
              expand="block"
              color="medium"
              fill="outline"
              className="ion-margin-top"
              onClick={solicitarCambios}
            >
              Solicitar cambios
            </IonButton>
          </IonCardContent>
        </IonCard>

        {/* TOAST AL CENTRO */}
        <IonToast
          isOpen={showToast}
          message={toastMsg}
          duration={2200}
          color={toastColor}
          position="middle"
          onDidDismiss={() => setShowToast(false)}
        />
      </IonContent>
    </IonPage>
  );
};

export default Presupuesto;