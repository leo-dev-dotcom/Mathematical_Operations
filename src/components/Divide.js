import React from 'react'
import Header from './Header'

export default function Divide(props) {
    return (
        <div className='card'>
            {/* <h5>Division of 100,25</h5> */}
            <Header header={`Division of ${props.num1},${props.num2}`} />
            <p>Output: {props.num1 / props.num2}</p>
        </div>
    )
}
