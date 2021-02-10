import React from "react";
import {
  IonTitle,
  IonToolbar,
  IonBackButton,
  IonButtons,
  IonButton,
  IonIcon,
} from "@ionic/react";

interface TypeIcons {
  handleClick: Function;
  icon: string;
}
interface typeToolbar {
  title: string;
  showBackButton?: boolean;
  icons?: TypeIcons[];
}

const Toolbar = ({
  title,
  showBackButton = false,
  icons = [],
}: typeToolbar) => {
  return (
    <IonToolbar>
      {showBackButton && (
        <IonButtons slot="start">
          <IonBackButton defaultHref="/" />
        </IonButtons>
      )}
      {icons.length >= 1 && (
        <IonButtons slot="primary">
          {icons.map(({ handleClick, icon }: TypeIcons, index: number) => (
            <IonButton onClick={() => handleClick()} key={index}>
              <IonIcon slot="icon-only" icon={icon} />
            </IonButton>
          ))}
        </IonButtons>
      )}
      <IonTitle>{title}</IonTitle>
    </IonToolbar>
  );
};

export { Toolbar };
