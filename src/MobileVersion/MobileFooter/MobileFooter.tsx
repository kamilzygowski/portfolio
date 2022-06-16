import React from 'react'
import './MobileFooter.scss'

const MobileFooter = () => {
  const date: Date = new Date()
  return (
    <footer className='MobileFooter'>
      <p className='date'>@{date.getFullYear()} </p>
      <p className='name'> Kamil Żygowski - SwedishSailor</p>
    </footer>
  )
}

export default MobileFooter