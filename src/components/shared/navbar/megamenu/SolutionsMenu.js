import React from "react";
import { Link } from "react-router-dom";
import { solutionsData } from "../data";
import {BsFillCalendar2Fill,
  BsArrowRight} from 'react-icons/bs'


const SolutionsMenu = () => {
  return (
    <div className="nav-megamenu solution-megamenu">
      <div className="menu-links">
        {solutionsData.map((props) => {
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
      <div className="solution-megamenu2">
      <div className="solution-megamenu2-image"/> 
        <div className="solution-image-calendar">
          <BsFillCalendar2Fill/>
          <p >13 Sep 2021</p>
        </div>
        <div className="solution-image-paragraph">
        <p >Creative Ways to Visualize Your To-Do List</p>
        </div>
        <Link to="/" className="solution-image-link">
          Read more
          <BsArrowRight/>
        </Link>
        

      </div>
    </div>
  );
};

export default SolutionsMenu;







