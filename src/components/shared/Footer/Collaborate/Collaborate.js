import React from "react";
import { FormattedMessage } from "react-intl";
import { Link } from "react-router-dom";
import "./Collaborate.scss";

const Collaborate = () => {
  return (
    <div className="Collaborate">
      <div className="Collaborate-title">
        <h1>
          <FormattedMessage
            id="Collaborate-title"
            defaultMessage="Diagram, collaborate, visualize data, all in one platform"
          />
        </h1>
      </div>
      <div className="Collaborate-description">
        <p>
          <FormattedMessage
            id="Collaborate-description"
            defaultMessage="HostDiagram offers 1000s of scenario-specific templates and over 70+ diagram types."
          />
        </p>
      </div>
      <div className="Collaborate-buttons">
          <Link to='/' className="Collaborate-button1"><FormattedMessage id="Join-now" defaultMessage='Join now'/></Link>

          <Link to='/' className="Collaborate-button2"><FormattedMessage id="Conact-Us" defaultMessage='Contact Us'/></Link>

      </div>
    </div>
  );
};

export default Collaborate;
