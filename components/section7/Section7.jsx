import styles from "./section7.module.scss";

function Section7() {
  return (
    <div className={styles["section7-container"]}>
      <div className={styles["section7"]}>
        <h2 className={styles["section7-header1"]}>Unser Versprechen</h2>
        <h2 className={styles["section7-header2"]}>
          Qualität und Design. Hier bist mit du mit deiner Marke gut aufgehoben.
        </h2>
        <button className={styles["section7-button"]}>Werde Teil der Community</button>
      </div>
    </div>
  );
}

export default Section7;
