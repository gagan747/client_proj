import React from 'react'
import { useDispatch } from 'react-redux'
import { switchToSearchbar } from '../actions';

export default function Navbar() {
	const dispatch = useDispatch();
	return (
		<div className='navbar'>
			<div className='div1'>
				<i className="fa fa-solid fa-bars"></i> 
				<span>
					<i className="fa fa-solid fa-bars"></i>  Menu</span>
				<span onClick={()=>{
					dispatch(switchToSearchbar())
				}}><i className='fa fa-search'></i>  Search</span>
			</div>
			<div className='div2'>Kaleere</div>
			<div className='div3'>
				<span><i className='fa	fas fa-user-circle' style={{fontSize:'29px'}}></i></span>
				<span>My Cart <i class="fa fa-shopping-cart" aria-hidden="true"></i></span>
					<span onClick={()=>{
					dispatch(switchToSearchbar())
				}}><i className='fa fa-search'></i></span>
			</div>
		</div>
	)
}
