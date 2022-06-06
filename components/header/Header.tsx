import styles from "./header.module.scss";
import StyliqueLogo from "../../icons/StyliqueLogo";
import { useState } from "react";
import { useSelector } from "react-redux";



const Header: React.FC = () => {
  const [headerBurger, setHeaderBurger] = useState(false);
  const {section2 , section3 , section4 , section5} = useSelector((state: any )=> state.vendorsPageSlice)

  const headerBurgerHandler = (e: React.SyntheticEvent): void => {
    setHeaderBurger((prev:boolean) => !prev);
    document.body.classList.toggle('lock')
    
  };
 
  const headerMenuActive = headerBurger
    ? (styles["header-menu-active"] )
    : styles[''];

    const clickHandler1 = () => {
      window.scroll({
        behavior: "smooth",
        top: section2,
      });
      setHeaderBurger((prev:boolean) => !prev);
    }
    const clickHandler2 = () => {
      window.scroll({
        behavior: "smooth",
        top: section3,
      });
      setHeaderBurger((prev:boolean) => !prev);
    }
    const clickHandler3 = () => {
      window.scroll({
        behavior: "smooth",
        top: section4,
      });
      setHeaderBurger((prev:boolean) => !prev);
    }
    const clickHandler4 = () => {
      window.scroll({
        behavior: "smooth",
        top: section5,
      });
      setHeaderBurger((prev:boolean) => !prev);
    }
 
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
              <button onClick={clickHandler1}>Vorteile</button>
            </li>
            <li>
              <button  onClick={clickHandler2}>Unsere Partner</button>
            </li>
            <li>
              <button  onClick={clickHandler3}>So gehts</button>
            </li>
            <li>
              <button onClick={clickHandler4}>Unser Versprechen</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
