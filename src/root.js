import React from 'react';
import {connect} from 'react-redux'
import { Router} from "react-router-dom";
import {login,logout,initAuth} from './reducer/Auth.redux'
import Root1 from './root1'
import Root2 from './root2'
import './css/common.css'
class jspang extends React.Component {
  componentWillMount(){
    console.log('111');
    this.props.initAuth()
  }
  render() {
    let root=this.props.isAuth?<Root2></Root2>:<Root1></Root1>
    return (
      <React.Fragment>
        {root}
      </React.Fragment>
    );
  }
}
const mapStatetoProps=(state)=>{
  return state.auth
}
const actionCreators={login,logout,initAuth}
jspang=connect(mapStatetoProps,actionCreators)(jspang)
export default jspang
