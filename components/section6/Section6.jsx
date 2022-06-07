import { useState } from "react";
import styles from "./section6.module.scss";
import { v4 } from "uuid";

const tabs = ["one", "two", "three", "four", "five", "six"];
const tabsContent = ["one-1-Content", "two-2-Content", "three-3-Content", "four-4-Content", "five-5-Content", "six-6-Content"];

function Section6() {
  const [tabIndex, setTabIndex] = useState(0);
  

  function viewContent(){
    const arr = JSON.parse(JSON.stringify(tabsContent))
    return arr.splice(tabIndex , 3)
  }

  const viewTabsContent = viewContent()

  function tabClickHandler(e, index) {
    setTabIndex(index);
  }

  function tabsNavButtonClickHandler_Up(e) {
    setTabIndex(prev => {
        if(prev === 0){
            return 0
        }
        return prev - 1
    })
  }

  function tabsNavButtonClickHandler_Down(e) {
    setTabIndex(prev => {
        if(prev === (tabs.length - 1)){
            return (tabs.length - 1)
        }
        return prev + 1
    })
  }


  return (
    <div className={styles["section6-container"]}>
      <div className={styles["section6"]}>
        <div className={styles["section6-tabs-wrapper"]}>
          <div className={styles["section6-tabs"]}>
            {tabs.map((item, index) => {
              return (
                <button
                  onClick={(e) => tabClickHandler(e, index)}
                  key={v4()}
                  className={
                    styles["section6-tab"] +
                    " " +
                    (tabIndex === index ? styles["section6-tab-active"] : "")
                  }
                >
                  {item}
                </button>
              );
            })}
          </div>
          <div className={styles["section6-tabs-nav-buttons"]}>
            <button
              onClick={(e) => tabsNavButtonClickHandler_Up(e)}
              className={styles["section6-tabs-nav-button"]}
            >
              Verev
            </button>
            <button
              onClick={(e) => tabsNavButtonClickHandler_Down(e)}
              className={styles["section6-tabs-nav-button"]}
            >
              Nerqev
            </button>
          </div>
        </div>
        <div className={styles["section6-tabs-content"]}>
            {
                viewTabsContent.map((item , index ) => {
                    return (
                        <p key={v4()} className={styles["section6-tab-content"]}>{item}</p>
                    )
                })
            }
        </div>
      </div>
    </div>
  );
}

export default Section6;
