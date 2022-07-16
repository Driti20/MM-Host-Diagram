import React from "react";
import { FormattedMessage } from "react-intl";
import { Link } from "react-router-dom";
import "./style/Banner5.scss";

const Banner5 = () => {
  return (
    <div className="Banner5">
      <div className="Banner5-box1">
        <div className="Banner5-box1-box1" />
        <div className="Banner5-box1-box2">
          <div className="Banner5-box1-box2-box1" />
          <div className="Banner5-box1-box2-downArrow1" />
          <div className="Banner5-box1-box2-box2" />
          <div className="Banner5-box1-box2-leftArrow1" />
          <div className="Banner5-box1-box2-box3" />
          <div className="Banner5-box1-box2-rightArrow1" />
          <div className="Banner5-box1-box2-box4" />
          <div className="Banner5-box1-box2-downArrow2" />
          <div className="Banner5-box1-box2-box5" />
          <div className="Banner5-box1-box2-downArrow3" />
          <div className="Banner5-box1-box2-box6" />
          <div className="Banner5-box1-box2-downArrow4" />
          <div className="Banner5-box1-box2-rightArrow2" />
          <div className="Banner5-box1-box2-box7" />
          <div className="Banner5-box1-box2-box8" />
          <div className="Banner5-box1-box2-leftArrow2" />
          <div className="Banner5-box1-box2-box9" />
          <div className="Banner5-box1-box2-rightArrow3" />
          <div className="Banner5-box1-box2-box10" />
          <div className="Banner5-box1-box2-pinkMessageIcon" />
          <div className="Banner5-box1-box2-blueMessageIcon" />
          <div className="Banner5-box1-box2-pinkArrow" />
          <div className="Banner5-box1-box2-name1">
            <FormattedMessage id="gresa" defaultMessage="Gresa" />{" "}
          </div>
          <div className="Banner5-box1-box2-purpleArrow" />
          <div className="Banner5-box1-box2-name2">
            <FormattedMessage id="malika" defaultMessage="Malika" />{" "}
          </div>
          <div className="Banner5-box2-box2-box11">
            <div className="Banner5-box2-box2-circle1" />
            <div className="Banner5-box2-box2-box11-blueHart" />
            <div className="Banner5-box2-box2-box11-line1" />
            <div className="Banner5-box2-box2-box11-line2" />
          </div>
        </div>
      </div>
      <div className="Banner5-box2">
        <p className="Banner5-box2-preTitle">
          <FormattedMessage
            id="Banner4-box1-preTitle"
            defaultMessage="Create"
          />
        </p>
        <h1 className="Banner5-box2-title">
          <FormattedMessage
            id="Banner4-box1-title"
            defaultMessage="Collaborative Mapping
            and Diagramming"
          />
        </h1>
        <div className="Banner5-box2-line" />
        <p className="Banner5-box2-description">
          <FormattedMessage
            id="Banner5-box2-description"
            defaultMessage="Increase cross-functional alignment with collaborative customer journey mapping.
            Break down silos and enable distributed teams to build, iterate, and adopt strategies 
            faster than before. Create robust maps and diagrams that elevate knowledge and 
            align everyone on the vision. Ideal for diagramming complex systems, processes, and 
            customer journeys."
          />
        </p>
        <div className="Banner5-box2-buton">
          <Link to="/" className="Banner5-box2-link">
            <FormattedMessage id="learn-more" defaultMessage="Learn more" />
          </Link>
          <div className="Banner5-box2-buton-line" />
          <div className="Banner5-box2-buton-pen" />
        </div>
      </div>
    </div>
  );
};

export default Banner5;
