import React from 'react'
import './AirItem.css'
const AirItem = ({airData, airType}) => {
  return (
    <li className='l'>
      <p className='p'>{airType}</p>
      <h2 className='h'>{airData}</h2>
    </li>
  )
}

export default AirItem