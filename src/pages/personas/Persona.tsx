import React from "react";
import { useHistory } from "react-router-dom";

import { IonContent, IonHeader, IonPage } from "@ionic/react";
import { addCircle } from "ionicons/icons";

import { Toolbar } from "../../components/Toolbar/Toolbar";
import { CardUser } from "../../components/Card/Card";

const Persona: React.FC = () => {
  const history = useHistory();

  const dataIcon = [
    {
      icon: addCircle,
      handleClick: () => console.info("1"),
    },
  ];

  return (
    <IonPage>
      <IonHeader>
        <Toolbar title="Persona" icons={dataIcon} />
      </IonHeader>
      <IonContent fullscreen>
        <CardUser
          img={
            "https://www.sabervivirtv.com/medio/2019/02/01/altamente-sensible_4713542c_990x586.jpg"
          }
          name="jose pirela"
          handleClick={() => {
            history.push("/persona-detail");
          }}
          handleView={() => {
            history.push("/persona-detail");
          }}
          handleDelete={() => {
            console.info("handleDelete");
          }}
        />
      </IonContent>
    </IonPage>
  );
};

export default Persona;
