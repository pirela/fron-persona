import React, { useState } from "react";

import {
  IonButton,
  IonItem,
  IonLabel,
  IonSelect,
  IonSelectOption,
} from "@ionic/react";
import { person, mail } from "ionicons/icons";
import cardId from "../../assets/svg/cardId.svg";

import { InputIcon } from "../../components/Input/Input";

interface TypeFiltradoPersona {
  handleClick: Function;
  clearData: Function;
}

//Componente para el filtrado de la persona
const FiltradoPersona = ({ handleClick, clearData }: TypeFiltradoPersona) => {
  //valores del state
  const [identificacion, setIdentificacion] = useState("");
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [email, setEmail] = useState("");
  const [genero, setGenero] = useState("");

  //funcion para limpiar el formulario
  const resertForm = () => {
    setIdentificacion("");
    setNombre("");
    setApellido("");
    setEmail("");
    setGenero("");
    clearData();
  };

  return (
    <div style={{ textAlign: "center" }}>
      <InputIcon
        icon={cardId}
        value={identificacion}
        setValue={setIdentificacion}
        placeholder={"Identificación"}
      />
      <InputIcon
        icon={person}
        value={nombre}
        setValue={setNombre}
        placeholder={"Nombre"}
      />
      <InputIcon
        icon={person}
        value={apellido}
        setValue={setApellido}
        placeholder={"Apellido"}
      />
      <InputIcon
        icon={mail}
        value={email}
        setValue={setEmail}
        placeholder={"Email"}
      />
      <IonItem>
        <IonLabel>Genero</IonLabel>
        <IonSelect
          value={genero}
          placeholder="Seleccione"
          onIonChange={(e) => setGenero(e.detail.value)}
        >
          <IonSelectOption value="Masculino">Masculino</IonSelectOption>
          <IonSelectOption value="Femenino">Femenino</IonSelectOption>
        </IonSelect>
      </IonItem>
      <IonButton onClick={resertForm} color="primary">
        Limpiar
      </IonButton>
      <IonButton
        onClick={() =>
          handleClick &&
          handleClick({ identificacion, nombre, apellido, email, genero })
        }
        color="primary"
      >
        Buscar
      </IonButton>
    </div>
  );
};

export default FiltradoPersona;
