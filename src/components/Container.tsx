import { FunctionComponent } from "react";
import styles from "./Container.module.css";

const Container: FunctionComponent = ({ className = "" }) => {
  return (
    <div className={[styles.container2, className].join(" ")}>
      <div className={styles.rectangleParent}>
        <img
          className={styles.frameChild}
          loading="lazy"
          alt=""
          src="/rectangle-1@2x.png"
        />
        <div className={styles.placeholder}>
          Bonjour, je me sens stressée, je suis confrontée à une charge de
          travail importante et une deadline imminente. Nous avons un projet
          majeur qui doit être finalisé avant les vacances, et il semble que
          nous soyons en retard sur notre planning. Je me sens responsable, car
          en tant que Chef de Projet, c'est à moi de veiller à ce que tout soit
          livré à temps. De plus, l'équipe est sous pression et je crains que
          cela ne se répercute sur leur bien-être et leur productivité.
        </div>
        <div className={styles.placeholderWrapperParent}>
          <div className={styles.placeholderWrapper}>
            <img
              className={styles.placeholderWrapperChild}
              loading="lazy"
              alt=""
              src="/group-37.svg"
            />
          </div>
          <div className={styles.placeholderContainer}>
            <div className={styles.placeholder1}>
              <p
                className={styles.bienvenueSurCe}
              >{`Bienvenue sur ce Chatbot ! Si vous avez des questions ou besoin d'aide, `}</p>
              <p className={styles.bienvenueSurCe}>
                n'hésitez pas à me le faire savoir. Je suis là pour vous
                assister !
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.frameParent1}>
        <div className={styles.frameWrapper}>
          <div className={styles.shapesWrapper}>
            <div className={styles.shapes}>
              <img
                className={styles.shapesChild}
                loading="lazy"
                alt=""
                src="/ellipse-16@2x.png"
              />
              <div className={styles.shapesItem} />
            </div>
          </div>
        </div>
        <div className={styles.placeholder2}>
          Je vois, cela semble être une période exigeante pour vous et votre
          équipe. En plus du retard sur le planning, y a-t-il d'autres facteurs
          qui contribuent à votre stress actuellement ?
        </div>
      </div>
      <div className={styles.frameParent2}>
        <div className={styles.placeholderContainerWrapper}>
          <div className={styles.placeholderContainer1}>
            <img
              className={styles.frameChild}
              loading="lazy"
              alt=""
              src="/rectangle-1@2x.png"
            />
            <div className={styles.placeholder3}>
              Oui, en plus des délais, il y a la pression pour maintenir la
              qualité du travail. Cela m'oblige à jongler entre différentes
              tâches et responsabilités, ce qui est assez épuisant.
            </div>
          </div>
        </div>
        <div className={styles.frameParent3}>
          <div className={styles.frameWrapper}>
            <div className={styles.shapesWrapper}>
              <div className={styles.shapes}>
                <img
                  className={styles.frameItem}
                  alt=""
                  src="/ellipse-16@2x.png"
                />
                <div className={styles.shapesItem} />
              </div>
            </div>
          </div>
          <input
            className={styles.placeholder4}
            placeholder="Décrivez votre situation"
            type="text"
          />
        </div>
        <div className={styles.frameParent4}>
          <div className={styles.frameWrapper}>
            <div className={styles.shapesWrapper}>
              <div className={styles.shapes}>
                <img
                  className={styles.shapesChild}
                  alt=""
                  src="/ellipse-16@2x.png"
                />
                <div className={styles.shapesItem} />
              </div>
            </div>
          </div>
          <div className={styles.placeholder2}>
            Cela semble être un défi de taille, jongler entre la gestion des
            attentes, la qualité du projet et le bien-être de l'équipe. Comment
            pensez-vous que cette situation affecte votre équipe ?
          </div>
        </div>
      </div>
      <div className={styles.rectangleGroup}>
        <img
          className={styles.frameChild}
          loading="lazy"
          alt=""
          src="/rectangle-1@2x.png"
        />
        <div className={styles.placeholder6}>
          Je peux voir qu'ils sont également stressés et fatigués. Certains
          commencent à montrer des signes de frustration, ce qui est
          compréhensible, mais cela crée une ambiance tendue au sein de
          l'équipe.
        </div>
      </div>
      <div className={styles.frameParent1}>
        <div className={styles.frameWrapper}>
          <div className={styles.shapesWrapper}>
            <div className={styles.shapes}>
              <img
                className={styles.shapesChild}
                loading="lazy"
                alt=""
                src="/ellipse-16@2x.png"
              />
              <div className={styles.shapesItem} />
            </div>
          </div>
        </div>
        <div className={styles.placeholder6}>
          Merci, Sophie, pour ce partage. Sur la base de cette analyse, je vais
          vous faire une fiche récapitulatif de votre contexte pour cela passez
          à l’étape suivante.
        </div>
      </div>
    </div>
  );
};

export default Container;
