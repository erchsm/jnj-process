import React from 'react'
import { render } from 'react-dom'


import MdcNav from '../components/MdcNav'
import MdcSwitcher from '../components/MdcSwitcher'
import MdcFooter from '../components/MdcFooter'

render(
	<div className="test-page">
		<MdcNav/>
		<MdcSwitcher/>
		<MdcFooter/>
	</div>,
	document.getElementById('root')
)



