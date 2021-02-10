import React, { useEffect, useState } from "react";

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

import { getPersonaById } from "../../services/persona";

import css from "./FormPersona.module.css";

interface TypeFormPersona {
  handleClick: Function;
  clearForm: boolean;
  idPersona: string;
}
//Componente para el formulario de las personas
const FormPersona = ({
  handleClick,
  clearForm,
  idPersona,
}: TypeFormPersona) => {
  //valores del state
  const [id, setId] = useState("");
  const [identificacion, setIdentificacion] = useState("");
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [email, setEmail] = useState("");
  const [genero, setGenero] = useState("");
  const [img, setImg] = useState("");

  //consulta de la persona para traer todos los datos necesarios
  const getPersona = async () => {
    const { data } = await getPersonaById(idPersona);
    setId(data.id);
    setIdentificacion(data.identificacion);
    setNombre(data.nombre);
    setApellido(data.apellido);
    setEmail(data.email);
    setGenero(data.genero);
    setImg(data.img);
  };

  useEffect(() => {
    setId("");
    setIdentificacion("");
    setNombre("");
    setApellido("");
    setEmail("");
    setGenero("");
  }, [clearForm]);
  
  /* en caso de que el idPersona sea 0 no consltamos ya que es para crear una nueva persona, en caso contrario
   *consultamos la personalbar
   */
  useEffect(() => {
    if (idPersona !== "0") {
      getPersona();
    }
  }, [idPersona]);

  return (
    <div>
      <div className={css.FormPersonaCenter}>
        <img
          src={
            img ||
            "https://thumbs.dreamstime.com/b/omita-al-avatar-placeholder-de-la-foto-icono-del-perfil-124557887.jpg"
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
            handleClick({ id, identificacion, nombre, apellido, email, genero })
          }
          color="primary"
        >
          {idPersona === "0" ? "Crear" : "Actualizar"}
        </IonButton>
      </div>
    </div>
  );
};

export default FormPersona;
