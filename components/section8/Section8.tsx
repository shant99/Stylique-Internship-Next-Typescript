import ButtonTermin from "../buttonTermin/ButtonTermin";
import styles from "./section8.module.scss";
import { v4 } from "uuid";
import Tick from "../../icons/Tick";

const arr: string[] = [
  "STYLIQUE ist ein Marktplatz. Ein Werkzeug, um deine Online-Präsenz voranzutreiben.",
  "Alle relevanten Akteure für Produkte - von der Herstellung bis zum Bauherren an einem Ort.",
  "Durch digitale Vernetzung sicherst du dir nachhaltige Partnerschaften.",
  "Digitale und persönliche Unterstützung in Marketing, Verkauf und Service. ",
];

const Section8: React.FC = () => {
  return (
    <div className={styles["section8-container"]}>
      <div className={styles["section8"]}>
        <h2 className={styles["section8-header"]}>
          Was macht diese B2B-Plattform so besonders? Sie ist einzigartig.
        </h2>
        <p className={styles["section8-description"]}>
          STYLIQUE ist die erste B2B-Plattform für die Design-Baubranche. Du
          wirst schnell den Unterschied zu einer Online Rechercheplattform oder
          einem Online-Herstellerverzeichnis entdecken.
        </p>
        <ul className={styles["section8-list-ul"]}>
          {arr.map((item) => {
            return (
              <li className={styles["section8-list-li"]} key={v4()}>
                <span className={styles["section8-list-li-Tick"]}>
                  <Tick />
                </span>
                <span className={styles["section8-list-li-text"]}>{item}</span>
              </li>
            );
          })}
        </ul>
        <ButtonTermin clickHandler={undefined} />
      </div>
    </div>
  );
};

export default Section8;
