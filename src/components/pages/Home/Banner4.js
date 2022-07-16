import React from "react";
import { FormattedMessage } from "react-intl";
import "./style/Banner4.scss";
import { MdArrowDropDown } from "react-icons/md";
import { Link } from "react-router-dom";

const Banner4 = () => {
  return (
    <div className="Banner4">
      <div className="Banner4-box1">
        <p className="Banner4-box1-preTitle">
          <FormattedMessage
            id="Banner4-box1-preTitle"
            defaultMessage="Task Creation"
          />
        </p>
        <h1 className="Banner4-box1-title">
          <FormattedMessage
            id="Banner4-box1-title"
            defaultMessage="Scale collaboration with confidence"
          />
        </h1>
        <div className="Banner4-box1-line" />
        <p className="Banner4-box1-description">
          <FormattedMessage
            id="Banner4-box1-description"
            defaultMessage="With enterprise-ready security and advanced administration controls, deploy 
                            HostDiagram company-wide with ease. A dedicated Customer Success and 
                            Account Manager will partner with you every step of the way to ensure your 
                            team’s success and train you on best practices we’ve picked up from other 
                            enterprise customers."
          />
        </p>
        <div className="Banner4-box1-buton">
          <Link to="/" className="Banner4-box1-link">
            <FormattedMessage
              id="learn-more"
              defaultMessage="Learn more"
            />
          </Link>
          <div className="Banner4-box1-buton-line" />
          <div className="Banner4-box1-buton-pen" />
        </div>
      </div>
      <div className="Banner4-box2">
        <div className="Banner4-box2-box">
          <div className="Banner4-box2-box-1">
            <div className="Banner4-box2-box-1-1" />
            <div className="Banner4-box2-box-1-2">
              <div className="Banner4-box2-box-1-2-blueHart" />
              <div className="Banner4-box2-box-1-2-line1" />
              <div className="Banner4-box2-box-1-2-line2" />
            </div>
            <div className="Banner4-box2-box-1-3">
              <div className="Banner4-box2-box-1-3-blueStar" />
              <div className="Banner4-box2-box-1-3-line1" />
              <div className="Banner4-box2-box-1-3-line2" />
            </div>
            <div className="Banner4-box2-box-1-Text">
              <FormattedMessage
                id="Banner4-box2-box-1-Text"
                defaultMessage="My first project"
              />
            </div>
            <div className="Banner4-box2-box-1-4">
              <div className="Banner4-box2-box-1-4-line" />
              <MdArrowDropDown className="Banner4-box2-box-1-4-arrow" />
            </div>
          </div>
          <div className="Banner4-box2-box-2">
            <div className="Banner4-box2-box-2-1">
              <div className="Banner4-box2-box-2-1-text">
                <FormattedMessage
                  id="Banner4-box2-box-2-1-text"
                  defaultMessage="Choose the file you want to open"
                />
              </div>
              <MdArrowDropDown className="Banner4-box2-box-2-1-arrow" />
            </div>
            <div className="Banner4-box2-box-2-image" />
          </div>
          <div className="Banner4-box2-box-3">
            <div className="Banner4-box2-box-3-1">
              <div className="Banner4-box2-box-3-1-blueCloud" />
              <div className="Banner4-box2-box-3-1-text">
                <FormattedMessage
                  id="Banner4-box2-box-3-1-text"
                  defaultMessage="HostDiagram"
                />
              </div>
            </div>
            <div className="Banner4-box2-box-3-2">
              <div className="Banner4-box2-box-3-2-blueCamera" />
              <div className="Banner4-box2-box-3-2-blueCircle" />
              <div className="Banner4-box2-box-3-2-pinkCircle" />
            </div>
          </div>
          <div className="Banner4-box2-box-4">
            <div className="Banner4-box2-box-4-1">
              <div className="Banner4-box2-box-4-1-1">
                <div className="Banner4-box2-box-4-1-image1" />
              </div>
              <div className="Banner4-box2-box-4-1-2">
                <div className="Banner4-box2-box-4-1-image2" />
              </div>
              <div className="Banner4-box2-box-4-1-3">
                <div className="Banner4-box2-box-4-1-image3" />
              </div>
              <div className="Banner4-box2-box-4-1-4">
                <div className="Banner4-box2-box-4-1-image4" />
              </div>
            </div>
            <div className="Banner4-box2-box-4-2">
              <FormattedMessage id="Banner4-box2-box-4-2-text" defaultMessage='+ Create'/>
            </div>
          </div>
        </div>
        <div className="Banner4-box2-box2" />
      </div>
    </div>
  );
};

export default Banner4;
