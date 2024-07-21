import "./layout.css"
import Header from "../header/Header"

const Layout = ({children}) => {
	return (
		<div className='layoutContainer'>
			<Header />
			{children}
		</div>
	)
}


export default Layout