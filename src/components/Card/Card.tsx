import React from "react";
import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonCol,
  IonGrid,
  IonIcon,
  IonRow,
} from "@ionic/react";

import { trash } from "ionicons/icons";

import css from "./Card.module.css";

import TypePersona from "../../Type/Persona";

interface dataPersona {
  data: TypePersona[];
}

interface TypeCardAbout {
  data: TypeAbout[];
  title: string;
}

interface TypeAbout {
  url: string;
  href: boolean;
  logo: string;
}

const CardUser = ({ data }: dataPersona) => {
  return (
    <div>
      {data.map(
        ({
          id,
          img,
          nombre,
          email, //handleView,
          handleDelete,
          handleClick,
          identificacion,
          apellido,
        }: TypePersona) => (
          <IonCard className={css.CardUser} key={id}>
            <IonGrid className={css.CardUserGrid}>
              <IonRow>
                <IonCol size={"3"} onClick={() => handleClick}>
                  <img src={img} alt="Avatar" className={css.CardUserAvatar} />
                </IonCol>
                <IonCol
                  size="7"
                  className={css.CardUserTxt}
                  onClick={() => handleClick && handleClick(id)}
                >
                  <div className={css.CardUserTxtName}>
                    {`${nombre} ${apellido}`}
                  </div>
                  <div
                    className={css.CardUserTxtInfo}
                  >{`${identificacion}`}</div>
                  <div className={css.CardUserTxtInfo}>{`${email}`}</div>
                </IonCol>
                <IonCol size="2" className={css.CardUserIconCenter}>
                  {/*<IonIcon
                    className={css.CardUserIcon}
                    onClick={() => handleView(id)}
                    icon={eye}
                  />*/}
                  <IonIcon
                    className={css.CardUserIcon}
                    onClick={() => handleDelete && handleDelete(id)}
                    icon={trash}
                  />
                </IonCol>
              </IonRow>
            </IonGrid>
          </IonCard>
        )
      )}
    </div>
  );
};

const CardAbout = ({ title, data }: TypeCardAbout) => {
  return (
    <IonCard style={{ background: "#fff" }}>
      <IonCardHeader>
        <IonCardTitle>{title}</IonCardTitle>
      </IonCardHeader>
      <IonCardContent>
        <IonGrid>
          {data.map((element: TypeAbout) => {
            return (
              <IonRow>
                <IonCol
                  size={"2"}
                  style={{
                    textAlign: "center",
                    margin: "auto",
                  }}
                >
                  <IonIcon icon={element.logo} />
                </IonCol>
                <IonCol size={"10"}>
                  {element.href && (
                    <a href={element.url} target="_blank" rel="noreferrer">
                      {element.url}
                    </a>
                  )}
                  {!element.href && <div>{element.url}</div>}
                </IonCol>
              </IonRow>
            );
          })}
        </IonGrid>
      </IonCardContent>
    </IonCard>
  );
};

export { CardUser, CardAbout };
