import React from 'react';
import {
  IonApp,
  IonRouterOutlet,
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonLabel
} from '@ionic/react';

import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';
import { calendarOutline, speedometerOutline, timeOutline } from 'ionicons/icons';

/* Importa tus páginas */
import Login from './pages/Login';
import CrearCuenta from './pages/crearcuenta';
import Agendar from './pages/agendar';
import Estado from './pages/estado';
import Historial from './pages/historial';
import Presupuesto from './pages/presupuesto';

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>

      {/* Rutas fuera de los tabs (Login y Crear cuenta) */}
      <IonRouterOutlet id="main">
        <Route path="/login" component={Login} exact />
        <Route path="/crearcuenta" component={CrearCuenta} exact />
      </IonRouterOutlet>

      {/* Tabs principales */}
      <IonTabs>
        <IonRouterOutlet>
          <Route path="/tabs/agendar" component={Agendar} exact />
          <Route path="/tabs/estado" component={Estado} exact />
          <Route path="/tabs/historial" component={Historial} exact />
          <Route path="/tabs/presupuesto" component={Presupuesto} exact />

          {/* Si entra solo a /tabs lo mandamos a /tabs/agendar */}
          <Route
            path="/tabs"
            render={() => <Redirect to="/tabs/agendar" />}
            exact
          />

          {/* Ruta raíz: mandamos siempre a /login */}
          <Route
            path="/"
            render={() => <Redirect to="/login" />}
            exact
          />
        </IonRouterOutlet>

        <IonTabBar slot="bottom">
          <IonTabButton tab="agendar" href="/tabs/agendar">
            <IonIcon icon={calendarOutline} />
            <IonLabel>Agendar</IonLabel>
          </IonTabButton>

          <IonTabButton tab="estado" href="/tabs/estado">
            <IonIcon icon={speedometerOutline} />
            <IonLabel>Estado</IonLabel>
          </IonTabButton>

          <IonTabButton tab="historial" href="/tabs/historial">
            <IonIcon icon={timeOutline} />
            <IonLabel>Historial</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>

    </IonReactRouter>
  </IonApp>
);

export default App;