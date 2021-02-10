import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import { IonContent, IonHeader, IonPage } from "@ionic/react";
import { addCircle } from "ionicons/icons";

import { Toolbar } from "../../components/Toolbar/Toolbar";
import { CardUser } from "../../components/Card/Card";
import { getPersonaLimit } from "../../services/persona";

const Persona: React.FC = () => {
  const [dataPersonas, setDataPersona] = useState<any>([]);
  const history = useHistory();

  const dataIcon = [
    {
      icon: addCircle,
      handleClick: () => console.info("1"),
    },
  ];

  const getDataPersona = async (cantidad: number) => {
    const { data } = await getPersonaLimit(cantidad);
    setDataPersona([...dataPersonas, ...data]);
    console.info("data", data);
  };
  useEffect(() => {
    getDataPersona(0);
  }, []);

  return (
    <IonPage>
      <IonHeader>
        <Toolbar title="Persona" icons={dataIcon} />
      </IonHeader>
      <IonContent fullscreen>
        <CardUser data={dataPersonas} />
      </IonContent>
    </IonPage>
  );
};

export default Persona;
