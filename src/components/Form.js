import React from 'react'
import { useState } from 'react'
import Add from './Add'
import Divide from './Divide'
import Minus from './Minus'
import Multi from './Multi'
function Form() {
    const [num1, setNum1] = useState('')
    const [num2, setNum2] = useState('')

    let num1Handler = (e) => {
        setNum1(() => {
            return parseInt(e.target.value)
        })
    }
    let num2Handler = (e) => {
        setNum2(() => {
            return parseInt(e.target.value)
        })
    }
    return (
        <div className='mt-3'>
            <label>First Number: </label>
            <input className='' type="number" onChange={num1Handler} />
            <label htmlFor="">Second Number: </label>
            <input className='' type="number" onChange={num2Handler} />

            <Add num1={num1} num2={num2} />
            <Multi num1={num1} num2={num2} />
            <Divide num1={num1} num2={num2} />
            <Minus num1={num1} num2={num2} />

        </div>
    )
}

export default Form
