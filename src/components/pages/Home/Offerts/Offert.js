import React from "react";
import "../style/Offerts.scss";
import { offertData } from "./data";
import { ReactComponent as Member } from "../../../../assets/shared/offerts/member.svg";
import { Link } from "react-router-dom";
import './style/react-tabs.scss'

const Offert = () => {
  return (
    <div className="offerts-data">
        {offertData.map((props) => {
          return (
            <div className={`offert ${props.cls}`}>
              <div className="offert-plan-member">
                <p className="offert-plan">{props.plan}</p>
                <div className="offert-member">
                  <Member />
                  <p>{props.member}</p>
                </div>
              </div>
              <h2 className="offert-price">{props.price}</h2>
              <p className="offert-description1">{props.description1}</p>
              <Link key={props.to} to={props.to}>
                <div className="offert-link">{props.link}</div>
              </Link>
              <div className="offert-description2">{props.description2}</div>
              <h4 className="offert-features">{props.features}</h4>
              {props.options.map((o) => {
                return (
                  <div className={`offert-options ${props.cls}`}>
                    {o.icon}
                    <p className="offert-option">{o.option}</p>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
  )
}

export default Offert