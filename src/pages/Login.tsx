import React from 'react';
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonItem,
  IonLabel,
  IonInput,
  IonButton
} from '@ionic/react';
import { useHistory } from 'react-router-dom';

const Login: React.FC = () => {
  const history = useHistory();

  const manejarLogin = () => {
    // aquí podrías validar usuario/clave, por ahora solo navega
    history.push('/tabs/agendar');
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Login</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
        <IonItem>
          <IonLabel position="stacked">Correo</IonLabel>
          <IonInput type="email" placeholder="usuario@correo.com" />
        </IonItem>

        <IonItem>
          <IonLabel position="stacked">Contraseña</IonLabel>
          <IonInput type="password" placeholder="****" />
        </IonItem>

        <IonButton expand="block" className="ion-margin-top" onClick={manejarLogin}>
          Ingresar
        </IonButton>

        <IonButton
          expand="block"
          fill="clear"
          className="ion-margin-top"
          routerLink="/crear-cuenta"
        >
          Crear cuenta
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Login;