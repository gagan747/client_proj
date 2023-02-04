const initialState = {
sidebar:false
}
export default function Sidebar(state=initialState,action) {
  switch(action.type){
    case "appear-sidebar":return{sidebar:true};
     case "disappear-sidebar":return state.sidebar?{sidebar:false}:state; //state.sidebar ki extra condition dene k reason janne k lie check reducer Header.js with likely same condition
    default:return state;
  }
}