import React from 'react'
import { disappearSidebar, switchToNavbar } from '../actions'
import { useDispatch } from 'react-redux'
import Box from './Box'

export default function Boxes() {
	const dispatch = useDispatch()
	return (
		<div onClick={() => { dispatch(disappearSidebar());dispatch(switchToNavbar()) }}>
			<Box bgUrl='https://kaleere.in/wp-content/uploads/2022/09/Screenshot_2.png' btnMsg='DISCOVER NEW ARRIVALS' />
			<Box bgUrl='https://kaleere.in/wp-content/uploads/2022/09/1920X800_-_WEBSITE_x800.webp' btnMsg='Discover The Collection' distanceFromBottom={50} />
			<Box bgUrl='	https://kaleere.in/wp-content/uploads/2022/09/360_F_273316816_N9164vXl3NTl1W50Z3o2ocQmtjBAAPOO.jpg' btnMsg='Discover The Collection' />
		</div>
	)
}
