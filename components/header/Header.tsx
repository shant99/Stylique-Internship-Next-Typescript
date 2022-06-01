import styles from "./header.module.scss";
import StyliqueLogo from "../../icons/StyliqueLogo";
import { useState } from "react";

const Header: React.FC = () => {
  const [headerBurger, setHeaderBurger] = useState(false);

  const headerBurgerHandler = (e: React.SyntheticEvent): void => {
    setHeaderBurger((prev:boolean) => !prev);
    console.log(document.body.classList.toggle('lock'))
    console.log(document.body.className)
  };
 
  const headerMenuActive = headerBurger
    ? (styles["header-menu-active"] )
    : styles[''];
 
  return (
    <div className={styles["header-container"]}>
      <div className={styles["header"]}>
        <StyliqueLogo className={styles["stylique-logo"]} />
        <div className={styles["header-burger"] + " " + headerMenuActive} onClick={headerBurgerHandler}>
          <span></span>
        </div>
        <div className={styles["header-menu"]+ " " + headerMenuActive }>
          <ul>
            <li>
              <a href="#">Vorteile</a>
            </li>
            <li>
              <a href="#">Unsere Partner</a>
            </li>
            <li>
              <a href="#">So gehts</a>
            </li>
            <li>
              <a href="#">Unser Versprechen</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
