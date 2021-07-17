import React from 'react'
import Header from './Header'
export default function Multi({ num1, num2 }) {
    return (
        <div className='card'>
            {/* <h5>Multiplication of 5,6</h5> */}
            <Header header={`Multiplication of ${num1},${num2}`} />
            <p> Output: {num1 * num2}</p>
        </div >
    )
}
