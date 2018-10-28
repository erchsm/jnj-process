import React from 'react'
import { render } from 'react-dom'

import HomeProfileSetup from '../components/HomeProfileSetup'

render(
	<ScrollProvider autoScroll={true}>  
		<HomeProfileSetup />
	</ScrollProvider>
	,
	document.getElementById('root')
)



