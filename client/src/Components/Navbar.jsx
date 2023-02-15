/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { switchToSearchbar, appearSidebar } from '../actions';
import Sidebar from './Sidebar';

export default function Navbar() {
	const state = useSelector((state) => state.Sidebar)
	const [rerender, setRerender] = useState(false)
	const dispatch = useDispatch()
	const cartCount = 0;
	const handlePopState = function () { //for listening to back and forward arrow buttom of browser
		setRerender((rerender) => !rerender)
	}
	const handleUrlChange = () => {
		setRerender((rerender) => !rerender)
	}
	useEffect(() => {
		window.addEventListener('popstate', handlePopState);
		window.addEventListener('urlChange', handleUrlChange)
		return () => {
			window.removeEventListener('popstate', handlePopState)
			window.removeEventListener('urlChange', handleUrlChange)
		}
	}, [])

	return (
		<>
			{state.sidebar && <Sidebar />}
			{window.location.pathname.match(/^\/(login|signup)$/) ? <></> : <div className={'navbar' + (window.location.pathname === '/' ? ' navbar-theme1' : ' navbar-theme2')}>
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
					<span><i className='fa	fas fa-user-circle' style={{ fontSize: '27px' }}></i></span>
					<span>My Cart <i className="fa fa-shopping-cart" aria-hidden="true"><span>{cartCount > 99 ? '99+' : cartCount}</span></i></span>
					<span onClick={() => {
						dispatch(switchToSearchbar())
					}}><i className='fa fa-search'></i></span>
				</div>
			</div>
			}
		</>
	)
}


