import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/layout/Layout'

import Categories from './pages/categories/Categories'
import Menu from './pages/menu/Menu'
import Check from './pages/check/check'

function App() {
  return (
		<Layout>
			<Routes>
				<Route path='/kazokustaff' element={<Categories />} />
				<Route path='/menu' element={<Menu />} />
				<Route path='/check' element={<Check />} />
			</Routes>
		</Layout>
	)
}

export default App;


