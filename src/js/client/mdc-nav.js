import React from 'react'
import { render } from 'react-dom'


import MdcNav from '../components/MdcNav'

render(
	<div className="test-page">
		<MdcNav />
		<section></section>
		<section></section>
		<section></section>
		<section></section>
	</div>,
	document.getElementById('root')
)



