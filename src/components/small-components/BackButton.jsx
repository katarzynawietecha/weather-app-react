import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const BackButton = ({history}) => {
  return (
    <div className="text-right">
      <div class="container p-2">
        <Link className="btn btn-primary" to="" onClick={() => history.goBack()}><FontAwesomeIcon icon="arrow-circle-left" className="mr-1"/>Powrót</Link>
      </div>
    </div>
  )
}

export default BackButton
