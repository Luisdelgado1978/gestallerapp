import React from 'react';
import {
  IonApp,
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonLabel,
  IonRouterOutlet
} from '@ionic/react';

import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';

import { calendarOutline, speedometerOutline, timeOutline, cashOutline } from 'ionicons/icons';

/* importa tus páginas */
import Login from './pages/Login';
import CrearCuenta from './pages/crearcuenta';
import Agendar from './pages/agendar';
import Estado from './pages/estado';
import Historial from './pages/historial';
import Presupuesto from './pages/presupuesto';

/* IMPORTANTE: estilos de Ionic */
import '@ionic/react/css/core.css';
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';
import './theme/variables.css';

const App: React.FC = () => {
  return (
    <IonApp>
      <IonReactRouter>
        {/* Rutas fuera de las tabs */}
        <IonRouterOutlet id="main">
          <Route path="/login" component={Login} exact />
          <Route path="/crear-cuenta" component={CrearCuenta} exact />

          {/* Contenedor de tabs */}
          <Route path="/tabs">
            <IonTabs>
              <IonRouterOutlet>
                <Route path="/tabs/agendar" component={Agendar} exact />
                <Route path="/tabs/estado" component={Estado} exact />
                <Route path="/tabs/historial" component={Historial} exact />
                <Route path="/tabs/presupuesto" component={Presupuesto} exact />
                <Redirect exact from="/tabs" to="/tabs/agendar" />
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

                <IonTabButton tab="presupuesto" href="/tabs/presupuesto">
                  <IonIcon icon={cashOutline} />
                  <IonLabel>Presupuesto</IonLabel>
                </IonTabButton>
              </IonTabBar>
            </IonTabs>
          </Route>

          {/* Redirecciones por defecto */}
          <Redirect exact from="/" to="/login" />
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
