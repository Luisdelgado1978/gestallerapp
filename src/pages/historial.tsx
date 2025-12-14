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
  IonModal
} from '@ionic/react';

type Servicio = {
  fecha: string;
  titulo: string;
  detalle: string;
  costo: number;
};

const Historial: React.FC = () => {
  const servicios: Servicio[] = [
    {
      fecha: '10-12-2025',
      titulo: 'Cambio de aceite',
      detalle: 'Se realizó cambio de aceite y revisión general.',
      costo: 25000,
    },
    {
      fecha: '05-12-2025',
      titulo: 'Revisión de frenos',
      detalle: 'Se revisaron pastillas, discos y líquido de frenos.',
      costo: 40000,
    },
    {
      fecha: '28-11-2025',
      titulo: 'Scanner y diagnóstico',
      detalle: 'Lectura de códigos, borrado de fallas leves y prueba en ruta.',
      costo: 40000,
    },
  ];

  const [open, setOpen] = useState(false);
  const [seleccionado, setSeleccionado] = useState<Servicio | null>(null);

  const abrirDetalle = (s: Servicio) => {
    setSeleccionado(s);
    setOpen(true);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Historial</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Servicios realizados</IonCardTitle>
          </IonCardHeader>

          <IonCardContent>
            <IonList>
              {servicios.map((s, idx) => (
                <IonItem key={idx}>
                  <IonLabel>
                    <h2>{s.titulo}</h2>
                    <p>{s.fecha}</p>
                  </IonLabel>

                  <IonText slot="end">
                    ${s.costo.toLocaleString('es-CL')}
                  </IonText>

                  <IonButton
                    slot="end"
                    size="small"
                    fill="outline"
                    onClick={() => abrirDetalle(s)}
                  >
                    Ver
                  </IonButton>
                </IonItem>
              ))}
            </IonList>
          </IonCardContent>
        </IonCard>

        {/* MODAL DE DETALLE */}
        <IonModal isOpen={open} onDidDismiss={() => setOpen(false)}>
          <IonHeader>
            <IonToolbar>
              <IonTitle>Detalle del servicio</IonTitle>
            </IonToolbar>
          </IonHeader>

          <IonContent className="ion-padding">
            {seleccionado && (
              <>
                <IonCard>
                  <IonCardHeader>
                    <IonCardTitle>{seleccionado.titulo}</IonCardTitle>
                  </IonCardHeader>
                  <IonCardContent>
                    <IonText>
                      <p><strong>Fecha:</strong> {seleccionado.fecha}</p>
                      <p><strong>Detalle:</strong> {seleccionado.detalle}</p>
                      <p><strong>Costo:</strong> ${seleccionado.costo.toLocaleString('es-CL')}</p>
                    </IonText>

                    <IonButton
                      expand="block"
                      className="ion-margin-top"
                      onClick={() => setOpen(false)}
                    >
                      Cerrar
                    </IonButton>
                  </IonCardContent>
                </IonCard>
              </>
            )}
          </IonContent>
        </IonModal>
      </IonContent>
    </IonPage>
  );
};

export default Historial;