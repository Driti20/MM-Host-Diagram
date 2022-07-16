import React from 'react'
import { FormattedMessage } from 'react-intl'
import '../style/Client.scss'
import {ClientData} from './data'
import Carousel2 from "./ClientCarousel/Carousel2";

const Client = () => {
  return (
    <div className='Client'>
      <div className='Client-title'>
        <h1>
          <FormattedMessage id='client-title' defaultMessage='What others think about us?'/>
        </h1>
      </div>
      <div className='Client-feedbacks'>
      <Carousel2 ClientData={ClientData} />
      </div>
    </div>
  )
}

export default Client