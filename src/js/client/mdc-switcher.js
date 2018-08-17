import React from 'react'
import { render } from 'react-dom'


import MdcNav from '../components/MdcNav'
import MdcSwitcher from '../components/MdcSwitcher'

render(
	<div className="test-page">
		<MdcNav/>
		<MdcSwitcher/>
	</div>,
	document.getElementById('root')
)



