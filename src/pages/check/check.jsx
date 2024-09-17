import { useState } from 'react'
import './check.css'
import closeIcon from '../../components/icons/close.svg'
import plusIcon from '../../components/icons/plus.svg'
import { ButtonSelectTwo, CheckButton } from '../../components/button/Button'
import { checkLists } from '../../data'

const CheckItem = ({ name, text }) => {
	const [openCheck, setIsOpenCheck] = useState(false)

	const toggleCheck = () => {
		setIsOpenCheck(prev => !prev)
	}

	return (
		<div className='checkItem'>
			<div className='headerCheck'>
				<h2 className='nameCheckHeader'>{name}</h2>
				<button className='checkBtn' onClick={toggleCheck}>
					<img
						className='iconsCheckHeader'
						src={openCheck ? closeIcon : plusIcon}
						alt={openCheck ? 'close' : 'open'}
					/>
				</button>
			</div>

			{openCheck && (
				<div className='checkContent'>
					<ul className='checkList'>
						{text.map((item, id) => (
							<li className='checkListItemContent' key={id}>
								<div className='flexItem'>
									<p className='textCheckItem'>{item}</p>
									<span>
										<CheckButton />
									</span>
								</div>
							</li>
						))}
					</ul>
				</div>
			)}
		</div>
	)
}


const Check = () => {
  const [activeCheck, setActiveCheck] = useState('открытие')

  return (
		<div className='containerCheck'>
			<h2 className='checkContainerTitle'>Чек листы</h2>
			<div className='selectProduct'>
				<ButtonSelectTwo
					text='открытие'
					itemName='открытие'
					activeItem={activeCheck}
					setActiveItem={setActiveCheck}
				/>
				<ButtonSelectTwo
					text='закрытие'
					itemName='закрытие'
					activeItem={activeCheck}
					setActiveItem={setActiveCheck}
				/>
			</div>

			{activeCheck === 'открытие' &&
				checkLists?.map((item, idx) => (
					<CheckItem key={idx} name={item.nameItem} text={item.openKitchen} />
				))}
			{activeCheck === 'закрытие' &&
				checkLists?.map((item, idx) => (
					<CheckItem key={idx} name={item.nameItem} text={item.closeKitchen} />
				))}
		</div>
	)
}
 
export default Check;