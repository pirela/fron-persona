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

const CardUser = ({
  img,
  name,
  handleClick,
  handleView,
  handleDelete,
}: any) => {
  return (
    <IonCard className={css.CardUser}>
      <IonGrid className={css.CardUserGrid}>
        <IonRow>
          <IonCol size={"4"} onClick={handleClick}>
            <img src={img} alt="Avatar" className={css.CardUserAvatar} />
          </IonCol>
          <IonCol size="6" className={css.CardUserTxt} onClick={handleClick}>
            <div className={css.CardUserTxtName}>{name}</div>
            <div className={css.CardUserTxtInfo}>{name}</div>
          </IonCol>
          <IonCol size="2" className={css.CardUserIconCenter}>
            <IonIcon
              className={css.CardUserIcon}
              onClick={handleView}
              icon={eye}
            />
            <IonIcon
              className={css.CardUserIcon}
              onClick={handleDelete}
              icon={trash}
            />
          </IonCol>
        </IonRow>
      </IonGrid>
    </IonCard>
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
