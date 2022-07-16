import React from "react";

const CarouselControls2 = ({ prev, next }) => {
  return (
    <div>
      <button className="carusel-control2 leftt2" onClick={prev}></button>
      <button className="carusel-control2 rightt2" onClick={next}></button>
    </div>
  );
};

export default CarouselControls2;
