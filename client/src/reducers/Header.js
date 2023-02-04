const initialState = {
  Navbar:true,
  SearchBar:false
}
export default function Header(state=initialState,action) {
  switch(action.type){
    case "switch-navbar": return state.Navbar?state:{Navbar:true,SearchBar:false}; //added extra condition of state.Navbar so that on outside click if navbar is really closed then  new reference is returned with navbar:true to cause rerendering of subscribers and  if already open then current state is returned so that app.js(subscriber) is not rendered faltu m kyuki switch to navbar hr baar naya reference return krega and agr values same bhi hui or reference alag alag hua to app.js(subscriber) faltu m render krega (or ye only isi switch case m isliye lagaya h kyuki outside click p switch-navbar hi dispatch krta hu)
    case "switch-searchbar":return{Navbar:false,SearchBar:true};
    default:return state;
  }
}
