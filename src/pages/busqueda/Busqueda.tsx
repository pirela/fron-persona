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
        <CardUser
          img={
            "https://www.sabervivirtv.com/medio/2019/02/01/altamente-sensible_4713542c_990x586.jpg"
          }
          name="jose pirela"
          handleClick={() => {
            console.info("handleClick");
          }}
          handleView={() => {
            console.info("handleView");
          }}
          handleDelete={() => {
            console.info("handleDelete");
          }}
        />
      </IonContent>
    </IonPage>
  );
};

export default Busqueda;
