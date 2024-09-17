import "./header.css"
import menu from './menu.svg'

import { Link } from "react-router-dom"

const  Header = () => {
  return (
		<header className='header'>
			<h2 className='logoName'>kazoku staff</h2>
			<button className='btnMenuHeader'>
				<Link to='/menu'>
					<img className='imgMenuHeader' src={menu} alt='menu' />
				</Link>
			</button>
		</header>
	)
}


export default Header