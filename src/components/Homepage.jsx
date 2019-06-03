import React from 'react';

import SettingsButton from "./small-components/SettingsButton.jsx";
import AddCity from "./small-components/AddCity.jsx";
import Cities from "./small-components/Cities.jsx";

const Homepage = () => {
  return (
    <div>
      <SettingsButton />
      <div className="container">
        <AddCity />
        <hr />
        <Cities />
      </div>
    </div>
  )
}

export default Homepage;
