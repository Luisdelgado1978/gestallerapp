import React, { useState } from 'react';
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
  IonList,
  IonToast
} from '@ionic/react';
import { useHistory } from 'react-router-dom';

const CrearCuenta: React.FC = () => {
  const history = useHistory();
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [password, setPassword] = useState('');
  const [showOk, setShowOk] = useState(false);
  const [showError, setShowError] = useState(false);

  const handleCrearCuenta = () => {
    if (!nombre || !correo || !password) {
      setShowError(true);
      return;
    }

    // Aquí solo simulamos el registro
    setShowOk(true);
    setTimeout(() => {
      history.push('/login');
    }, 1500);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Crear cuenta</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
        <IonList>
          <IonItem>
            <IonLabel position="stacked">Nombre completo</IonLabel>
            <IonInput
              value={nombre}
              onIonChange={e => setNombre(e.detail.value ?? '')}
            />
          </IonItem>

          <IonItem>
            <IonLabel position="stacked">Correo electrónico</IonLabel>
            <IonInput
              type="email"
              value={correo}
              onIonChange={e => setCorreo(e.detail.value ?? '')}
            />
          </IonItem>

          <IonItem>
            <IonLabel position="stacked">Contraseña</IonLabel>
            <IonInput
              type="password"
              value={password}
              onIonChange={e => setPassword(e.detail.value ?? '')}
            />
          </IonItem>
        </IonList>

        <IonButton expand="block" className="ion-margin-top" onClick={handleCrearCuenta}>
          Registrar cuenta
        </IonButton>

        <IonButton expand="block" fill="clear" onClick={() => history.push('/login')}>
          Volver al login
        </IonButton>

        <IonToast
          isOpen={showOk}
          onDidDismiss={() => setShowOk(false)}
          message="Cuenta creada correctamente."
          duration={1500}
          color="success"
        />

        <IonToast
          isOpen={showError}
          onDidDismiss={() => setShowError(false)}
          message="Debes completar todos los campos."
          duration={2000}
          color="danger"
        />
      </IonContent>
    </IonPage>
  );
};

export default CrearCuenta;