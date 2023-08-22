import { useState } from "react";
import Select from "react-select";
import { Flex } from "@aws-amplify/ui-react";
import React, { Component } from "react";

import { siteLocations } from "../data/site-locations";

import "@aws-amplify/ui-react/styles.css";

// these three button is the top right drop down to select country , state , sitename ,
// and it will trigger api call to grab the right api and load the right data to the site
export default function ThreeButton(props) {
  const { setSiteName, setStateName, sitesDisplay } = props;
  const [country, setCountry] = useState(null);
  const [state, setState] = useState(null);
  const [stateList, setStateList] = useState([]);
  const [site, setSite] = useState(null);
  const [siteList, setSiteList] = useState([]);

  // handle change event of the country dropdown
  const handleCountryChange = (obj) => {
    setCountry(obj);
    setStateList(obj.languages);
    console.log(stateList);
    setState(null);
  };

  // handle change event of the states dropdowns
  console.log(state);
  console.log(siteList);
  console.log(sitesDisplay);
  const handleStateChange = (obj) => {
    setState(obj);
    setStateName(obj);
    // test out the state name //
    console.log(obj);
    setSiteList(obj);
    console.log(siteList);
    // setSite(null);
  };
  console.log(siteList);
  // handle sites event of the site dropdown
  const handleSiteChange = (obj) => {
    setSiteName(sitesDisplay);
    setSite(obj);
  };

  // const [mydata, setData] = useState(null);
  console.log(sitesDisplay);

  return (
    <div>
      <Flex
        direction="row"
        justifyContent="flex-start"
        alignItems="stretch"
        alignContent="flex-start"
        wrap="nowrap"
        shrink="flex-shrink"
      >
        <div style={{ width: 110, marginBottom: 20 }}>
          <Select
            placeholder="country"
            value={country}
            options={siteLocations}
            onChange={handleCountryChange}
            getOptionLabel={(x) => x.region}
            getOptionValue={(x) => x.country_code}
          />
        </div>
        <div style={{ width: 110, marginBottom: 20 }}>
          <Select
            placeholder="state"
            value={state}
            options={stateList}
            onChange={handleStateChange}
            getOptionLabel={(x) => x.name}
            getOptionValue={(x) => x.code}
          />
        </div>
        <div style={{ width: 110, marginBottom: 20 }}>
          <Select
            placeholder="site"
            value={site}
            options={siteList}
            onChange={handleSiteChange}
            getOptionLabel={(x) => x.site_name}
            getOptionValue={(x) => x.site_name}
          />
        </div>
      </Flex>
    </div>
  );
}
