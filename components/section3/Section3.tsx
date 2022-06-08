import styles from "./section3.module.scss";
import { v4  } from 'uuid';
import Jung from '../../icons/Jung'
import Mosaico from '../../icons/Mosaico'
import ObjectCarpet from '../../icons/ObjectCarpet'
import { useDispatch } from "react-redux";
import {  useEffect, useRef } from "react";
import { setSection3 } from "../../redux/slice/vendorsPageSlice";

const companiesIcons: any = [
        <Jung key={v4()} className={styles["Jung-icon"]}/> ,
        <Mosaico key={v4()} className={styles["Mosaico-icon"]}/>,
        <ObjectCarpet key={v4()} className={styles["ObjectCarpet-icon"]}/> ,
        <Jung key={v4()} className={styles["Jung-icon"]}/> ,
        <Mosaico key={v4()} className={styles["Mosaico-icon"]}/>
]

const Section3: React.FC = () => {
  const dispatch = useDispatch()
  let ref: any = useRef<HTMLDivElement>();
  
  useEffect(()=> {
    let y: number | null = ref.current ? ( ref.current.offsetTop ): null
    dispatch(setSection3(y))
  } ,  [dispatch ,ref])

  return (
    <div className={styles["section3"]} >
      <div className={styles["section3-companies"]} ref={ref}>
        <h2 className={styles["section3-companies-header"]}>
          Diese und andere Partner haben sich bereits positioniert:
        </h2>
        <div className={styles["section3-companies-list"]}>
            {
                companiesIcons.map((item: any) => {
                    return <div key={v4()} className={styles["section3-companies-list-companie"]}>{item}</div>
                })
            }
        </div>
      </div>
    </div>
  );
}

export default Section3;


