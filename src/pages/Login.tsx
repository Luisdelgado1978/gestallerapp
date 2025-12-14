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
  IonText,
  IonToast
} from '@ionic/react';
import { useHistory } from 'react-router-dom';

const Login: React.FC = () => {
  const history = useHistory();

  const [correo, setCorreo] = useState('');
  const [clave, setClave] = useState('');

  // Mensaje visible dentro de la página
  const [msg, setMsg] = useState('');

  // Toast (opcional)
  const [showToast, setShowToast] = useState(false);

  const manejarLogin = () => {
    if (!correo.trim()) {
      setMsg('Debes ingresar tu correo.');
      setShowToast(true);
      return;
    }
    if (!clave.trim()) {
      setMsg('Debes ingresar tu contraseña.');
      setShowToast(true);
      return;
    }

    setMsg(''); // limpia mensaje
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
          <IonInput
            type="email"
            value={correo}
            placeholder="usuario@correo.com"
            onIonChange={(e) => setCorreo(e.detail.value ?? '')}
          />
        </IonItem>

        <IonItem>
          <IonLabel position="stacked">Contraseña</IonLabel>
          <IonInput
            type="password"
            value={clave}
            placeholder="**"
            onIonChange={(e) => setClave(e.detail.value ?? '')}
          />
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

        {/* MENSAJE SIEMPRE VISIBLE (debajo de botones) */}
        {msg && (
          <IonText color="danger">
            <p className="ion-text-center ion-margin-top">{msg}</p>
          </IonText>
        )}

        {/* TOAST opcional (si igual lo quieres) */}
        <IonToast
          isOpen={showToast}
          message={msg}
          duration={1800}
          position="bottom"
          onDidDismiss={() => setShowToast(false)}
        />
      </IonContent>
    </IonPage>
  );
};

export default Login;