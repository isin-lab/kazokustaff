import React from 'react'
import plus from './plus.svg'
import close from './close.svg'
import './icons.css'

export const MyIcon = () => {
	return (
		<div className='myIcon iconGreen'>
			<img className='iconImage' src={plus} alt='rub' />
		</div>
	)
}

export const MyIconClose = () => {
	return (
		<div className='myIcon iconGreen'>
			<img className='iconImage' src={close} alt='rub' />
		</div>
	)
}

