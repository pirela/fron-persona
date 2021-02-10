import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import {
  IonAlert,
  IonButton,
  IonContent,
  IonHeader,
  IonLoading,
  IonPage,
  IonToast,
} from "@ionic/react";
import { addCircle } from "ionicons/icons";

import { Toolbar } from "../../components/Toolbar/Toolbar";
import { CardUser } from "../../components/Card/Card";

import { getPersonaLimit, deletePersona } from "../../services/persona";

import TabContext from "../../context/TabContext";

import css from "./Persona.module.css";

import TypePersona from "../../Type/Persona";

const Persona: React.FC = () => {
  //Valores que usaremos en el state
  const [dataPersonas, setDataPersona] = useState<any>([]);
  const [showAlert, setShowAlert] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [loading, setLoading] = useState(false);
  const [toastTxt, setToastTxt] = useState("");
  const [selectedIdPersona, setSelectedIdPersona] = useState("");

  //valores del contexto,
  const { tab } = useContext<any>(TabContext);
  //historiy para la navegacion
  const history = useHistory();
  //valores para el componente del toolbar icono y handleClcik
  const dataIcon = [
    {
      icon: addCircle,
      handleClick: () => history.push(`/persona-detail/0`),
    },
  ];
  //funcion para el navegar a la ruta persona.detail. Pasamos como parametro el id del usuario q consultaremos
  const irDetallePersona = async (idPersona: string) => {
    history.push(`/persona-detail/${idPersona}`);
  };

  /**
   * funcion para la consulta de las personas, el cual maneja un offset y limit por default de 5
   * se consulta la dara y la recorremos creamos un nuevo array para a cada valor inglesarle los nuevos atributos
   * handleView, handleDelete y handleClick
   * */
  const getDataPersona = async (cantidad: number) => {
    setLoading(true);
    const { data } = await getPersonaLimit(cantidad);
    const newData = data.reduce((acc: TypePersona[], persona: TypePersona) => {
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
    setLoading(false);
  };

  /**
   * funcion para eliminar una persona, tomamos el id, lo pasamos el endpoint, esperamos su respuesta
   * luego lo eliminar en la data que ya tenemos en el front y mostramos el mensaje de que ha sido eliminado
   */
  const eliminarPersona = async () => {
    setLoading(true);
    const { data } = await deletePersona(selectedIdPersona);
    setSelectedIdPersona("");
    const i = dataPersonas.findIndex(
      (persona: TypePersona) => persona.id === selectedIdPersona
    );
    const newDataPersona = dataPersonas;
    newDataPersona.splice(i, 1);
    setDataPersona(newDataPersona);
    if (data) {
      setToastTxt("La persona ha sido eliminada");
      setShowToast(true);
    }
    setLoading(false);
  };

  // utilizamos el useEffect para que cada q entre a la pagina se refresque la data automaticamente
  useEffect(() => {
    if (tab === "personas") {
      getDataPersona(0);
    }
  }, [tab]);

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
        <Toolbar title="Personas" icons={dataIcon} />
      </IonHeader>
      <IonContent fullscreen>
        {loading && (
          <IonLoading
            cssClass="my-custom-class"
            isOpen={loading}
            onDidDismiss={() => setLoading(false)}
            message={"Please wait..."}
          />
        )}
        {!loading && (
          <>
            <CardUser data={dataPersonas} />
            <div className={css.PersonaCenterBtn}>
              <IonButton
                onClick={() => getDataPersona(dataPersonas.length)}
                color="primary"
              >
                Más
              </IonButton>
            </div>
          </>
        )}
      </IonContent>
    </IonPage>
  );
};

export default Persona;
