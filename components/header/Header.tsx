import styles from "./header.module.scss";
import StyliqueLogo from "../../icons/StyliqueLogo";
import { useState } from "react";
import { useSelector } from "react-redux";
import Head from "next/head";

const Header: React.FC = () => {
  const [headerBurger, setHeaderBurger] = useState<boolean>(false);
  const { section2, section3, section4, section5 } = useSelector(
    (state: any) => state.vendorsPageSlice
  );

  const headerBurgerHandler = (e: React.SyntheticEvent): void => {
    setHeaderBurger((prev: boolean) => !prev);
    document.body.classList.toggle("lock");
  };

  const headerMenuActive: string = headerBurger
    ? styles["header-menu-active"]
    : styles[""];

  const clickHandler1 = (): void => {
    window.scroll({
      behavior: "smooth",
      top: section2 + 100,
    });
    setHeaderBurger((prev: boolean) => !prev);
  };
  const clickHandler2 = (): void => {
    window.scroll({
      behavior: "smooth",
      top: section3,
    });
    setHeaderBurger((prev: boolean) => !prev);
  };
  const clickHandler3 = (): void => {
    window.scroll({
      behavior: "smooth",
      top: section4,
    });
    setHeaderBurger((prev: boolean) => !prev);
  };
  const clickHandler4 = (): void => {
    window.scroll({
      behavior: "smooth",
      top: section5 + 150,
    });
    setHeaderBurger((prev: boolean) => !prev);
  };

  return (
    <div className={styles["header-container"]}>
      <Head>
        <title>Stylique Internship</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className={styles["header"]}>
        <StyliqueLogo className={styles["stylique-logo"]} />
        <div
          className={styles["header-burger"] + " " + headerMenuActive}
          onClick={headerBurgerHandler}
        >
          <span></span>
        </div>
        <div className={styles["header-menu"] + " " + headerMenuActive}>
          <ul>
            <li>
              <button onClick={clickHandler1}>Vorteile</button>
            </li>
            <li>
              <button onClick={clickHandler2}>Unsere Partner</button>
            </li>
            <li>
              <button onClick={clickHandler3}>So gehts</button>
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
