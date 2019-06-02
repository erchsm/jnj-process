import React from 'react'
import { render } from 'react-dom'


import MdcNav from '../components/MdcNav'
import MdcFlipper from '../components/MdcFlipper'
import MdcFooter from '../components/MdcFooter'

render(
	<div className="test-page">
		<MdcNav/>
		<MdcFlipper/>
		<MdcFooter/>
	</div>,
	document.getElementById('root')
)



