import styles from "./header.module.scss";
import StyliqueLogo from "../../icons/StyliqueLogo";

const Header = () => {
  return (
    <div className={styles["header-container"]}>
      <div className={styles["header"]} >
        <StyliqueLogo className={styles["stylique-logo"]} />
        <ul>
            <li><a href="#">Vorteile</a></li>
            <li><a href="#">Unsere Partner</a></li>
            <li><a href="#">So gehts</a></li>
            <li><a href="#">Unser Versprechen</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
