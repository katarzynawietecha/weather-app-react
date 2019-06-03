import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Cities = () => {
  return (
    <table>
      <tr>
        <th>#</th>
        <th>Miasto</th>
        <th>Średnia prognozowana temperatura</th>
        <th></th>
      </tr>
      <tr>
        <td> index + 1</td>
        <td>
          city name
        </td>
        <td>
          <span>city Fahrenheit &deg;F</span>
          <span>city Celsius &deg;C</span>
        </td>
        <td><button type="submit" className="btn btn-outline-danger w-100">
          <FontAwesomeIcon icon="times-circle" className="mr-1"/>
          Usuń</button>
        </td>
      </tr>
    </table>
  )
}

export default Cities;
