import React from "react";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import Nav from "./component/nav";
import Jspang from "./page/jsping";
import Jspangb from "./page/jspingb";
import Jspangc from "./page/jspingc";
import Error from "./page/error";
import createHistory from "history/createHashHistory";
const history = createHistory();
export default class jspang extends React.Component {
  componentWillMount() {
    console.log("root2");
  }
  render() {
    return (
      <div className="page">
        <div className="header">header</div>
        <div className="conter">
          <Router history={history}>
            <div className='container'>
              <Nav />
              <Switch>
                <Route exact path="/" component={Jspang} />
                <Route path="/Jspangb" component={Jspangb} />
                <Route path="/Jspangc" component={Jspangc} />
                <Redirect to="/" />
              </Switch>
            </div>
          </Router>
        </div>
        <div className="footer">footer</div>
      </div>
    );
  }
}
