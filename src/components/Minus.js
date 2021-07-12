import React from 'react'
import Header from './Header'
export default function Minus({ num1, num2 }) {
    return (
        <div className='card' >
            {/* <h5>Subtraction of 36,25</h5> */}
            <Header header={'Subtraction of 36,25'} />
            <p>Output: {num1 - num2}</p>
        </div>
    )
}
