import React from "react";
import { Link } from "react-router-dom";
import { FooterData, FooterSocialMediaData } from "./FooterData";
import "./FooterLinks.scss";
import { FormattedMessage } from "react-intl";
import { IoIosMail } from "react-icons/io";
import SelectLanguage from "../../SelectLanguage/SelectLanguage";

const FooterLinks = (props) => {
  return (
    <div className="FooterLinks">
      <div className="FooterLinks-links">
        {FooterData.map((props) => {
          return (
            <div className="FooterLinks-links-box">
              <div className="FooterLinks-links-category">
                <h4>{props.category}</h4>
              </div>
              {props.links.map((l) => {
                return (
                  <div className="FooterLinks-link">
                    <Link to={l.to}>{l.link}</Link>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
      <div className="FooterLinks-subscribe">
        <div className="FooterLinks-subscribe-text">
          <h4>
            <FormattedMessage
              id="subcribe"
              defaultMessage="Subscribe to our Newsletter! "
            />
          </h4>
          <p>
            <FormattedMessage
              id="subcribe"
              defaultMessage="Join over 20 million users, start for free — upgrade anytime."
            />
          </p>
        </div>
        <div className="FooterLinks-email-logo">
          <div className="FooterLinks-email">
            <span>
              <IoIosMail />
            </span>
            <input
              type="email"
              id="Footer-email"
              name="email"
              placeholder="Enter your email"
            />
            <button className="FooterLinks-emailButton">
              <FormattedMessage id="Subscribe" defaultMessage="Subscribe" />
            </button>
          </div>
          <Link to='/' className="FooterLinks-logo">
            <div className="Footer-logo" />
            <div className="Footer-name">
              <h4>
                <FormattedMessage
                  id="HostDiagram"
                  defaultMessage="HostDiagram"
                />
              </h4>
            </div>
          </Link>
        </div>
      </div>
      <div className="FooterLinks-line" />
      <div className="FooterLinks-socialMedia">
        <div className="FooterLinks-copyRight">
          <FormattedMessage
            id="copyright"
            defaultMessage="© 2021 HostDiagram, HOST Inc. All rights reserved."
          />
        </div>
        <div className="FooterLinks-socialMedias">
          {FooterSocialMediaData.map((s) => {
            return (
              <Link to={s.url} className={s.cls}>
                {s.icon}
              </Link>
            );
          })}
        </div>
        <div className="FooterLinks-dowload-lg">
          <Link to="/">
            <div className="FooterLinks-googlePlay">
              <div className="FooterLinks-googlePlayLogo" />
              <div>
                <p>
                  <FormattedMessage id="get" defaultMessage="GET IT ON" />
                </p>
                <h3>
                  <FormattedMessage
                    id="GooglePlay"
                    defaultMessage="Google Play"
                  />
                </h3>
              </div>
            </div>
          </Link>
          <Link to="/">
            <div className="FooterLinks-AppStore">
              <div className="FooterLinks-AppStoreLogo" />
              <div>
                <p>
                  <FormattedMessage id="download" defaultMessage="Download on the" />
                </p>
                <h3>
                  <FormattedMessage
                    id="AppStore"
                    defaultMessage="App Store"
                  />
                </h3>
              </div>
            </div>
          </Link>
          <SelectLanguage
            setLanguage={props.setLanguage}
            language={props.language}
          />
        </div>
      </div>
    </div>
  );
};

export default FooterLinks;
