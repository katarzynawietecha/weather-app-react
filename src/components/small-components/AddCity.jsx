import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AddCity = () => {
  return (
    <form class="form-group pt-5">
      <input type="text" placeholder="Nazwa miasta" className="form-control d-inline-block align-middle" id="cityname" /><button type="submit" className="btn btn-primary d-inline-block align-middle w-25"><FontAwesomeIcon icon="search-plus" className="mr-1"/>Dodaj</button>
    </form>
  )
};

export default AddCity;
