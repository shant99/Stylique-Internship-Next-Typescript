import styles from "./buttonTermin.module.scss";

function ButtonTermin({ className = "", clickHandler }) {
  return (
    <button
      onClick={clickHandler}
      className={styles["button"] + " " + styles[className]}
    >
      Termin vereinbaren
    </button>
  );
}
export default ButtonTermin;
