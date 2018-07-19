import React from "react";
import { HashRouter as Router, Route, Switch ,Redirect} from "react-router-dom";
import login from './page/login';
import Dashboard from './page/Dashboard';
import Error from './page/error';
export default class jspang extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={login} />
            <Route exact path="/login" component={login} />
            <Redirect to='/' />
          </Switch>
        </div>
      </Router>
    );
  }
}
