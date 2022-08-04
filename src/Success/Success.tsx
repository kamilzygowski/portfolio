import React from 'react'
import './Success.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'

const Success = () => {
  return (
    <div className='Success'>
        <FontAwesomeIcon icon={faCircleCheck} className="icon"/>
    </div>
  )
}

export default Success