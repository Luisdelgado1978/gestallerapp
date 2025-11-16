import { IonPage, IonContent, IonHeader, IonTitle, IonToolbar, IonItem, IonLabel, IonInput, IonButton, IonText } from '@ionic/react';
import { useHistory } from 'react-router';

const Login: React.FC = () => {
  const history = useHistory();
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Login</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonItem>
          <IonLabel position="stacked">Nombre</IonLabel>
          <IonInput placeholder="Luis Delgado Aguilera" />
        </IonItem>
        <IonItem>
          <IonLabel position="stacked">Password</IonLabel>
          <IonInput type="password" />
        </IonItem>
        <IonButton expand="block" className="ion-margin-top" onClick={() => history.push('/tabs/agendar')}>
          Ingresar
        </IonButton>
        <IonText>
          <p style={{ textAlign: 'center', marginTop: 16 }}>
            ¿No tienes cuenta? <a onClick={() => history.push('/crear-cuenta')}>Crear cuenta</a>
          </p>
        </IonText>
      </IonContent>
    </IonPage>
  );
};
export default Login;
