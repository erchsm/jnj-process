import React from 'react'
import { render } from 'react-dom'
import HomeLandingPage from '../components/HomeLandingPage';
import HomeNav from '../components/HomeNav'
import HomeFooter from '../components/HomeFooter'
import homePageData from '../data/home-page';
render(
	<div className="test-page">
		<HomeNav/>
		<HomeLandingPage
			news={homePageData.NEWS}
		/>
		<HomeFooter />
	</div>
	,
	document.getElementById('root')
)



