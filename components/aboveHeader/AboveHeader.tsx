import React from "react";
import styles from "./AboveHeader.module.scss";

const AboveHeader: React.FC = () => {
  return (
    <div className={styles['above-header-container']}>
      <div className={styles['above-header']}>
        Jetzt auch telefonisch bestellen:{" "}
        <span className={styles['above-header-info']}> Tel: +49 211 9367 5050</span> | Wie
        können wir dich unterstützen? Schreib uns eine{" "}
        <span className={styles["above-header-info"]}>E-Mail: team@stylique.de</span>
      </div>
    </div>
  );
};

export default AboveHeader;
