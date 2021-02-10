import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

import { IonContent, IonHeader, IonPage } from "@ionic/react";

import lineasSvg from "../../assets/svg/wave.svg";

import { Toolbar } from "../../components/Toolbar/Toolbar";
import FormPersona from "./FormPersona";

import css from "./PersonaDetail.module.css";

import { postPersona, putPersona } from "../../services/persona";

const Persona: React.FC = () => {
  const [clearForm, setClearForm] = useState(false);

  const { idPersona }: { idPersona: string } = useParams();

  const crearPersona = async (values: any) => {
    const newValues = {
      ...values,
      img:
        values.genero === "Masculino"
          ? `https://randomuser.me/api/portraits/men/${
              Math.floor(Math.random() * 99) + 1
            }.jpg`
          : `https://randomuser.me/api/portraits/women/${
              Math.floor(Math.random() * 99) + 1
            }.jpg`,
    };
    const { data } = await postPersona(newValues);
    console.info("crear", data);
    setClearForm(!clearForm);
  };

  const actualizarPersona = async (values: any) => {
    const { data } = await putPersona(values);
    console.info("actualizar", data);
    setClearForm(!clearForm);
  };

  return (
    <IonPage>
      <IonHeader>
        <Toolbar title="DETALLE PERSONA" icons={[]} showBackButton />
      </IonHeader>
      <IonContent fullscreen>
        <img src={lineasSvg} alt="a" className={css.PersonaDetailSvg} />
        <FormPersona
          clearForm={clearForm}
          handleClick={idPersona === "0" ? crearPersona : actualizarPersona}
          idPersona={idPersona}
        />
      </IonContent>
    </IonPage>
  );
};

export default Persona;
