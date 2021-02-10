import React from "react";

import { IonContent, IonHeader, IonPage } from "@ionic/react";

import { CardUser } from "../../components/Card/Card";
import { Toolbar } from "../../components/Toolbar/Toolbar";

import FiltradoPersona from "./FiltradoPersona";

const Busqueda: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <Toolbar title="Buscador" icons={[]} />
      </IonHeader>
      <IonContent fullscreen>
        <FiltradoPersona />
        <CardUser data={[]} />
      </IonContent>
    </IonPage>
  );
};

export default Busqueda;
