const ADD_GUN='加机关枪'
const REMOVE_GUN='减机关枪'
export function counter(state=0,action) {
  switch (action.type) {
    case ADD_GUN:
      return state+1
      break;
    case REMOVE_GUN:
    return state-1
    default:
    return 10
      break;
  }  
}
// action creator
export function addGUN() {
  return {type:ADD_GUN}
}
export function removeGUN() {
  return {type:REMOVE_GUN}
}
export function addGunAsync() {
  return dispath=>{
    setTimeout(() => {
      dispath(addGUN())
    }, 2000);
  }
}