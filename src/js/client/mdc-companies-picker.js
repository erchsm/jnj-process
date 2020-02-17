import React from 'react'
import { render } from 'react-dom'

import MdcNav from '../components/MdcNav'
import MdcCompanyPicker from '../components/MdcCompanyPicker'
import MdcFooter from '../components/MdcFooter'

render(
	<div className="test-page">
		<MdcNav/>
		<MdcCompanyPicker/>
		<MdcFooter/>
	</div>,
	document.getElementById('root')
)



