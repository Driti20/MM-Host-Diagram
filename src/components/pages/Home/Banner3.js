import React from 'react'
import { FormattedMessage } from 'react-intl'
import './style/Banner3.scss'

const Banner3 = () => {
  return (
    <div className='Banner3'>
        <div className='Banner3-box1'>
            <div className='Banner3-box1-img1'/>
            <div className='Banner3-box1-arrow1'/>
            <div className='Banner3-box1-messageIcon'/>
            <div className='Banner3-box1-name1'>
                <FormattedMessage id='Banner3-box1-name1' defaultMessage='Samalia H.'/>
            </div>
            <div className='Banner3-box1-infoBox'>
                <div className='Banner3-box1-icon'>
                    <div className='Banner3-box1-lineArrow'/>
                    <div className='Banner3-box1-blueArrow'/>
                    <div className='Banner3-box1-pinkArrow'/>
                    <div className='Banner3-box1-blackCircle'/>
                    <div className='Banner3-box1-whiteCircle'/>
                    
                </div>
                <div className='Banner3-box1-info'>
                        <FormattedMessage id='Banner3-box1-info' defaultMessage='Sharing the work
with others'/>
                    </div>
            </div>
        </div>
        <div className='Banner3-box2'>
            <h1 className='Banner3-box2-title'>
            <FormattedMessage id='Banner3-box2-title' defaultMessage='Where telecom teams get work done'/>
            </h1>
            <p className='Banner3-box2-description'>
            <FormattedMessage id='Banner3-box2-description' defaultMessage='The online collaborative whiteboard platform to
bring teams together, anytime, anywhere.'/>
            </p>
            <div className='Banner3-box2-button'>
                Start Diagramming
            </div>
            <p className='Banner3-box2-text'>
            <FormattedMessage id='Banner3-box2-text' defaultMessage='Free forever — no credit card required'/>
            </p>
        </div>
        <div className='Banner3-box3'>
            <div className='Banner3-box3-line'/>
            <div className='Banner3-box3-box'>
                <p>Finalize Diagrams<br/>&<br/>Keep up</p>
                <div className='Banner3-box3-arrow'/>
                <div className='Banner3-box3-name'>
                    Malika
                </div>
            </div>
        </div>
    </div>
  )
}

export default Banner3