import React from 'react';
import ReactDOM from 'react-dom';
import App from "./components/App";
import {
  HashRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

ReactDOM.render(
    <Router>
        <App/>
    </Router>
    ,
    document.querySelector('#root')
);

