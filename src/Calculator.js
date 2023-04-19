
 

import React from 'react';
import styles from "./Calculator.module.css"
import { Screen } from './components/Screen/Screen';
import { ButtonsGrid } from './components/ButtonsGrid/ButtonsGrid';
export function Calculator() {
    const [currentOperation, setCurrentOperation] = React.useState ('')
    const [currentResult, setCurrentResult] = React.useState ('')
    const propsToSend = {currentOperation: currentOperation, 
                        setCurrentOperation: setCurrentOperation,
                        currentResult: currentResult, 
                        setCurrentResult: setCurrentResult}
    return (
      <div className={styles.wrapperCalculator}>
        <div className={styles.calculator}>
            <Screen {...propsToSend}/>
            <ButtonsGrid {...propsToSend}/>            
        </div>
      </div>
    )
  }