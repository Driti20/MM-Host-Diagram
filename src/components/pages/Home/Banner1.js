import React from "react";
import "./style/Banner1.scss";
import { IoIosMail } from "react-icons/io";
import { FormattedMessage } from "react-intl";

const Banner1 = () => {
  return (
    <div className="banner1">
      <div className="banner1-texts">
        <h1 className="banner1-title">
          <FormattedMessage id="Diagram-your-people" defaultMessage='Diagram your
          people, '/>
          <font color="#4262FF"><FormattedMessage id='Processes' defaultMessage='processes'/> </font>
          <FormattedMessage id='and-systems' defaultMessage='and systems'/>
        </h1>
        <p>
        <FormattedMessage
              id="banner1-text"
              defaultMessage="Take advantage of powerful features that will help
              your team communicate complex ideas while
              collaborating in real time."
            />
        </p>
        <div className="email">
          <span>
            <IoIosMail />
          </span>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
          />
          <button className="emailButton">
            <FormattedMessage
              id="Start-Workspace"
              defaultMessage="Start a Workspace"
            />
          </button>
        </div>
        <div className="offert">
          <FormattedMessage
            id="Start"
            defaultMessage="Start for free – upgrade anytime"
          />
        </div>
      </div>
      <div className="banner1-box2">
        <div className="diagram">
          <div className="box-cloud1">
            <div className="cloud1" />
          </div>
          <div className="arrow1" />
          <div className="arrow2" />
          <div className="arrow3" />
          <div className="box1" />
          <div className="box2" />
          <div className="box3" />
          <div className="arrow4" />
          <div className="arrow5" />
          <div className="arrow6" />
          <div className="box-cloud2">
            <div className="cloud2" />
          </div>
          <div className="box4" />
        </div>
        <div className="banner1-name1">
          <div className="name1">
            <FormattedMessage id="gresa" defaultMessage="Gresa" />
          </div>
          <div className="blueArrow" />
        </div>
        <div className="banner1-box3">
          <div className="banner1-name2">
            <div className="name2">
              <FormattedMessage id="Samalia-H" defaultMessage="Samalia H." />
            </div>
            <div className="box3-arrow" />
          </div>
          <div className="box3-line" />
          <div className="box3-pen" />
          <div className="box-message" />
        </div>
        <div className="video-box">
          <div className="icon">
            <div className="camera" />
            <div className="circle1" />
            <div className="circle2" />
          </div>
          <div className="video-box-text">
            <FormattedMessage id="Video-tutoring" defaultMessage="Video tutoring" /> 
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner1;
