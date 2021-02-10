import React from "react";

import { IonContent, IonHeader, IonPage } from "@ionic/react";

import {
  logoGithub,
  logoGoogle,
  logoIonic,
  logoReact,
  logoCapacitor,
  logoNodejs,
} from "ionicons/icons";
import logoDribbble from "../../assets/svg/logoDribbble.svg";
import logoMySQL from "../../assets/svg/logoMySQL.svg";
import logoSequelize from "../../assets/svg/logoSequelize.svg";

import { Toolbar } from "../../components/Toolbar/Toolbar";
import { CardAbout } from "../../components/Card/Card";

const Acerca: React.FC = () => {
  //valores que enviamos al componente CardAbout
  const dataFront = [
    { url: "Ionic", logo: logoIonic, href: false },
    { url: "React", logo: logoReact, href: false },
    { url: "Capacitor", logo: logoCapacitor, href: false },
  ];

  const dataBack = [
    { url: "Node js", logo: logoNodejs, href: false },
    { url: "Sequelize", logo: logoSequelize, href: false },
    { url: "MySQL", logo: logoMySQL, href: false },
  ];

  const dataDeveloper = [
    { url: "https://github.com/pirela", logo: logoGithub, href: true },
    { url: "jjpirela93@gmail.com", logo: logoGoogle, href: false },
  ];

  const dataDesigner = [
    {
      url: "https://dribbble.com/vanessariera",
      logo: logoDribbble,
      href: true,
    },
  ];

  return (
    <IonPage>
      <IonHeader>
        <Toolbar title="Acerca" icons={[]} />
      </IonHeader>
      <IonContent fullscreen>
        <CardAbout title={"Tecnologias para el Front"} data={dataFront} />
        <CardAbout title={"Tecnologias para el Back"} data={dataBack} />
        <CardAbout
          title={"Jose Pirela - Software Engineer"}
          data={dataDeveloper}
        />
        <CardAbout title={"Vanessa Riera - Designer"} data={dataDesigner} />
      </IonContent>
    </IonPage>
  );
};

export default Acerca;
