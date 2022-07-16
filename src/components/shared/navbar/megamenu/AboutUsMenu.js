import React from "react";
import { Link } from "react-router-dom";
import { aboutUsData } from "../data";

const AboutUsMenu = () => {
    
  
  return (
    <div className="nav-megamenu aboutUs-megamenu">
      <div className="menu-links">
        {aboutUsData.map((props) => {
          
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
    </div>
  );
};

export default AboutUsMenu;
