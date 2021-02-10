import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import {
  IonAlert,
  IonContent,
  IonHeader,
  IonPage,
  IonToast,
} from "@ionic/react";

import { CardUser } from "../../components/Card/Card";
import { Toolbar } from "../../components/Toolbar/Toolbar";

import FiltradoPersona from "./FiltradoPersona";

import { deletePersona, postSearchPersona } from "../../services/persona";

const Busqueda: React.FC = () => {
  const [dataPersonas, setDataPersonas] = useState<any>([]);
  const [selectedIdPersona, setSelectedIdPersona] = useState("");
  const [toastTxt, setToastTxt] = useState("");

  const [showAlert, setShowAlert] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const history = useHistory();

  const irDetallePersona = async (idPersona: string) => {
    history.push(`/persona-detail/${idPersona}`);
  };

  const eliminarPersona = async () => {
    const { data } = await deletePersona(selectedIdPersona);
    setSelectedIdPersona("");
    const i = dataPersonas.findIndex(
      (persona: any) => persona.id === selectedIdPersona
    );
    const newDataPersona = dataPersonas;
    newDataPersona.splice(i, 1);
    setDataPersonas(newDataPersona);
    if (data) {
      setToastTxt("La persona ha sido eliminada");
      setShowToast(true);
    }
  };

  const handleClick = async (values: any) => {
    const { data } = await postSearchPersona(values);
    const newData = data.reduce((acc: any[], persona: any) => {
      const newPersona = JSON.parse(JSON.stringify(persona));
      acc.push({
        ...newPersona,
        handleView: (idPersona: string) => irDetallePersona(idPersona),
        handleDelete: (idPersona: string) => {
          setSelectedIdPersona(idPersona);
          setShowAlert(true);
        },
        handleClick: (idPersona: string) => irDetallePersona(idPersona),
      });
      return acc;
    }, []);

    setDataPersonas(newData);
    console.info("res,", data);
  };
  return (
    <IonPage>
      <IonToast
        isOpen={showToast}
        onDidDismiss={() => setShowToast(false)}
        message={toastTxt}
        duration={3000}
        position={"top"}
      />
      <IonAlert
        isOpen={showAlert}
        onDidDismiss={() => setShowAlert(false)}
        header={"Alerta"}
        message={"¿Esta seguro de eliminar al usuario?"}
        buttons={[
          {
            text: "Cancelar",
            role: "cancel",
            cssClass: "secondary",
            handler: () => {
              setSelectedIdPersona("");
            },
          },
          {
            text: "Confirmar",
            handler: () => {
              eliminarPersona();
            },
          },
        ]}
      />
      <IonHeader>
        <Toolbar title="Buscador" icons={[]} />
      </IonHeader>
      <IonContent fullscreen>
        <FiltradoPersona handleClick={handleClick} />
        <CardUser data={dataPersonas} />
      </IonContent>
    </IonPage>
  );
};

export default Busqueda;
