import React from 'react'
import { useDispatch } from 'react-redux'
import { disappearSidebar } from '../actions'

export default function Sidebar({sidebarRef}) {
  const dispatch = useDispatch();
    const [width, setWidth] = React.useState(window.innerWidth);
    React.useEffect(() => {
    window.addEventListener("resize", updateWindowSize);
    return () => {
      window.removeEventListener("resize", updateWindowSize);
    };
  }, []);

   function updateWindowSize() {
    if (window.innerWidth) {
      setWidth(window.innerWidth);
    }
  }
  return (
    <div className='sidebar-container'>
      <div className='sidebar-crossicon' onClick={()=>{dispatch(disappearSidebar())}}><span>X</span>Close</div>
      <div className="sidebar">
      <span><span id = 'sidebar-items'>New Arrivals</span><i id='icon' className='fa fas fa-angle-right'></i></span>
      <span><span id = 'sidebar-items'>Women </span><i id='icon' className='fa fas fa-angle-right'></i></span>
       <span><span id = 'sidebar-items'>Jewellery</span><i id='icon' className='fa fas fa-angle-right'></i></span>
      <span><span id = 'sidebar-items'>Accessories </span><i id='icon' className='fa fas fa-angle-right'></i></span>
      <span><span id = 'sidebar-items'>Handmade Crafts </span><i id='icon' className='fa fas fa-angle-right'></i></span>
      <span><span id = 'sidebar-items'>Services </span><i id='icon' className='fa fas fa-angle-right'></i></span> 
   {width<=800 && <span><span id = 'sidebar-items'>Cart </span><i id='icon' className='fa fas fa-angle-right'></i></span>}
   {width<=800 &&  <span><span id = 'sidebar-items'>Login </span><i id='icon' className='fa fas fa-angle-right'></i></span>}
    </div>
    </div>
  )
}
