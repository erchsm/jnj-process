import React from 'react'
import { render } from 'react-dom'

import MdcNav from '../components/MdcNav'
import MdcCompaniesPicker from '../components/MdcCompaniesPicker'
import MdcFooter from '../components/MdcFooter'

render(
	<div className="test-page">
		<MdcNav/>
		<MdcCompaniesPicker/>
		<MdcFooter/>
	</div>,
	document.getElementById('root')
)



