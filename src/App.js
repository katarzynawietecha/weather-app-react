import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import {faTimesCircle, faArrowCircleLeft, faCog, faSearchPlus } from '@fortawesome/free-solid-svg-icons'

import Homepage from "./components/Homepage.jsx";
import Settings from "./components/Settings.jsx";
import Details from "./components/Details.jsx";

library.add(faTimesCircle, faArrowCircleLeft, faCog, faSearchPlus);


const App = () => {
  return (
    <div>
      <Router>
        <div>
          <Route exact path="/" component={Homepage} />
          <Route path="/settings" component={Settings} />
          <Route path="/details" component={Details} />
        </div>
      </Router>
    </div>
  );
}

export default App;
