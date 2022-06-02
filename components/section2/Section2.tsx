import ButtonTermin from "../buttonTermin/ButtonTermin";
import List from "./list/List";
import styles from "./section2.module.scss";

const Section2 = () => {


  return (
    <div className={styles["section2"]} id='section2'>
      <div className={styles["section2-container"]}>
        <p className={styles["section2-slice1"]}>
          <span>Deine Kunden recherchieren Online.</span>
          <span>Finden sie Dich?</span>
        </p>
        <p className={styles["section2-slice2"]}>
          <span>
            Fakt ist - Händler, die sich frühzeitig im digitalen Markt
            positionieren,
          </span>
          <span> sichern sich einen klaren Wettbewerbsvorteil.</span>
          <span>
            Der Markt der Innenausbaubranche ist in Bewegung. Beweg Dich mit!
          </span>
        </p>
        <List />
        <ButtonTermin clickHandler={undefined}/>
      </div>
    </div>
  );
};

export default Section2