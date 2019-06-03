import React from "react";
import BackButton from "./small-components/BackButton.jsx";
import SettingsButton from "./small-components/SettingsButton.jsx";

const Details = () => {
  return (
    <div>
      <SettingsButton />
      <div class="container">
       <table>
         <tr>
           <th>
             <h2>city name</h2>
           </th>
           <th></th>
         </tr>
         <tr>
           <td>
             Szerokość geograficzna:
           </td>
           <td>
             city Latitude
           </td>
         </tr>
         <tr>
           <td>
             Długość geograficzna:
           </td>
           <td>
             city Longitude
           </td>
         </tr>
         <tr>
           <td>
             Średnia temperatura:
           </td>
           <td>
             <span>city Fahrenheit &deg;F</span>
             <span>city Celsius &deg;C</span>
           </td>
         </tr>
       </table>
     </div>
     <BackButton />
    </div>
  )
};

export default Details;
