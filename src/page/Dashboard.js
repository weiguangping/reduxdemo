
import React from "react";
import { HashRouter as Router, Route, Switch,Link } from "react-router-dom";
import Nav from './../nav';
import Jspang from './jsping';
import Jspangb from './jspingb';
import Jspangc from './jspingc';
import Error from './error';
export default class jspang extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li><Link to='/dashboard/'>1</Link></li>
            <li><Link to='/dashboard/Jspangb'>2</Link></li>
            <li><Link to='/dashboard/Jspangc'>3</Link></li>
          </ul>
          <Switch>
            <Route exact path="/dashboard/" component={Jspang} />
            <Route path="/dashboard/Jspangb" component={Jspangb} />
            <Route path="/dashboard/Jspangc" component={Jspangc} />
            <Route component={Error} />
          </Switch>
        </div>
      </Router>
    );
  }
}