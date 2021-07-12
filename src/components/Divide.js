import React from 'react'
import Header from './Header'

export default function Divide({ num1, num2 }) {
    return (
        <div className='card'>
            {/* <h5>Division of 100,25</h5> */}
            <Header header={'Division of 100,25'} />
            <p>Output: {num1 / num2}</p>
        </div>
    )
}
