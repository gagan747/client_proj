import React from 'react'
import { useLocation } from 'react-router-dom'
import ProductsContainer from './ProductsContainer';
import { useDispatch } from 'react-redux'
import { disappearSidebar, switchToNavbar } from '../actions';

export default function Products() {
  const { search } = useLocation();
  const type = new URLSearchParams(search).get('type');
  React.useEffect(()=>{
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  },[])
  const dispatch = useDispatch();
  return (
    <div className='products' onClick={()=>{dispatch(disappearSidebar()); dispatch(switchToNavbar())}}>
      <hr />
      <div className='products-navbar'>
        <span style={{ fontSize: 'x-large' }}>{type}</span>
        <span style={{ fontSize: 'small' }}><select style={{border:'0px', outline:'0px',background:'white'}}><option selected>Default filter</option></select></span>
      </div>
      <hr style={{ margin: '0px 100px 0px 100px' }} />
      <ProductsContainer />
    </div>
  )
}
