import React from "react";

import { IonIcon, IonInput, IonItem, IonLabel } from "@ionic/react";

import css from "./Input.module.css";

interface TypeInput {
  value: string;
  setValue: Function;
  placeholder: string;
  icon: string;
  slot?: string;
}

interface TypeInputStacked {
  value: string;
  setValue: Function;
  placeholder: string;
}
/**
 *
 * @param param0 recibimos el valor la funcion para setear el valor slot (si colocar al inicio o final el icono)
 * placeholder y el icono
 * componente para mostrar un Input con icono
 */
const InputIcon = ({
  value,
  setValue,
  slot = "start",
  placeholder,
  icon,
}: TypeInput) => {
  return (
    <div>
      <IonItem lines="none">
        <IonIcon className={css.InputIcon} src={icon} slot={slot} />
        <IonLabel position="floating">{placeholder}</IonLabel>
        <IonInput
          value={value}
          onIonChange={(e) => setValue(e.detail.value!)}
        />
      </IonItem>
    </div>
  );
};
/**
 *
 * @param param0  recibimos el valor la funcion para setear el valor y el placeholder
 * componente para mostrar unInput sin icono
 */
const InputStacked = ({ value, setValue, placeholder }: TypeInputStacked) => {
  return (
    <div>
      <IonLabel className={css.InputStackedLabel}>{placeholder}</IonLabel>
      <IonItem lines="none">
        <IonInput
          value={value}
          onIonChange={(e) => setValue(e.detail.value!)}
        />
      </IonItem>
    </div>
  );
};

//exportamos los componente
export { InputIcon, InputStacked };
