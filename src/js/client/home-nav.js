import React from 'react'
import { render } from 'react-dom'
import { ScrollProvider } from 'react-skroll';

import HomeNav from '../components/HomeNav'

render(
	<div className="test-page">
		<HomeNav/>
	</div>,
	document.getElementById('root')
)



