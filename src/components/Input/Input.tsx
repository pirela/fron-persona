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

export { InputIcon, InputStacked };
