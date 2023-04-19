import React from 'react';
import styles from "./Button.module.css"
import {RESET_TYPE, NUMBER_TYPE, OPERATION_TYPE,RESULT_TYPE, DECIMAL_TYPE} from '../ButtonsGrid/ButtonsGrid'

const currentNumberTyped = (stringOperation) => {
    let currentNumber = ''
    const stringCopy = [...stringOperation]
    stringCopy.forEach(character => {
        if (/^\d+$/.test(character) || character==='.') {currentNumber = currentNumber + character}
        else currentNumber = ''
    });
    return currentNumber;
}
const parseArray = (array)=>{
    if(array.length === 1) return Number(array[0])
    const indexPlus = array.indexOf("+");
    const indexMinus = array.indexOf("-");
    if (indexPlus !== -1)
    {
        const FirstTerm = parseArray(array.slice(0,indexPlus))
        const SecondTerm = parseArray(array.slice(indexPlus+1))
        return FirstTerm + SecondTerm
    }
    else if (indexMinus !== -1)
    {
        const FirstTerm = parseArray(array.slice(0,indexMinus))
        const SecondTerm = parseArray(array.slice(indexMinus+1))
        return FirstTerm - SecondTerm
    }
    else if (array[1] === '*') return (parseArray([array[0]]) * parseArray(array.slice(2)))
    else if (array[1] === '/') return (parseArray([array[0]]) / parseArray(array.slice(2)))
   

}
const convertStringOperationToValue = (stringValue)=>{
    let currentNumber = ''
    const arrayOfOperations = []
    const stringCopy = [...stringValue]
    stringCopy.forEach((character,index) => {
        if (/^\d+$/.test(character) || character==='.') 
        {
            currentNumber = currentNumber + character
            if (index === (stringCopy.length - 1))
            {
                arrayOfOperations.push(currentNumber)
            }
        }
        else {
            arrayOfOperations.push(currentNumber)
            arrayOfOperations.push(character)
            currentNumber = ''
        }
    });
    
    
    return parseArray(arrayOfOperations);

}
const obtainValue = (stringOperation) => {
    if (/^\d+$/.test(stringOperation.slice(-1)) ){ 

        var value = convertStringOperationToValue(stringOperation)
        if (value !== Infinity && !isNaN(value)) return value
        else return 'Math Error'
    }
   
}
export function Button(props) {
    const { label,
            typeLabel,
            currentOperation, 
            setCurrentOperation,
            currentResult, 
            setCurrentResult} = props
    const handleClick = {}

    handleClick[NUMBER_TYPE] = (event) =>{
        event.preventDefault()
        setCurrentOperation(currentOperation + label)
    }
    handleClick[RESET_TYPE] = (event) =>{
        event.preventDefault()
        setCurrentOperation('')
        setCurrentResult('0')
    }
    handleClick[OPERATION_TYPE] = (event) =>{
        event.preventDefault()
        const lastCharacter = currentOperation.slice(-1)
        if (lastCharacter === '/' || lastCharacter === '*'|| lastCharacter === '+' || lastCharacter === '-')
        {
            let str = currentOperation;
            setCurrentOperation(str.slice(0, -1) + label)
        }
        else if (currentOperation) setCurrentOperation(currentOperation + label)
        
    }
    handleClick[DECIMAL_TYPE] = (event) =>{
        event.preventDefault()
        const lastNumber = currentNumberTyped(currentOperation)
        if (!!lastNumber && !lastNumber.includes(".")) setCurrentOperation(currentOperation + label)
    }
    handleClick[RESULT_TYPE] = (event) =>{
        event.preventDefault()
        const value = obtainValue(currentOperation)
        setCurrentResult(value)
        setCurrentOperation('')
        
    }
    return (
        <button className={styles.button} onClick={handleClick[typeLabel]}>
            {label}
        </button>
    )
  }