const LOGIN='LOGIN'
const LOGOUT='LOGOUT'
export function auth(state={isAuth=false,user:'李云龙'},action) {
  switch (action.type) {
    case LOGIN:
      return{...state,isAuth:true}
      break;
    case LOGOUT:
      return{...state,isAuth:false}
      break;
    default:
      break;
  }
}
export function login() {
  return {type:LOGIN}
}
export function logout() {
  return {type:LOGOUT}
}