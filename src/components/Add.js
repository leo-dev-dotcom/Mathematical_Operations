import React from 'react'
import Header from './Header'
export default function Add({ num1, num2 }) {
    return (
        <div className='card'>
            {/* <h5>Addition of 25,30</h5> */}
            <Header header={'Addition of 25,30'} />
            <p>Output: {num1 + num2}</p>
        </div>
    )
}
