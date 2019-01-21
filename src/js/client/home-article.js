import React from 'react'
import { render } from 'react-dom'
import articleData from '../data/article';
import HomeArticle from '../components/HomeArticle';
import HomeNav from '../components/HomeNav'
import HomeFooter from '../components/HomeFooter'

render(
	<div className="test-page">
		<HomeNav/>
		<HomeArticle
			body={articleData.body}
			title={articleData.title}
			heroImage={articleData.heroImage}
			tags={articleData.tags}
			likesAmount={articleData.likesAmount}
			headline={articleData.headline}
		/>
		<HomeFooter />
	</div>
	,
	document.getElementById('root')
)



