
 

import React from 'react';
import styles from "./Calculator.module.css"
import { Screen } from './components/Screen/Screen';
import { ButtonsGrid } from './components/ButtonsGrid/ButtonsGrid';
export function Calculator() {
    return (
      <div className={styles.wrapperCalculator}>
        <div className={styles.calculator}>
            <Screen/>
            <ButtonsGrid/>            
        </div>
      </div>
    )
  }