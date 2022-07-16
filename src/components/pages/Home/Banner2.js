import React from "react";
import "./style/Banner2.scss";
import { FormattedMessage } from "react-intl";
import { Link } from "react-router-dom";

const Banner2 = () => {
  return (
    <div className="Banner2">
      <div className="Banner2-box1">
        <div className="box-names">
          <div className="name1">
            <p>Samalia H.</p>
          </div>
          <div className="red-arrow" />
          <div className="name2">
            <p>Samalia H.</p>
          </div>
          <div className="line" />
        </div>
        <div className="Banner2-box1-title">
          <h1>
            Real-time
            <br />
            & asynchronous
            <br />
            collaborati<font color="#FFFFFF">on</font>
          </h1>
          <div className="line-box" />
          <div className="dot1" />
          <div className="dot2" />
          <div className="dot3" />
          <div className="dot4" />
        </div>
        <div className="banner2-box1-text">
          <FormattedMessage
            id="text"
            defaultMessage="Whether your teams are collocated, distributed, or fully remote, 
                HostDiagram provides an engaging, intuitive, in-person 
                collaboration experience with multiple options for real-time or 
                asynchronous teamwork on an online whiteboard."
          />
          <br />
        </div>
        <div className="banner2-box1-link">
          <Link to="/" className="banner2-box1-link1">
            <FormattedMessage id="learn-more" defaultMessage="Learn more" />
          </Link>
          <div className="line1" />
          <div className="white-pen" />
        </div>
      </div>
      <div className="Banner2-box2">
        <div className="linesGroup" />
        <div className="banner2-box2-text">
          <h1 className="box2-title">
            <FormattedMessage id="title" defaultMessage="Infinite canvas" />
          </h1>
          <p className="box2-text">
            <FormattedMessage
              id="text"
              defaultMessage="HostDiagram’s infinitely zoomable canvas and web whiteboard enables you 
                                                        to work the way you want to. Unleash your creativity, plan projects from all 
                                                        angles, and create centralized hubs of information to keep everyone in the 
                                                        loop. See the big picture and the details."
            />
          </p>
          <div className="banner2-box2-link">
            <Link to="/" className="banner2-box2-link1">
              <FormattedMessage id="learn-more" defaultMessage="Learn more" />
            </Link>
            <div className="line2" />
            <div className="black-pen" />
          </div>
        </div>
      </div>
      <div className="Banner2-box3">
        <div className="banner2-box2-imgBox">
          <div className="banner2-box2-img1-1" />
          <div className="banner2-box2-img1-2" />
          <div className="banner2-box2-img1-3" />
          <div className="banner2-box2-darkblue-arrow" />
          <div className="banner2-box2-name">
            <FormattedMessage id="banner2-box2-name" defaultMessage="Malika" />
          </div>
        </div>
        <div className="banner2-box2-circlesBox">
          <div className="banner2-box2-circle1" />
          <div className="banner2-box2-circle2" />
        </div>
      </div>
    </div>
  );
};

export default Banner2;
