import { ButtonLink, ButtonLinkMe } from "../../components/button/Button";
import './menu.css'

const Menu = () => {
  return (
		<div className='containerMenu'>
			<span>
				<ButtonLink text='техноложки' to='/kazokustaff' />
				<ButtonLink text='чек листы' to='/check' />
			</span>
			<ButtonLinkMe />
		</div>
	)
}
 
export default Menu;