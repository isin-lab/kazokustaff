import { ButtonLink } from "../../components/button/Button";
import './menu.css'
const Menu = () => {
  return (
		<div className='containerMenu'>
			<ButtonLink text='техноложки' to='/' />
			<ButtonLink text='чек листы' to='/check' />
			<ButtonLink text='номера технических служб' to='/check' />
		</div>
	)
}
 
export default Menu;