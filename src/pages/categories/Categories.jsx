import { useState } from 'react'
import './categories.css'
import { ButtonSelect, ButtonSelectTwo } from '../../components/button/Button'
import { MyIcon, MyIconClose } from '../../components/icons/Icons'
import {
	dataFish,
	dataRamen,
	dataHot,
	dataConfectioner,
	dataFreelance,
	dataBar,
} from '../../data'

const Categories = () => {
	const [activeItem, setActiveItem] = useState('fish')

	const categories = [
		{ name: 'рыба', itemName: 'fish', data: dataFish },
		{ name: 'спец предложение', itemName: 'freelance', data: dataFreelance },
		{ name: 'рамен', itemName: 'ramen', data: dataRamen },
		{ name: 'горячка', itemName: 'hot', data: dataHot },
		{ name: 'кондитер', itemName: 'confectioner', data: dataConfectioner },
		{ name: 'бар', itemName: 'bar', data: dataBar },
	]

	return (
		<section className='sectionCategories'>
			<h2 className='titleSectionCategories'>Выбери подразделение:</h2>
			<div className='selectBtnBlock'>
				{categories.map(category => (
					<ButtonSelect
						key={category.itemName}
						text={category.name}
						itemName={category.itemName}
						activeItem={activeItem}
						setActiveItem={setActiveItem}
					/>
				))}
			</div>
			{categories.map(category =>
				activeItem === category.itemName ? (
					<CategoriesList key={category.itemName} data={category.data} />
				) : null
			)}
		</section>
	)
}

const CardCategories = ({ card }) => {
	const { header, structure, manual, img } = card
	const [isActive, setIsActive] = useState(false)

	const handleClick = () => {
		setIsActive(!isActive)
	}

	return (
		<div className='categories'>
			<div className='cardCategories'>
				<h2 className='textCardCategories'>{header}</h2>
				<button className='wrpBtn' onClick={handleClick}>
					{isActive ? <MyIconClose /> : <MyIcon />}
				</button>
			</div>

			{isActive && (
				<div className='descriptionCategories'>
					<ul>
						{structure.map((item, index) => (
							<li className='itemDescription' key={index}>
								<span className='textSpan'>{item[0]}</span>
								<span className='textSpan'>{item[1]}</span>
							</li>
						))}
					</ul>
					{img !== '' && (
						<div className='wrpImage'>
							<img className='imageCard' src={img} alt={header} />
						</div>
					)}
					<div className='containerManual'>
						<span className='textSpan'>{manual}</span>
					</div>
				</div>
			)}
		</div>
	)
}

const CategoriesList = ({ data }) => {
	const [active, setActive] = useState('блюда')

	return (
		<>
			<h2 className='titleSectionCategories'>выбери продукт:</h2>
			<div className='selectProduct'>
				<ButtonSelectTwo
					text='блюда'
					itemName='блюда'
					activeItem={active}
					setActiveItem={setActive}
				/>
				<ButtonSelectTwo
					text='полуфабрикаты'
					itemName='полуфабрикаты'
					activeItem={active}
					setActiveItem={setActive}
				/>
			</div>
			{active === 'блюда' &&
				data[0]?.map((item, idx) => <CardCategories key={idx} card={item} />)}
			{active === 'полуфабрикаты' &&
				data[1]?.map((item, idx) => <CardCategories key={idx} card={item} />)}
		</>
	)
}

export default Categories
