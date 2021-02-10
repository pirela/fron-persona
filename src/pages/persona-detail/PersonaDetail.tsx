import React, { useState } from "react";
import { useParams } from "react-router";

import {
  IonContent,
  IonHeader,
  IonLoading,
  IonPage,
  IonToast,
} from "@ionic/react";

import lineasSvg from "../../assets/svg/wave.svg";

import { Toolbar } from "../../components/Toolbar/Toolbar";
import FormPersona from "./FormPersona";

import css from "./PersonaDetail.module.css";

import { postPersona, putPersona } from "../../services/persona";

import TypePersona from "../../Type/Persona";

const Persona: React.FC = () => {
  const [clearForm, setClearForm] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastTxt, setToastTxt] = useState("");
  const [loading, setLoading] = useState(false);

  const { idPersona }: { idPersona: string } = useParams();

  const crearPersona = async (values: TypePersona) => {
    setLoading(true);
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
    setClearForm(!clearForm);
    setToastTxt("Persona agregada exitosamente");
    setLoading(false);
    setShowToast(true);
  };

  const actualizarPersona = async (values: TypePersona) => {
    setLoading(true);
    const { data } = await putPersona(values);
    setToastTxt("Persona modificada exitosamente");
    setLoading(false);
    setShowToast(true);
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
      <IonHeader>
        <Toolbar title="DETALLE PERSONA" icons={[]} showBackButton />
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
