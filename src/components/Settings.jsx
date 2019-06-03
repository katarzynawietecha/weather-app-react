import React from "react";
import BackButton from "./small-components/BackButton.jsx";
import SettingsButton from "./small-components/SettingsButton.jsx";

const Settings = () => {
  return (
    <div>
      <SettingsButton disabled className="settings"/>
      <div className="container">
      <h2>Ustawienia</h2>
      <hr />
      <div class="row">
        <span class="col-xs-6 col-sm-3">Jednostka:</span>
        <form class="form-group col-xs-6 col-sm-9">
          <label>
            <input type="radio" name="unit" value="C" v-model='unit' checked/>&deg;C
          </label><br/>
          <label>
            <input type="radio" name="unit" value="F" v-model='unit' />&deg;F
          </label>
        </form>
      </div>
      <hr class="m-0" />
      </div>
      <BackButton />
    </div>
  )
};

export default Settings;
