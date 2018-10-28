import React from 'react'
import { render } from 'react-dom'

import HomeProfileSetup from '../components/HomeProfileSetup';
import { ScrollProvider } from 'react-skroll';

render(
	<ScrollProvider autoScroll={true}>  
		<HomeProfileSetup />
	</ScrollProvider>
	,
	document.getElementById('root')
)



