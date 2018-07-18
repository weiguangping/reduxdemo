import React from 'react'
import {connect} from 'react-redux'
import {addGUN,removeGUN,addGunAsync} from './index.redux'
class App extends React.Component{
  // constructor(props){
  //   super(props)
  // }
  render(){
    const num=this.props.num;
      const addGUN=this.props.addGUN
      const removeGUN=this.props.removeGUN
      const addGunAsync=this.props.addGunAsync
      return(
        <div>
          <h1>现在有机枪{num}把</h1>
        <button onClick={addGUN}>+</button>
        <button onClick={removeGUN}>-</button>
        <button onClick={addGunAsync}>拖两秒</button>
        </div>
      )
  }
}
const mapStatetoProps=(state)=>{
  return{num:state}
}
const actionCreators={addGUN,removeGUN,addGunAsync}
App=connect(mapStatetoProps,actionCreators)(App)
export default App