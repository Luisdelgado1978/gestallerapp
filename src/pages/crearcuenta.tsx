import { IonPage, IonContent, IonHeader, IonTitle, IonToolbar, IonItem, IonLabel, IonInput, IonButton } from '@ionic/react';
import { useHistory } from 'react-router';

const CrearCuenta: React.FC = () => {
  const history = useHistory();
  return (
    <IonPage>
      <IonHeader><IonToolbar><IonTitle>Crear Nueva Cuenta</IonTitle></IonToolbar></IonHeader>
      <IonContent className="ion-padding">
        <IonItem><IonLabel position="stacked">Nombre</IonLabel><IonInput /></IonItem>
        <IonItem><IonLabel position="stacked">Email</IonLabel><IonInput type="email" /></IonItem>
        <IonItem><IonLabel position="stacked">Password</IonLabel><IonInput type="password" /></IonItem>
        <IonButton expand="block" className="ion-margin-top" onClick={() => history.push('/login')}>Inscribirse</IonButton>
      </IonContent>
    </IonPage>
  );
};
export default CrearCuenta;
