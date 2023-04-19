import React from 'react';
import styles from "./Button.module.css"
export function Button(props) {
    const {label} = props
    return (
        <button className={styles.button}>
            {label}
        </button>
    )
  }