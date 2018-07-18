
import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Nav from './nav';
import Jspang from './page/jsping';
import Jspangb from './page/jspingb';
import Jspangc from './page/jspingc';
import Error from './page/error';
export default class jspang extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Switch>
            <Route exact path="/" component={Jspang} />
            <Route path="/Jspangb" component={Jspangb} />
            <Route path="/Jspangc" component={Jspangc} />
            <Route component={Error} />
          </Switch>
        </div>
      </Router>
    );
  }
}