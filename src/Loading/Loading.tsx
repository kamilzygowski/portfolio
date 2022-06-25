import React from 'react'
import './Loading.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

const Loading = () => {
  return (
    <div className='Loading'>
        <FontAwesomeIcon icon={faSpinner} className="icon" />
    </div>
  )
}

export default Loading