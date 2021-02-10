import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import {
  IonAlert,
  IonButton,
  IonContent,
  IonHeader,
  IonPage,
  IonToast,
} from "@ionic/react";
import { addCircle } from "ionicons/icons";

import { Toolbar } from "../../components/Toolbar/Toolbar";
import { CardUser } from "../../components/Card/Card";

import { getPersonaLimit, deletePersona } from "../../services/persona";

import css from "./Persona.module.css";

const Persona: React.FC = () => {
  const [dataPersonas, setDataPersona] = useState<any>([]);
  const [showAlert, setShowAlert] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const [toastTxt, setToastTxt] = useState("");

  const [selectedIdPersona, setSelectedIdPersona] = useState("");

  const history = useHistory();

  const dataIcon = [
    {
      icon: addCircle,
      handleClick: () => history.push(`/persona-detail/0`),
    },
  ];

  const irDetallePersona = async (idPersona: string) => {
    history.push(`/persona-detail/${idPersona}`);
  };

  const getDataPersona = async (cantidad: number) => {
    const { data } = await getPersonaLimit(cantidad);
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
    setDataPersona([...dataPersonas, ...newData]);
  };

  const eliminarPersona = async () => {
    const { data } = await deletePersona(selectedIdPersona);
    setSelectedIdPersona("");
    const i = dataPersonas.findIndex(
      (persona: any) => persona.id === selectedIdPersona
    );
    const newDataPersona = dataPersonas;
    newDataPersona.splice(i, 1);
    setDataPersona(newDataPersona);
    if (data) {
      setToastTxt("La persona ha sido eliminada");
      setShowToast(true);
    }
  };

  useEffect(() => {
    getDataPersona(0);
  }, []);

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
        <Toolbar title="Persona" icons={dataIcon} />
      </IonHeader>
      <IonContent fullscreen>
        <CardUser data={dataPersonas} />
        <div className={css.PersonaCenterBtn}>
          <IonButton
            onClick={() => getDataPersona(dataPersonas.length)}
            color="primary"
          >
            Más
          </IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Persona;
