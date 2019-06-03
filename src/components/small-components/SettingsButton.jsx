import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const SettingsButton = () => {
  return (
    <div className="bg-light text-right">
      <div className="container p-2">
        <Link to="/settings" className="btn btn-outline-primary"><FontAwesomeIcon icon="cog" className="mr-1"/>Ustawienia</Link>
      </div>
    </div>
  )
};

export default SettingsButton;
