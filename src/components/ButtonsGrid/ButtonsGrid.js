
 

import React from 'react';
import styles from "./ButtonsGrid.module.css"
import { Button } from '../Button/Button';
export const RESET_TYPE = 'reset'
export const NUMBER_TYPE = 'number'
export const OPERATION_TYPE = 'operation'
export const RESULT_TYPE = 'result'
export const DECIMAL_TYPE = 'decimal'
export function ButtonsGrid(props) {

    return (
        <div className={styles.buttonsGrid}>
            <Button label={'C'} typeLabel={RESET_TYPE} {...props}/>
            <div className={styles.emptyDiv}>

            </div>
            <Button label={'/'} typeLabel={OPERATION_TYPE} {...props}/>
            <Button label={'7'} typeLabel={NUMBER_TYPE} {...props}/>
            <Button label={'8'} typeLabel={NUMBER_TYPE} {...props}/>
            <Button label={'9'} typeLabel={NUMBER_TYPE} {...props}/>
            <Button label={'*'} typeLabel={OPERATION_TYPE} {...props}/>
            <Button label={'4'} typeLabel={NUMBER_TYPE} {...props}/>
            <Button label={'5'} typeLabel={NUMBER_TYPE} {...props}/>
            <Button label={'6'} typeLabel={NUMBER_TYPE} {...props}/>
            <Button label={'-'} typeLabel={OPERATION_TYPE} {...props}/>
            <Button label={'1'} typeLabel={NUMBER_TYPE} {...props}/>
            <Button label={'2'} typeLabel={NUMBER_TYPE} {...props}/>
            <Button label={'3'} typeLabel={NUMBER_TYPE} {...props}/>
            <Button label={'+'} typeLabel={OPERATION_TYPE} {...props}/>
            <div className={styles.zeroButton}>
                <Button label={'0'} typeLabel={NUMBER_TYPE} {...props}/>
            </div>
            <Button label={'.'} typeLabel={DECIMAL_TYPE} {...props}/>
            <Button label={'='} typeLabel={RESULT_TYPE} {...props}/>
        </div>
    )
  }