import React from 'react'
import { ClientData } from '../data';

export default function CarouselIndicators2({item, currentIndex, switchIndex}) {
    return (
        <div className="carousel-indicators">
            {ClientData.map((_, index) => (
                <button className={`carousel-indicator-item${currentIndex == index ? ' active ' : ''}`}
                onClick={() => switchIndex(index)}></button>

            ))}
        </div>
      );
}