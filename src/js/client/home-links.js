import React from 'react'
import { render } from 'react-dom'
import { ScrollProvider } from 'react-skroll';

import HomeNav from '../components/HomeNav'
import HomeLinksPage from '../components/HomeLinksPage'

render(
	<div className="test-page">
		<HomeNav/>
		<ScrollProvider>  
			<HomeLinksPage dropdownLabel={'Sort By'} hideSearch={true}/>
		</ScrollProvider>
	</div>,
	document.getElementById('root')
)



