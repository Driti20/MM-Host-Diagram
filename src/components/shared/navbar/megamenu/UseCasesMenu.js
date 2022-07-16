import React from "react";
import { Link } from "react-router-dom";
import { useCasesData } from "../data";

const UseCasesMenu = () => {
  return (
    <div className="nav-megamenu useCases-megamenu">
      <div className="menu-links">
        {useCasesData  .map((props) => {
          return (
            <Link to={props.to} className="megamenu-link">
              <div className="icon-container" style={{background: (`${props.color}`)}}>
                <div className="circle1" style={{ content: `url(${props.circle1})` }} />
                <div className="circle2" style={{ content: `url(${props.circle2})` }}/>
                <div className="icon" style={{ content: `url(${props.icon})` }}>
                </div>
              </div>
              <div className={`block ${props.cls}`}>
                <h6>{props.link}</h6>
              </div>
            </Link>
          );
        })}
      </div>
      <div className="useCases-megamenu2">
        <div className="useCases-megamenu2-img1"/>
        <div className="useCases-megamenu2-circle1"/>
        <div className="useCases-megamenu2-circle2"/>
        <div className="useCases-megamenu2-circle3"/>
        <div className="useCases-megamenu2-circle4"/>
        <div className="useCases-megamenu2-circle5">
           <div className="useCases-megamenu2-img2"/>
        </div>
        <div className="useCases-megamenu2-description">
          <p>Free forever, no credit card required</p>
        </div>
        <Link to="/" className="useCases-megamenu2-link">
          Start Diagraming
        </Link>

      </div>
    </div>
  );
};

export default UseCasesMenu;







