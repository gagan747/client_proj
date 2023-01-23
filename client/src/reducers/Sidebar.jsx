const initialState = {
sidebar:false
}
export default function Sidebar(state=initialState,action) {
  switch(action.type){
    case "appear-sidebar":return{sidebar:true};
     case "disappear-sidebar":return{sidebar:false};
    default:return state;
  }
}