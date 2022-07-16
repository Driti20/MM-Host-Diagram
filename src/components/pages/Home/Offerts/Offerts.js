import React from "react";
import { FormattedMessage } from "react-intl";
import "../style/Offerts.scss";
import { offertData } from "./data";
import { ReactComponent as Member } from "../../../../assets/shared/offerts/member.svg";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Offert from "./Offert";
import Offert2 from "./Offert2";

const Offerts = () => {
  return (
    <div className="Offerts">
      <div className="Offert-title">
        <h1>
          <FormattedMessage
            id="title"
            defaultMessage="Choose a plan that’s right for you"
          />
        </h1>
      </div>
      <Tabs>
        <TabList>
          <Tab>
          Monthly
            {/* <FormattedMessage id="monthly" defaultMessage="Monthly" /> */}
          </Tab>
          <Tab>
          Annually
            {/* <FormattedMessage id="annually" defaultMessage="Annually" /> */}
          </Tab>
        </TabList>
        <TabPanel>
          <Offert/>
        </TabPanel>
        <TabPanel>
          <Offert2/>
        </TabPanel>
      </Tabs>
      <div className="offert-viewPlans">
        <Link className="offert-viewPlans-link" to="/">
          <FormattedMessage id="View-plans" defaultMessage="View all plans" />
          <BsArrowRight className="offert-viewPlans-arrow" />
        </Link>
      </div>
    </div>
  );
};

export default Offerts;
