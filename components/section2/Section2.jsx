import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import ButtonTermin from "../buttonTermin/ButtonTermin";
import List from "./list/List";
import styles from "./section2.module.scss";
import { setSection2 } from "../../redux/slice/vendorsPageSlice";

const Section2 = () => {
  let dispatch = useDispatch()
  let ref = useRef();
  
  useEffect(()=> {
    let y = ref.current ? ref.current.offsetTop: null
    dispatch(setSection2(y))
  } , [dispatch ,ref])

  return (
    <div className={styles["section2"]} ref={ref} >
      <div className={styles["section2-container"]}>
        <div className={styles["section2-slice1"]}>
          <h4>Deine Kunden recherchieren Online . Finden sie Dich? </h4>    
        </div>
        <div className={styles["section2-slice2"]}>
          <p>
            Fakt ist - Händler, die sich frühzeitig im digitalen Markt
            positionieren, sichern sich einen klaren Wettbewerbsvorteil.
            Der Markt der Innenausbaubranche ist in Bewegung. Beweg Dich mit!
          </p>
        </div>
        <List />
        <ButtonTermin clickHandler={undefined}/>
      </div>
    </div>
  );
};

export default Section2