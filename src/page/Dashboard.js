import React from "react";
import { HashRouter as Router, Route, Switch, Link,Redirect } from "react-router-dom";
import Nav from "./../component/nav";
import Jspang from "./jsping";
import Jspangb from "./jspingb";
import Jspangc from "./jspingc";
import Error from "./error";
import App from "./App";
import { connect } from "react-redux";
import { login, logout } from "./../reducer/Auth.redux";

class jspang extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.props);
    
    const redirectTologin=<Redirect to='/login'></Redirect>
    const app = (
      <Router>
        <div>
          <h1>已经登陆了</h1>
          {this.props.isAuth?<button onClick={this.props.logout}>注销</button>:null}
          <ul>
            <li>
              <Link to="/dashboard/">1</Link>
            </li>
            <li>
              <Link to="/dashboard/Jspangb">2</Link>
            </li>
            <li>
              <Link to="/dashboard/Jspangc">3</Link>
            </li>
          </ul>
          <Switch>
            <Route exact path="/dashboard/" component={Jspang} />
            <Route path="/dashboard/Jspangb" component={Jspangb} />
            <Route path="/dashboard/Jspangc" component={Jspangc} />
            <Route component={Jspang} />
          </Switch>
          <App></App>
        </div>
      </Router>
    );
    return (
      this.props.isAuth?app:redirectTologin
    );
  }
}
const mapStatetoProps = state => {
  return  state.auth ;
};
const actionCreators = { login, logout };
jspang = connect(
  mapStatetoProps,
  actionCreators
)(jspang);
export default jspang;
