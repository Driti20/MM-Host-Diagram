import React from "react";
import { Link } from "react-router-dom";
import { ProductsData, ProductsData2 } from "../data";
import {BsArrowRight} from 'react-icons/bs'

const ProductMenu = () => {
  return (
    <div className="nav-megamenu product-megamenu">
      <div className="menu-links">
        {ProductsData.map((props) => {
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
      <div className="product-megamenu2">
        <div className="product-megamenu2-title">
        <h5 className="product-megamenu2-h6">HostDiagram</h5>
        </div>
        
        <div className="product-megamenu2-line"/>
        <div className="product-megamenu2-links">
        {ProductsData2.map((props) => {
          return(
            <Link to='/' className="product-megamenu2-link">
              <div className="product-megamenu2-icon" >
                {props.icon}
              </div>
              <p>{props.link}</p>
            </Link>
          );
        })}
        <Link to="/" className="product-megamenu2-seeAll">
          See all
          <BsArrowRight/>
        </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductMenu;
