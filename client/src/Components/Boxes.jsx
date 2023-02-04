import React from 'react'
import Box from './Box'
import { useDispatch } from 'react-redux'
import { switchToNavbar,disappearSidebar } from '../actions'

export default function Boxes() {
	const dispatch = useDispatch();
	return (
		<div onClick={()=>{
			dispatch(switchToNavbar());dispatch(disappearSidebar())
		}}>
			<Box bgUrl='https://kaleere.in/wp-content/uploads/2022/09/Screenshot_2.png' btnMsg='DISCOVER NEW ARRIVALS' />
			<Box bgUrl='https://kaleere.in/wp-content/uploads/2022/09/1920X800_-_WEBSITE_x800.webp' btnMsg='Discover The Collection' boxName="WOMEN'S COLLECTION" />
			<Box bgUrl='	https://kaleere.in/wp-content/uploads/2022/09/360_F_273316816_N9164vXl3NTl1W50Z3o2ocQmtjBAAPOO.jpg' btnMsg='Discover The Collection' boxName = "ACCESORIES"/>
		</div>
	)
}
