
import { useState } from 'react'
import './button.css'
import { Link } from 'react-router-dom'


export const Button = props => {
	const { text, func } = props

	return (
		<button className='btnMain' onClick={func}>
			{text}
		</button>
	)
}

export const ButtonLink = ({ text, to }) => {
	return (
		<Link className='btnMain' to={to}>
			{text}
		</Link>
	)
}

export const ButtonLinkMe = ({ text, to }) => {
	return (
		<Link
			className='btnMain'
			to='https://t.me/volkov130'
			target='_blank'
			rel='noreferrer'
		>
			написать в тех.поддержку
		</Link>
	)
}



export const ButtonSelect = ({ text, activeItem, setActiveItem, itemName }) => {
	return (
		<button
			className={`btnS selectBtn ${
				activeItem === itemName ? 'selectBtnActive' : null
			}`}
			onClick={() => setActiveItem(itemName)}
		>
			{text}
		</button>
	)
}

export const ButtonSelectTwo = ({ text, activeItem, setActiveItem, itemName }) => {
	return (
		<button
			className={`btnST selectBtn ${
				activeItem === itemName ? 'selectBtnActive' : null
			}`}
			onClick={() => setActiveItem(itemName)}
		>
			{text}
		</button>
	)
}

export const CheckButton = () => {
	const [checkBtn, setCheckBtn] = useState(false)

	const toggleCheckBtn = () => {
		setCheckBtn(prev => !prev)
	}

	return (
		<button
			className={checkBtn ? 'checkBtnItemOn' : 'checkBtnItemOff'}
			onClick={toggleCheckBtn}
		>
		</button>
	)
}


