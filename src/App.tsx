import { Redirect, Route } from "react-router-dom";
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";

import searchP from "./assets/svg/searchPerson.svg";
import { people, documentText } from "ionicons/icons";

import Acerca from "./pages/acerca/Acerca";
import Busqueda from "./pages/busqueda/Busqueda";
import Persona from "./pages/personas/Persona";
import PersonaDetail from "./pages/persona-detail/PersonaDetail";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/persona">
            <Persona />
          </Route>
          <Route path="/persona-detail/:idPersona">
            <PersonaDetail />
          </Route>
          <Route exact path="/busqueda">
            <Busqueda />
          </Route>
          <Route path="/acerca">
            <Acerca />
          </Route>
          <Route exact path="/">
            <Redirect to="/persona" />
          </Route>
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="persona" href="/persona">
            <IonIcon icon={people} />
            <IonLabel>Personas</IonLabel>
          </IonTabButton>
          <IonTabButton tab="busqueda" href="/busqueda">
            <IonIcon icon={searchP} />
            <IonLabel>Buscar</IonLabel>
          </IonTabButton>
          <IonTabButton tab="acerca" href="/acerca">
            <IonIcon icon={documentText} />
            <IonLabel>Acerca</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
