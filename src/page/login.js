
import React from 'react';
import {connect} from 'redux-thunk'
import {login,logout} from './../Auth.redux'
class App extends React.Component{
    render(){
        return(
            <div>登录页面</div>
        );
    }
}
const mapStatetoProps=(state)=>{
  return{num:state}
}
const actionCreators={login,logout}
App=connect(mapStatetoProps,actionCreators)(App)
export default App