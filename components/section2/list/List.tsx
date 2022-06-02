import styles from "./list.module.scss";
import Tick from "../../../icons/Tick";
import { v4 } from "uuid";

const arr1 = [
  "Wir machen deine Produkte online sichtbar",
  "Leichte Bedienung der Plattform und persönlicher Service",
  "Profitiere von der Reichweite deiner gelisteten Marken",
  "Steigere deinen Umsatz durch Online-Präsenz und erreiche Kunden überregional",
];
const arr2 = [
  "Du hast volle Kontrolle ohne Risiken",
  "Teste unkompliziert neue Produkte für dein Sortiment",
  "Spare Zeit durch integrierte Angebots- und Zahlungsabwicklung",
  "Nutze die Bilder der Plattform, um deine Kunden vor Ort zu inspirieren",
];

const List = () => {
  return (
    <div className={styles["list"]}>
      <ul className={styles["list-ul"]}>
        {arr1.map((item) => {
          return (
            <li key={v4()} className={styles["list-li"]}>
              <p className={styles["list-tick-wrapper"]}>
                <Tick className={styles["list-tick"]} />
              </p>{" "}
              <p className={styles["list-text"]}>{item}</p>
            </li>
          );
        })}
      </ul>
      <ul className={styles["list-ul"]}>
        {arr2.map((item) => {
          return (
            <li key={v4()} className={styles["list-li"]}>
              <p className={styles["list-tick-wrapper"]}>
                <Tick className={styles["list-tick"]} />
              </p>{" "}
              <p className={styles["list-text"]}>{item}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default List;
