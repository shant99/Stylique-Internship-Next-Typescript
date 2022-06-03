import styles from "./section3.module.scss";
import { v4  } from 'uuid';
import Jung from '../../icons/Jung'
import Mosaico from '../../icons/Mosaico'
import ObjectCarpet from '../../icons/ObjectCarpet'

const companiesIcons = [
        <Jung key={v4()} className={styles["Jung-icon"]}/> ,
        <Mosaico key={v4()} className={styles["Mosaico-icon"]}/>,
        <ObjectCarpet key={v4()} className={styles["ObjectCarpet-icon"]}/> ,
        <Jung key={v4()} className={styles["Jung-icon"]}/> ,
        <Mosaico key={v4()} className={styles["Mosaico-icon"]}/>
]

function Section3() {
  return (
    <div className={styles["section3"]}>
      <div className={styles["section3-companies"]}>
        <h1 className={styles["section3-companies-header"]}>
          Diese und andere Partner haben sich bereits positioniert:
        </h1>
        <div className={styles["section3-companies-list"]}>
            {
                companiesIcons.map(item => {
                    return <div key={v4()} className={styles["section3-companies-list-companie"]}>{item}</div>
                })
            }
        </div>
      </div>
    </div>
  );
}

export default Section3;
