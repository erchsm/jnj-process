import React from 'react'
import { render } from 'react-dom'
import articleData from '../data/article';
import HomeArticle from '../components/HomeArticle';
import HomeNav from '../components/HomeNav'
import HomeFooter from '../components/HomeFooter'
import { StickyContainer, Sticky } from 'react-sticky'


render(
	<div className="test-page">
		<HomeNav/>
		<HomeArticle
			body={articleData.body}
			title={articleData.title}
			author={articleData.author}
			heroImage={articleData.heroImage}
			tags={articleData.tags}
			likesAmount={articleData.likesAmount}
			timestamp={articleData.timestamp}
		/>
		<HomeFooter />
	</div>
	,
	document.getElementById('root')
)



