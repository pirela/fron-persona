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

import { eye, trash } from "ionicons/icons";

import css from "./Card.module.css";

interface persona {
  id: string;
  img: string;
  nombre: string;
  apellido: string;
  email: string;
  identificacion: string;
  handleClick: Function;
  handleView: Function;
  handleDelete: Function;
}

interface dataPersona {
  data: persona[];
}

const CardUser = ({ data }: dataPersona) => {
  return (
    <div>
      {data.map(
        ({
          id,
          img,
          nombre,
          email,
          handleView,
          handleDelete,
          handleClick,
          identificacion,
          apellido,
        }: persona) => (
          <IonCard className={css.CardUser} key={id}>
            <IonGrid className={css.CardUserGrid}>
              <IonRow>
                <IonCol size={"3"} onClick={() => handleClick}>
                  <img src={img} alt="Avatar" className={css.CardUserAvatar} />
                </IonCol>
                <IonCol
                  size="7"
                  className={css.CardUserTxt}
                  onClick={() => handleClick(id)}
                >
                  <div className={css.CardUserTxtName}>
                    {`${nombre} ${apellido}`}
                  </div>
                  <div className={css.CardUserTxtInfo}>
                    {`${identificacion}`}
                  </div>
                  <div className={css.CardUserTxtInfo}>{`${email}`}</div>
                </IonCol>
                <IonCol size="2" className={css.CardUserIconCenter}>
                  <IonIcon
                    className={css.CardUserIcon}
                    onClick={() => handleView(id)}
                    icon={eye}
                  />
                  <IonIcon
                    className={css.CardUserIcon}
                    onClick={() => handleDelete(id)}
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

const CardAbout = ({ title, data }: any) => {
  return (
    <IonCard style={{ background: "#fff" }}>
      <IonCardHeader>
        <IonCardTitle>{title}</IonCardTitle>
      </IonCardHeader>
      <IonCardContent>
        <IonGrid>
          {data.map((element: any) => {
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
