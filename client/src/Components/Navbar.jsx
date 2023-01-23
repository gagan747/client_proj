import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { switchToSearchbar, appearSidebar } from '../actions';
import Sidebar from './Sidebar';

export default function Navbar() {
	const state = useSelector((state) => state.Sidebar);
	const dispatch = useDispatch()
	return (
		<>
		{state.sidebar && 	<Sidebar />}
			<div className='navbar'>
				<div className='div1'>
					<i onClick={() => {
						dispatch(appearSidebar())
					}} className="fa fa-solid fa-bars"></i>
					<span onClick={() => {
						dispatch(appearSidebar())
					}}>
						<i className="fa fa-solid fa-bars"></i>  Menu</span>
					<span onClick={() => {
						dispatch(switchToSearchbar())
					}}><i className='fa fa-search'></i>  Search</span>
				</div>
				<div className='div2'>KALEERE</div>
				<div className='div3'>
					<span><i className='fa	fas fa-user-circle' style={{ fontSize: '29px' }}></i></span>
					<span>My Cart <i class="fa fa-shopping-cart" aria-hidden="true"></i></span>
					<span onClick={() => {
						dispatch(switchToSearchbar())
					}}><i className='fa fa-search'></i></span>
				</div>
			</div>
		</>
	)
}
