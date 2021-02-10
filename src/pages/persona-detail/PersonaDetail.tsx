import React from "react";

import { IonContent, IonHeader, IonPage } from "@ionic/react";

import lineasSvg from "../../assets/svg/wave.svg";

import { Toolbar } from "../../components/Toolbar/Toolbar";
import FormPersona from "./FormPersona";

import css from "./PersonaDetail.module.css";

const Persona: React.FC = () => {
  const actualizarPersona = ({
    identificacion,
    nombre,
    apellido,
    email,
    genero,
  }: any) => {
    console.info(
      "buscar persona",
      identificacion,
      nombre,
      apellido,
      email,
      genero
    );
  };

  return (
    <IonPage>
      <IonHeader>
        <Toolbar title="DETALLE PERSONA" icons={[]} showBackButton />
      </IonHeader>
      <IonContent fullscreen>
        <img src={lineasSvg} alt="a" className={css.PersonaDetailSvg} />
        <FormPersona handleClick={actualizarPersona} />
      </IonContent>
    </IonPage>
  );
};

export default Persona;
