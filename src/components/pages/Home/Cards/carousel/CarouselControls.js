import React from "react";

const CarouselControls = ({ prev, next }) => {
  return (
    <div>
      <button className="carusel-control leftt" onClick={prev}></button>
      <button className="carusel-control rightt" onClick={next}></button>
    </div>
  );
};

export default CarouselControls;
