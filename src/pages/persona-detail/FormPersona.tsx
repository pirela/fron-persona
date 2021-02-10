import React, { useState } from "react";

import {
  IonButton,
  IonCol,
  IonGrid,
  IonItem,
  IonLabel,
  IonRadio,
  IonRadioGroup,
  IonRow,
} from "@ionic/react";

import { InputStacked } from "../../components/Input/Input";

import css from "./FormPersona.module.css";

const FormPersona = ({ handleClick }: any) => {
  const [identificacion, setIdentificacion] = useState("");
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [email, setEmail] = useState("");
  const [genero, setGenero] = useState("");

  return (
    <div>
      <div className={css.FormPersonaCenter}>
        <img
          src={
            "https://www.sabervivirtv.com/medio/2019/02/01/altamente-sensible_4713542c_990x586.jpg"
          }
          alt="Avatar"
          className={css.FormPersonaAvatar}
        />
      </div>
      <InputStacked
        value={identificacion}
        setValue={setIdentificacion}
        placeholder={"Identificación"}
      />
      <InputStacked
        value={nombre}
        setValue={setNombre}
        placeholder={"Nombre"}
      />
      <InputStacked
        value={apellido}
        setValue={setApellido}
        placeholder={"Apellido"}
      />
      <InputStacked value={email} setValue={setEmail} placeholder={"Email"} />

      <IonRadioGroup
        value={genero}
        onIonChange={(e) => setGenero(e.detail.value)}
      >
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonItem>
                <IonLabel>Femenino</IonLabel>
                <IonRadio slot="start" value="Femenino" />
              </IonItem>
            </IonCol>
            <IonCol>
              <IonItem>
                <IonLabel>Masculino</IonLabel>
                <IonRadio slot="start" value="Masculino" />
              </IonItem>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonRadioGroup>
      <div className={css.FormPersonaCenter}>
        <IonButton
          onClick={() =>
            handleClick &&
            handleClick({ identificacion, nombre, apellido, email, genero })
          }
          color="primary"
        >
          Actualizar
        </IonButton>
      </div>
    </div>
  );
};

export default FormPersona;
