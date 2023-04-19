
 

import React from 'react';
import styles from "./Screen.module.css"
export function Screen(props) {
  const {currentOperation, 
         currentResult} = props
    return (
      <div className={styles.wrapperScreen}>
        <h2 className={styles.currentOperation}>
            {currentOperation}
        </h2>
        <h1 className={styles.currentResult}>
            {currentResult}
        </h1>
            
      </div>
    )
  }