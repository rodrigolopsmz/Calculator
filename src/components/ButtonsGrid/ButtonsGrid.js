
 

import React from 'react';
import styles from "./ButtonsGrid.module.css"
import { Button } from '../Button/Button';
export function ButtonsGrid() {
    return (
        <div className={styles.buttonsGrid}>
            <Button label={'C'}/>
            <div className={styles.emptyDiv}>

            </div>
            <Button label={'/'}/>
            <Button label={'7'}/>
            <Button label={'8'}/>
            <Button label={'9'}/>
            <Button label={'X'}/>
            <Button label={'4'}/>
            <Button label={'5'}/>
            <Button label={'6'}/>
            <Button label={'-'}/>
            <Button label={'1'}/>
            <Button label={'2'}/>
            <Button label={'3'}/>
            <Button label={'+'}/>
            <div className={styles.zeroButton}>
                <Button label={'0'}/>
            </div>
            <Button label={'.'}/>
            <Button label={'='}/>
        </div>
    )
  }