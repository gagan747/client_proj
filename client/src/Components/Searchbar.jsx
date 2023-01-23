import React from 'react'
import { useDispatch } from 'react-redux'
import { switchToNavbar } from '../actions';

export default function Searchbar() {
  const inputRef = React.useRef()
  const dispatch = useDispatch();
  React.useEffect(()=>{
inputRef.current.focus()
  },[])
  return (
    <div className='searchbar'>
      <div><i className='fa fa-search' style={{ display: 'flex', alignItems: 'center', fontSize: '35px' }}></i><input ref={inputRef} /></div>
      <i onClick={()=>dispatch(switchToNavbar())} className='fa fa-times'></i>
    </div>
  )
}
