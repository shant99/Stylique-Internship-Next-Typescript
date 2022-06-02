import styles from './buttonTermin.module.scss';

function ButtonTermin({className = '' , clickHandler}){
    return (
        <button onClick={e => clickHandler(e)} className={styles["button"] + ' ' + styles[className]}>
        Termin vereinbaren
             </button>
    )
}
export default ButtonTermin