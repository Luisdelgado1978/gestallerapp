import React, { useState } from 'react';
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton,
  IonList,
  IonItem,
  IonLabel,
  IonModal,
  IonInput,
  IonDatetime,
  IonText
} from '@ionic/react';

interface Cita {
  id: number;
  cliente: string;
  vehiculo: string;
  fecha: string;
}

const Agendar: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [cliente, setCliente] = useState('');
  const [vehiculo, setVehiculo] = useState('');
  const [fecha, setFecha] = useState('');
  const [citas, setCitas] = useState<Cita[]>([]);

  const abrirModal = () => setShowModal(true);
  const cerrarModal = () => setShowModal(false);

  const guardarCita = () => {
    if (!cliente || !vehiculo || !fecha) {
      return;
    }

    const nuevaCita: Cita = {
      id: Date.now(),
      cliente,
      vehiculo,
      fecha
    };

    setCitas([...citas, nuevaCita]);
    setCliente('');
    setVehiculo('');
    setFecha('');
    setShowModal(false);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Agendar trabajos</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
        <IonText>
          <p>
            Desde esta pantalla puedes registrar las próximas atenciones del taller
            (mantenimientos, reparaciones, revisiones, etc.).
          </p>
        </IonText>

        <IonButton expand="block" onClick={abrirModal}>
          Nueva cita de taller
        </IonButton>

        <IonList className="ion-margin-top">
          {citas.length === 0 && (
            <IonItem>
              <IonLabel>No hay citas agendadas todavía.</IonLabel>
            </IonItem>
          )}

          {citas.map(cita => (
            <IonItem key={cita.id}>
              <IonLabel>
                <h2>{cita.cliente}</h2>
                <p>{cita.vehiculo}</p>
                <p>{new Date(cita.fecha).toLocaleString()}</p>
              </IonLabel>
            </IonItem>
          ))}
        </IonList>

        <IonModal isOpen={showModal} onDidDismiss={cerrarModal}>
          <IonHeader>
            <IonToolbar>
              <IonTitle>Nueva cita</IonTitle>
            </IonToolbar>
          </IonHeader>

          <IonContent className="ion-padding">
            <IonItem>
              <IonLabel position="stacked">Nombre del cliente</IonLabel>
              <IonInput
                value={cliente}
                onIonChange={e => setCliente(e.detail.value ?? '')}
              />
            </IonItem>

            <IonItem>
              <IonLabel position="stacked">Vehículo</IonLabel>
              <IonInput
                value={vehiculo}
                onIonChange={e => setVehiculo(e.detail.value ?? '')}
                placeholder="Ej: Toyota Yaris 2015"
              />
            </IonItem>

            <IonItem>
              <IonLabel position="stacked">Fecha y hora</IonLabel>
              <IonDatetime
                value={fecha}
                onIonChange={e => setFecha(e.detail.value?.toString() ?? '')}
                presentation="date-time"
              />
            </IonItem>

            <IonButton expand="block" className="ion-margin-top" onClick={guardarCita}>
              Guardar cita
            </IonButton>

            <IonButton expand="block" fill="clear" onClick={cerrarModal}>
              Cancelar
            </IonButton>
          </IonContent>
        </IonModal>
      </IonContent>
    </IonPage>
  );
};

export default Agendar;