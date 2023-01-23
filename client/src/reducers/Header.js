const initialState = {
  Navbar:true,
  SearchBar:false
}
export default function Header(state=initialState,action) {
  switch(action.type){
    case "switch-navbar": return {Navbar:true,SearchBar:false}; 
    case "switch-searchbar":return{Navbar:false,SearchBar:true};
    default:return {...initialState};
  }
}
