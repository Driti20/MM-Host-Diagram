import React from "react";
import { FormattedMessage } from "react-intl";
import { Link } from "react-router-dom";
import "../style/Cards.scss";
import { cardData } from "./Data";
import Carousel from "./carousel/Carousel";



const Cards = () => {
  return (
    <div className="cards-banner">
      <div className="card-entry">
        <div className="card-box">
          <div className="card-line" />
          <div className="arrow" />
          <div className="card-name">
            <FormattedMessage id="name" defaultMessage="Malika" />
          </div>
          <h1 className="card-title">
            <FormattedMessage id="title" defaultMessage="Why HostDiagram" />
          </h1>
        </div>
        <p className="card-desxription">
          <FormattedMessage
            id="description"
            defaultMessage="Creately comes pre-packed with core support for 50+ diagram types, 1000’s of professionally 
designed shape libraries and templates. Communicate and Collaborate Visually."
          />
        </p>
      </div>
      <div className="cards">
        <Carousel cardData={cardData} />
      </div>
    </div>
  );
};

export default Cards;
