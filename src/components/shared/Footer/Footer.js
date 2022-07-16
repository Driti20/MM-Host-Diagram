import React from 'react'
import Collaborate from './Collaborate/Collaborate'
import './Footer.scss'
import FooterLinks from './FooterLinks/FooterLinks'

const Footer = () => {
  return (
    <div className='Footer'>
        <Collaborate/>
        <FooterLinks/>
    </div>
  )
}

export default Footer